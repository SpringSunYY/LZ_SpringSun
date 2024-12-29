import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import router from './router/index.tsx'
import {Provider} from "react-redux";
import {store} from "@/store";
import './i18n'; // 引入 i18n 配置文件
// @ts-ignore
import 'virtual:svg-icons-register';
ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)
