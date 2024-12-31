import React, {useEffect, useState} from "react";
import {AppBar, Box, Drawer, Grid, Menu, MenuItem, Modal, useMediaQuery} from "@mui/material";
import Button from "@mui/material/Button";
import lzIcon from "@/assets/icons/svg/lz.svg";
import MySvgIcon from "@/compoents/SvgIcon";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {I18nLocaleInfoType} from "@/types/config/i18nLocaleInfo.ts";
import {switchLanguage} from "@/i18n.ts";
import {listI18nLocaleInfo} from "@/apis/config/i18nLocaleInfo.ts";
import "./index.scss"
// 菜单数据
const menus = [
    {
        label: "用户",
        key: "Dashboard",
        menuId: 1,
        path: "/login",
        children: [
            {label: "登录", key: "Dashboard-Profile", menuId: 2, path: "/login"},
            {label: "My account", key: "Dashboard-MyAccount", menuId: 3, path: "/login"},
            {label: "Logout", key: "Dashboard-Logout", menuId: 4, path: "/login"},
        ],
    },
    {
        label: "设置",
        key: "Settings",
        menuId: 4,
        path: "/login",
        children: [
            {label: "General", key: "Settings-General", menuId: 5, path: "/login"},
            {label: "安全", key: "Settings-Security", menuId: 6, path: "/login"},
        ],
    },
    {
        label: "Home",
        key: "Home",
        menuId: 10,
        path: "/",
        // children: [
        //     {label: "General", key: "Settings-General", menuId: 11, path: "/home"},
        //     {label: "安全", key: "Settings-Security", menuId: 12, path: "/home"},
        // ],
    }, {
        label: "XC",
        key: "Home",
        menuId: 101,
        path: "/",
        // children: [
        //     {label: "General", key: "Settings-General", menuId: 11, path: "/home"},
        //     {label: "安全", key: "Settings-Security", menuId: 12, path: "/home"},
        // ],
    }
];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
const Heard = () => {
        const navigate = useNavigate();
        const [anchorEl, setAnchorEl] = useState<null | HTMLElement | SVGSVGElement>(null); // 当前菜单的锚点
        const [openMenu, setOpenMenu] = useState<number | null>(null); // 当前打开的菜单
        const [drawerOpen, setDrawerOpen] = useState(false);
        const isSmallScreen = useMediaQuery('(max-width:800px)'); // 检测屏幕尺寸
        const isMediumScreen = useMediaQuery('(max-width:1000px)'); // 检测屏幕尺寸
        const {t} = useTranslation();
        const [openLanguage, setOpenLanguage] = useState<boolean | null>(false);
        const [localeInfoList, setLocaleInfoList] = useState<I18nLocaleInfoType[]>([]);
        const [localeInfoQuery] = useState<I18nLocaleInfoType>({localeStatus: '0'});
        // 切换语言的处理函数
        const handleSwitchLanguage = (lang?: string) => {
            if (lang) {
                switchLanguage(lang); // 切换语言x
            }
        };
        const [open, setOpen] = React.useState(false);
        const handleOpenModal = () => {
            setOpen(true);
        };
        const handleCloseModal = () => {
            setOpen(false);
        };

        // 处理点击按钮显示菜单
        const handleClick = (event: React.MouseEvent<HTMLButtonElement>, menu?: object) => {
            setAnchorEl(event.currentTarget); // 设置当前按钮为锚点
            // @ts-ignore
            if (menu?.children) {
                // @ts-ignore
                setOpenMenu(menu?.menuId); // 设置当前菜单为打开状态
            } else if (menu) {
                // @ts-ignore
                navigate(menu.path);
            }
        };

        // 关闭菜单
        const handleClose = () => {
            setAnchorEl(null);
            setOpenMenu(null);
        };

        const handleCloseLanguage = () => {
            setOpenLanguage(false);
        }
        const handleClickLanguage = (event: React.MouseEvent<SVGSVGElement>) => {
            // console.log('打开语言')
            // setOpenMenu(true)
            if (event.currentTarget) {
                setAnchorEl(event.currentTarget);  // 设置锚点元素
            }
            setOpenLanguage(true)
        }

        // 处理点击菜单项
        const handleMenuItemClick = (child: { label: string; key: string; menuId: number; path?: string }) => {
            if (child.path) {
                navigate(child.path);
            }
            handleClose(); // 关闭菜单
        };

        // 切换折叠菜单
        const toggleDrawer = () => {
            setDrawerOpen(!drawerOpen);
        };

        //获取语言
        useEffect(() => {
            // console.log('Fetching data with:', localeInfoQuery);
            listI18nLocaleInfo(localeInfoQuery).then(r => {
                    if (r.rows) {
                        setLocaleInfoList(r.rows)
                    }
                }
            )
        }, [localeInfoQuery])

        const [headerHeight, setHeaderHeight] = useState(7); // 默认高度为7em
        const [iconSize, setIconSize] = useState(80); // 默认图标大小为 80em
        const [scrolled, setScrolled] = useState(false); // 监听是否滚动
        useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 50) {
                    setHeaderHeight(4); // 当滚动超过50px时，减少高度
                    setIconSize(40); // 同时缩小图标的大小
                    setScrolled(true)
                } else {
                    setHeaderHeight(7); // 恢复原始高度
                    setIconSize(80); // 同时缩小图标的大小
                    setScrolled(false)
                }
            };

            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);
        return (
            <header className="header">
                <AppBar className={`appBar ${scrolled ? 'scrolled' : ''}`} style={{height: `${headerHeight}em`}}>
                    <Grid container className={"toolBar"}>
                        <Grid item xs={2} className="title-log">
                            <img src={lzIcon} width={`${iconSize}em`} // 动态调整图标的大小
                                 height={`${iconSize}em`} // 动态调整图标的大小
                                 style={{
                                     transition: 'width 0.3s ease, height 0.3s ease', // 添加平滑过渡
                                 }}
                                 alt="lz icon"/>
                        </Grid>
                        <Grid item xs={10} className="menu">
                            {/* 当是小屏幕时，点击按钮展开折叠菜单 */}
                            {isSmallScreen ? (
                                <Button onClick={toggleDrawer}>
                                <span className={"menu-content menu-content-hover"}
                                      style={{marginLeft: "8em"}}>{t('menu')}</span>
                                </Button>
                            ) : (
                                <Grid container columns={12}>
                                    <Grid item xs={8} className={"menu-item"}> {menus.map((menu) => (
                                        <span key={menu.menuId}>
                                                {/* 菜单按钮 */}
                                            <Button
                                                onClick={(event) => handleClick(event, menu)} // 点击时设置锚点并展开菜单
                                                aria-controls={`menu-${menu.menuId}`}
                                                aria-haspopup="true"
                                                sx={{
                                                    paddingY: '0em', // 调整上下内边距，例如 0.5em
                                                    paddingX: '0em',   // 可以调整左右内边距
                                                }}
                                            >
                                                <span className={"menu-content menu-content-hover"}>
                                                  {t(menu.label)}
                                                 </span>
                                                </Button>
                                            {/* 大屏幕下的菜单项 */}
                                            <Menu
                                                anchorEl={anchorEl} // 当前按钮作为菜单的锚点
                                                open={openMenu === menu.menuId} // 根据状态控制是否打开菜单
                                                onClose={handleClose} // 关闭菜单
                                                MenuListProps={{
                                                    "aria-labelledby": `menu-${menu.menuId}`,
                                                }}
                                            >
                                                {menu?.children && menu.children.length > 0 && (
                                                    menu.children.map((child) => (
                                                        <MenuItem key={child.menuId}
                                                                  onClick={() => handleMenuItemClick(child)}>
                                                            {t(child.label)}
                                                        </MenuItem>
                                                    ))
                                                )}
                                        </Menu>
                                    </span>
                                    ))}
                                    </Grid>
                                    <Grid item xs={4} className={"menu-right menu-content"}>
                                        {isMediumScreen ? (
                                            <Grid container>
                                                <Button variant="outlined">{t('hello')}</Button>
                                            </Grid>
                                        ) : (
                                            <Grid container spacing={1} columns={18}>
                                                <Grid item xs={2} className={"menu-content-hover"}>
                                                    <MySvgIcon name={"qq"} size={"1.5em"}/>
                                                </Grid>
                                                <Grid item xs={2} className={"menu-content-hover"}>
                                                    <MySvgIcon name={"wx"} size={"1.5em"}/>
                                                </Grid>
                                                <Grid item xs={2} className={"menu-content-hover"}>
                                                    <MySvgIcon name={"facebook"} size={"1.5em"}/>
                                                </Grid>
                                                <Grid item xs={2} className={"menu-content-hover"}>
                                                    <MySvgIcon name={"twitter"} size={"1.5em"}/>
                                                </Grid>
                                                <Grid item xs={2} className={"menu-content-hover"}>
                                                    <MySvgIcon name={"lz"} size={"1.5em"}/>
                                                </Grid>
                                                <Grid item xs={2} className={"menu-content-hover"}>
                                                    <MySvgIcon name={"changeLanguage"}
                                                               onClick={(event) => handleClickLanguage(event as React.MouseEvent<SVGSVGElement>)}
                                                               size={"1.5em"}/>
                                                    <Menu
                                                        anchorEl={anchorEl} // 当前按钮作为菜单的锚点
                                                        open={openLanguage === true} // 根据状态控制是否打开菜单
                                                        onClose={handleCloseLanguage} // 关闭菜单
                                                        MenuListProps={{
                                                            "aria-labelledby": `language`,
                                                        }}
                                                    >
                                                        {localeInfoList.map((info) => (
                                                            <MenuItem key={info.localeId}
                                                                      onClick={() => {
                                                                          handleSwitchLanguage(info?.locale)
                                                                      }}>
                                                                {info.localeName}
                                                            </MenuItem>
                                                        ))}
                                                    </Menu>
                                                </Grid>
                                                <Grid item xs={2} className={"menu-content-hover"}>
                                                    <MySvgIcon onClick={handleOpenModal} name={"search"} size={"1.5em"}/>
                                                    <Modal
                                                        open={open}
                                                        onClose={handleCloseModal}
                                                        aria-labelledby="parent-modal-title"
                                                        aria-describedby="parent-modal-description"
                                                    >
                                                        <Box sx={{...style, width: '80%'}}>
                                                            <h2 id="parent-modal-title">Text in a modal</h2>
                                                            <p id="parent-modal-description">
                                                                Duis mollis, est non commodo luctus, nisi erat porttitor
                                                                ligula.
                                                            </p>
                                                            {/*<ChildModal/>*/}
                                                        </Box>
                                                    </Modal>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Button variant="outlined">{t('hello')}</Button>
                                                </Grid>
                                            </Grid>
                                        )}
                                    </Grid>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </AppBar>
                {/* 使用 Drawer 在小屏幕上展示折叠菜单 */}
                <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                    <div>
                        {menus.map((menu) => (
                            <div key={menu.menuId}>
                                <h3>{t(menu.label)}</h3>
                                {menu?.children?.map((child) => (
                                    <Button key={child.menuId} onClick={() => handleMenuItemClick(child)}>
                                        {t(child.label)}
                                    </Button>
                                ))}
                            </div>
                        ))}
                    </div>
                </Drawer>
            </header>
        )
    }
;

export default Heard;
