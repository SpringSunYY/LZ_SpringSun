import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getToken, removeToken, setToken as _setToken} from '@/utils';
import {getInfo, login} from "@/apis/test.ts";
import {API, LoginUser} from "@/types/common";

// 定义状态类型
interface UserState {
    token: string;
    userInfo: API.ResponseUserInfo;
}

const userStore = createSlice({
    name: "user",
    // 数据状态
    initialState: {
        token: getToken() || '',
        userInfo: {}
    } as UserState,
    // 修改数据的方法
    reducers: {
        setToken(state, action: PayloadAction<string>) {
            state.token = action.payload;
            // 存入本地
            _setToken(state.token);
        },
        setUserInfo(state, action: PayloadAction<API.ResponseUserInfo>) {
            console.log("setUserInfo", action.payload);
            state.userInfo = action.payload;
        },
        clearUserInfo(state) {
            state.token = '';
            state.userInfo = {
                user: {},
                roles: [],  // 默认空数组
                permissions: [],  // 默认空数组
            };
            removeToken();
        },
    }
});

// 异步登录请求
const fetchLogin = (loginUser: LoginUser) => {
    return async (dispatch: any) => {
        // 调用接口
        const res = await login(loginUser);
        // 存入token
        dispatch(setToken(res.data.access_token));
    };
};
const fetchUserInfo = () => {
    return async (dispatch: any) => {
        const res = await getInfo();
        // 创建 UserInfo 对象
        const info: API.ResponseUserInfo = {
            user: res.user,
            permissions: res.permissions,
            roles: res.roles
        };
        dispatch(setUserInfo(info));
    }
}


const {setToken, setUserInfo, clearUserInfo} = userStore.actions;

// 暴露方法
const userReducer = userStore.reducer;
export {setToken, fetchLogin, fetchUserInfo, clearUserInfo};
export default userReducer;
