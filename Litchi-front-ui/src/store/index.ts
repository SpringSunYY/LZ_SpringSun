import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/module/user.ts";

// 定义 Redux store 的类型
export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

// 推断 Redux store 的类型
export type RootState = ReturnType<typeof store.getState>;  // 获取整个应用的 state 类型
export type AppDispatch = typeof store.dispatch;           // 获取 dispatch 类型
