import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home";
import Login from "@/pages/login";
import Layout from "@/pages/layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true, // 设置该路由为父级默认路由
                element: <Home />, // 默认渲染 Home
            },
            {
                path: "/home", // 单独定义 /home 路径
                element: <Home />,
            },
            {
                path: "/login", // 登录页面
                element: <Login />,
            },
        ],
    },
]);

export default router;
