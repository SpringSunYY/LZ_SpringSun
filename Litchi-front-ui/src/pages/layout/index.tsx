import React from "react";
import {Outlet} from "react-router-dom";
import {useTheme} from "@mui/system";
import './index.scss'
import Header from "@/pages/layout/header";

const GeekLayout: React.FC = () => {
    useTheme();
    return (
        <div>
            <Header></Header>
            {/* 子路由内容 */}
            <div>
                {/* 在这里显示子路由内容 */}
                <Outlet/>
            </div>
        </div>
    );
};

export default GeekLayout;

