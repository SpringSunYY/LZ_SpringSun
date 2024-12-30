import {API} from "@/types/common";
import {http} from "@/utils";

export function getLocalization(ing: string): Promise<API.ResponseInfo> {
    return http({
        url: '/config/i18nMessageInfo/ing/' + ing,
        method: 'get'
    })
}

export function getMsg(msg: string): Promise<API.ResponseInfo> {
    return http({
        url: '/config/i18nMessageInfo/msg/' + msg,
        method: 'get',
    })
}

export function setLocalization(msg: string): Promise<API.ResponseInfo> {
    return http({
        url: '/config/i18nMessageInfo/setLocalization',
        method: 'put',
        data: {msg}
    })
}
