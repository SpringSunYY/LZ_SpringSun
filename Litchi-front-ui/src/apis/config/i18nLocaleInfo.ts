import {http} from "@/utils";
import {API} from "@/types/common";
import {I18nLocaleInfoType} from "@/types/config/i18nLocaleInfo.ts";

// 查询国际化国家列表
export function listI18nLocaleInfo(query: I18nLocaleInfoType): Promise<API.ResponseInfo> {
    return http({
        url: '/config/i18nLocaleInfo/list',
        method: 'get',
        params: query
    })
}
