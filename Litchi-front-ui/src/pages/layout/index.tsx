import React from "react";
import {Outlet} from "react-router-dom";
import {useTheme} from "@mui/system";
import './index.scss'
import Header from "@/pages/layout/header";
import Body from "@/pages/layout/body";
import BackToTop from "@/compoents/BackToTop";
import Footer from "@/pages/layout/footer";

const AppLayout: React.FC = () => {
    useTheme();
    return (
        <div className="appLayout">
            <div className={"header"}>
                <Header></Header>
            </div>
            <div className={"body"}>
                <Body></Body>
            </div>
            <div className={"footer"}>
                <Footer></Footer>
            </div>
            <BackToTop></BackToTop>
            {/* 子路由内容 */}
            <div>
                {/* 在这里显示子路由内容 */}
                <Outlet/>
            </div>
        </div>
    );
};

export default AppLayout;

