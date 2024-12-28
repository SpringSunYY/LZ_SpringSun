import React, {useState} from "react";
import {AppBar, Box, Button, Drawer, Grid, Menu, MenuItem, Modal, useMediaQuery} from "@mui/material";
import {Outlet, useNavigate} from "react-router-dom";
import {useTheme} from "@mui/system";
import lzIcon from "@/assets/icons/svg/lz.svg"
import './index.scss'
import MySvgIcon from "@/compoents/SvgIcon";
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
    }
];
const style = {
    position: 'absolute' as 'absolute',
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
const GeekLayout: React.FC = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // 当前菜单的锚点
    const [openMenu, setOpenMenu] = useState<number | null>(null); // 当前打开的菜单
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // 检测屏幕尺寸

    const [open, setOpen] = React.useState(false);
    const handleOpenModal = () => {
        setOpen(true);
    };
    const handleCloseModal = () => {
        setOpen(false);
    };

    // 处理点击按钮显示菜单
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, menu: object) => {
        setAnchorEl(event.currentTarget); // 设置当前按钮为锚点
        if (menu?.children) {
            setOpenMenu(menu?.menuId); // 设置当前菜单为打开状态
        } else {
            navigate(menu.path);
        }
    };

    // 关闭菜单
    const handleClose = () => {
        setAnchorEl(null);
        setOpenMenu(null);
    };

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

    return (
        <div>
            <header className="header">
                <AppBar className="appBar" position="sticky">
                    <Grid container className={"toolBar"}>
                        <Grid item xs={2} className="title-log"><img src={lzIcon} width="80em" height="80em" alt="lz icon"/>
                        </Grid>
                        <Grid item xs={10} className="menu">
                            {/* 当是小屏幕时，点击按钮展开折叠菜单 */}
                            {isSmallScreen ? (
                                <Button onClick={toggleDrawer}> <span className={"menu-content menu-content-hover"}
                                                                      style={{marginLeft: "8em"}}>菜单</span></Button>
                            ) : (
                                <Grid container columns={12}>
                                    <Grid xs={8} className={"menu-item"}> {menus.map((menu) => (
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
                                                  {menu.label}
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
                                                            {child.label}
                                                        </MenuItem>
                                                    ))
                                                )}
                                        </Menu>
                                    </span>
                                    ))}
                                    </Grid>
                                    <Grid item xs={4} className={"menu-right menu-content"}>
                                        <Grid container spacing={1} columns={16}>
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
                                                <Button variant="outlined">登录</Button>
                                            </Grid>
                                        </Grid>
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
                                <h3>{menu.label}</h3>
                                {menu?.children?.map((child) => (
                                    <Button key={child.menuId} onClick={() => handleMenuItemClick(child)}>
                                        {child.label}
                                    </Button>
                                ))}
                            </div>
                        ))}
                    </div>
                </Drawer>
            </header>

            {/* 子路由内容 */}
            <div>
                {/* 在这里显示子路由内容 */}
                <Outlet/>
            </div>
        </div>
    );
};

export default GeekLayout;

