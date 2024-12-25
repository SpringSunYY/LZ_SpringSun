import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    MenuItem,
    Popover,
    Toolbar,
    Typography
} from "@mui/material";
import {Article, Create, Home, Logout} from "@mui/icons-material";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {clearUserInfo, fetchUserInfo} from "@/store/module/user.ts";

// 定义菜单项
const menuItems = [
    {
        label: "首页",
        key: "/",
        icon: <Home/>,
    },
    {
        label: "文章管理",
        key: "/home",
        icon: <Article/>,
    },
    {
        label: "创建文章",
        key: "/login",
        icon: <Create/>,
    },
];

const GeekLayout: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const name = useSelector((state: any) => state.user.userInfo.name); // 用户名从 Redux 中获取
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    // 触发获取个人用户信息
    useEffect(() => {
        // @ts-ignore
        dispatch(fetchUserInfo());
    }, [dispatch]);

    // 路由点击
    const onMenuClick = (path: string) => {
        navigate(path);
    };

    // 获取当前选中的菜单项
    const selectedKey = location.pathname;

    // 弹出菜单
    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    // 退出确认
    const onConfirmLogout = () => {
        dispatch(clearUserInfo());
        navigate("/login");
    };

    return (
        <Box sx={{display: "flex"}}>
            {/* Drawer 部分 */}
            <Drawer
                sx={{
                    width: 240,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: 240,
                        boxSizing: "border-box",
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <List>
                    {menuItems.map((item) => (
                        <ListItem button key={item.key} selected={selectedKey === item.key}
                                  onClick={() => onMenuClick(item.key)}>
                            <ListItemButton>
                                {item.icon}
                                <ListItemText primary={item.label}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <Box sx={{flexGrow: 1}}>
                {/* AppBar 部分 */}
                <AppBar position="sticky">
                    <Toolbar>
                        <Typography variant="h6" sx={{flexGrow: 1}}>
                            Geek Layout
                        </Typography>
                        <Box sx={{display: "flex", alignItems: "center"}}>
                            <Typography variant="body1" sx={{marginRight: 2}}>
                                {name}
                            </Typography>
                            <IconButton color="inherit" onClick={handlePopoverOpen}>
                                <Logout/>
                            </IconButton>
                            <Popover
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handlePopoverClose}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "center",
                                }}
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "center",
                                }}
                            >
                                <MenuItem onClick={onConfirmLogout}>确认退出</MenuItem>
                            </Popover>
                        </Box>
                    </Toolbar>
                </AppBar>

                {/* 内容区 */}
                <Box sx={{padding: 3}}>
                    <Outlet/>
                </Box>
            </Box>
        </Box>
    );
};

export default GeekLayout;
