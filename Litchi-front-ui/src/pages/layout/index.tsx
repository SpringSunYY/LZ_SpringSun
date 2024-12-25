import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {fetchUserInfo} from "@/store/module/user.ts";
import {store} from "@/store";
import {Menu, MenuItem} from "@mui/material";
import './index.scss';
import Button from "@mui/material/Button";
import {Outlet, useNavigate} from "react-router-dom";

// 定义带子菜单的菜单数据
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
        label: "Settings",
        key: "Settings",
        menuId: 4,
        path: "/login",
        children: [
            {label: "General", key: "Settings-General", menuId: 5, path: "/login"},
            {label: "Security", key: "Settings-Security", menuId: 6, path: "/login"},
        ],
    },
];

const GeekLayout: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const loadUserInfo = async () => {
            try {
                await store.dispatch(fetchUserInfo());
                console.log("用户信息已加载");
            } catch (error) {
                console.error("获取用户信息失败", error);
            }
        };

        loadUserInfo();
    }, [dispatch]);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, menuKey: string) => {
        setAnchorEl(event.currentTarget);
        setOpenMenu(menuKey);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpenMenu(null);
    };

    const handleMenuItemClick = (child: { label: string; key: string; menuId: number, path?: string }) => {
        console.log("点击的菜单项是：", child); // 输出点击的子菜单项
        if (child.path != undefined) {
            navigate(child.path);
        }
        handleClose(); // 关闭菜单
    };

    // const handleClickMenuItem=(item)=>{
    //     console.log(item);
    // }

    return (
        <div>
            <div className="title">SpringSun</div>

            {menus.map((menu) => (
                <span key={menu.menuId}>
                    <Button
                        id={`basic-button`}
                        aria-controls={`basic-menu-${menu.menuId}`}
                        aria-haspopup="true"
                        aria-expanded={openMenu === menu.key ? "true" : undefined}
                        onClick={(event) => handleClick(event, menu.key)}
                    >
                        {menu.label}
                    </Button>
                    <Menu
                        id={`basic-menu`}
                        anchorEl={anchorEl}
                        open={openMenu === menu.key}
                        onClose={handleClose}
                        MenuListProps={{
                            "aria-labelledby": `basic-button-${menu.menuId}`,
                        }}
                    >
                        {menu.children.map((child) => (
                            <MenuItem key={child.menuId} onClick={() => handleMenuItemClick(child)}>
                                {child.label}
                            </MenuItem>
                        ))}
                    </Menu>
                </span>
            ))}

            {/* 在这里显示子路由内容 */}
            <Outlet/>
        </div>
    );
};

export default GeekLayout;
