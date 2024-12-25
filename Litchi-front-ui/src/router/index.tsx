import {createBrowserRouter} from "react-router-dom";
import Home from "@/pages/home";
import Login from "@/pages/login";
import Layout from "@/pages/layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                path: '/home',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    },
])
export default router
