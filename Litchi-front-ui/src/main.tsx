import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import router from './router/index.tsx'
import {Provider} from "react-redux";
import {store} from "@/store";
// @ts-ignore
import 'virtual:svg-icons-register';
ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)
