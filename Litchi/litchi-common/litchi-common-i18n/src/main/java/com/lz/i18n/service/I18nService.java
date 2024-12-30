package com.lz.i18n.service;

import com.lz.common.core.constant.redis.RedisI18nConstants;
import com.lz.common.core.utils.StringUtils;
import com.lz.common.redis.service.RedisService;
import com.lz.common.security.utils.SecurityUtils;
import com.lz.system.api.model.LoginUser;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Component;

import static com.lz.common.core.constant.redis.RedisConfigConstants.LOCALIZATION;

/**
 * Project: Litchi
 * Package: com.lz.i18n
 * Author: YY
 * CreateTime: 2024-12-30  22:26
 * Description: I18nService
 * Version: 1.0
 */
@Component
public class I18nService {
    @Resource
    private RedisService redisService;

    /**
     * description: 设置用户的国际化语言
     * author: YY
     * method: setUserI18n
     * date: 2024/12/30 22:31
     * param:
     * param: key
     * param: value
     * return: void
     **/
    public void setUserI18n(final String value) {
        LoginUser loginUser = SecurityUtils.getLoginUser();
        String type = loginUser.getType();
        Long userid = loginUser.getUserid();
        redisService.setCacheObject(RedisI18nConstants.I18N + type + ":" + userid + ":", value);
    }

    /**
     * description: 获取用户国际化语言 如果没有返回默认的
     * author: YY
     * method: getUserI18n
     * date: 2024/12/30 22:33
     * param:
     * param: key
     * return: java.lang.String
     **/
    public String getUserI18n(final String key) {
        //获取用户国际化语言
        String cache = redisService.getCacheObject(RedisI18nConstants.I18N + key);
        if (StringUtils.isEmpty(cache)) {
            LoginUser loginUser = SecurityUtils.getLoginUser();
            String type = loginUser.getType();
            Long userid = loginUser.getUserid();
            cache = redisService.getCacheObject(RedisI18nConstants.I18N + type + ":" + userid + ":");
        }
        return cache;
    }

    public String getMessage(final String key) {
        //获取国家语言
        String userI18n = getUserI18n(key);
        String value = redisService.getCacheMapValue(LOCALIZATION + userI18n, key);
        if (StringUtils.isEmpty(value)) {
            return key;
        }
        return value;
    }
}
