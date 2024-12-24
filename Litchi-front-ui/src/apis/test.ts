import {http} from "@/utils";
import {API, LoginUser} from '@/types/test';

export function getCodeImage(): Promise<API.ResponseInfo> {
    return http({
        url: '/code',
        headers: {
            isToken: false
        }
    })
}

export function login(data: LoginUser) {
    return http({
        url: '/auth/login',
        method: 'post',
        headers: {
            isToken: false
        },
        data: data
    });
}

export function listUser(): Promise<API.ResponseInfo> {
    return http({
        url: '/system/user/list',
        method: 'get',
    });
}

