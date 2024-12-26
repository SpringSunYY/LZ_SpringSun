import React, {useState} from "react";
import {Button, Menu, MenuItem, Drawer, useMediaQuery, AppBar, Toolbar} from "@mui/material";
import {Outlet, useNavigate} from "react-router-dom";
import {useTheme} from "@mui/system";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
        path: "/home",
        children: [
            {label: "General", key: "Settings-General", menuId: 11, path: "/home"},
            {label: "安全", key: "Settings-Security", menuId: 12, path: "/home"},
        ],
    }, {
        label: "无子集",
        key: "Home",
        menuId: 14,
        path: "/home",

    },
];

const GeekLayout: React.FC = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // 当前菜单的锚点
    const [openMenu, setOpenMenu] = useState<string | null>(null); // 当前打开的菜单
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // 检测屏幕尺寸

    // 处理点击按钮显示菜单
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, menuKey: string) => {
        setAnchorEl(event.currentTarget); // 设置当前按钮为锚点
        setOpenMenu(menuKey); // 设置当前菜单为打开状态
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
                    <Toolbar className={"toolBar"}>
                        <div className="title"><MySvgIcon name={"lz"} size={"1.2em"}/>SpringSun</div>

                        <div className="menu">
                            {/* 当是小屏幕时，点击按钮展开折叠菜单 */}
                            {isSmallScreen ? (
                                <Button onClick={toggleDrawer}> <span style={{color: "white"}}>菜单</span></Button>
                            ) : (
                                <div>
                                    {menus.map((menu) => (
                                        <span key={menu.menuId}>
                                    {/* 菜单按钮 */}
                                            <Button
                                                onClick={(event) => handleClick(event, menu.key)} // 点击时设置锚点并展开菜单
                                                aria-controls={`menu-${menu.menuId}`}
                                                aria-haspopup="true"
                                            >
                                   <span style={{
                                       color: "white",
                                   }}>
                                      {menu.label}
                                       {/* 如果有下级菜单，显示带旋转动画的箭头 */}
                                       {menu?.children && menu?.children.length > 0 && (
                                           <span
                                               style={{
                                                   textAlign: "center",
                                                   alignItems: "center",
                                                   display: 'inline-block',
                                                   marginLeft: 1,
                                                   transition: 'transform 0.3s ease', // 添加过渡效果
                                                   transform: openMenu === menu.key ? 'rotate(360deg)' : 'rotate(270deg)',
                                               }}
                                           >
                                            <ArrowDropDownIcon/>
                                          </span>
                                       )}
                                 </span>
                                    </Button>
                                            {/* 大屏幕下的菜单项 */}
                                            <Menu
                                                anchorEl={anchorEl} // 当前按钮作为菜单的锚点
                                                open={openMenu === menu.key} // 根据状态控制是否打开菜单
                                                onClose={handleClose} // 关闭菜单
                                                MenuListProps={{
                                                    "aria-labelledby": `menu-${menu.menuId}`,
                                                }}
                                            >
                                        {menu?.children?.map((child) => (
                                            <MenuItem key={child.menuId} onClick={() => handleMenuItemClick(child)}>
                                                {child.label}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </span>
                                    ))}
                                </div>
                            )}
                        </div>


                    </Toolbar>
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
