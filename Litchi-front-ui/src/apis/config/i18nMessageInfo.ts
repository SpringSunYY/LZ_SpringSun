import {API} from "@/types/common";
import {http} from "@/utils";

export function getLocalization(ing:string): Promise<API.ResponseInfo> {
    return http({
        url: '/config/i18nMessageInfo/ing/' + ing,
        method:'get'
    })
}
