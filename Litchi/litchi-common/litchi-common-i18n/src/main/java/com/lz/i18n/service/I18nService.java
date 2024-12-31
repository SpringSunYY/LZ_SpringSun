package com.lz.i18n.service;

import com.lz.common.core.constant.redis.RedisCommonConstants;
import com.lz.common.core.constant.redis.RedisI18nConstants;
import com.lz.common.core.utils.StringUtils;
import com.lz.common.core.utils.ip.IpUtils;
import com.lz.common.redis.service.RedisService;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Component;

import java.util.concurrent.TimeUnit;

import static com.lz.common.core.constant.redis.RedisConfigConstants.LOCALIZATION;
import static com.lz.common.core.constant.redis.RedisI18nConstants.CONFIG_DEFAULT_LANGUAGE;

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
    public void setUserI18n(final String value, Long timeout) {
        //使用ip地址作为国际化
        String ipAddr = IpUtils.getIpAddr();
        redisService.setCacheObject(RedisI18nConstants.I18N + ipAddr, value, timeout, TimeUnit.SECONDS);
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
    public String getUserI18n() {
        //使用ip地址作为国际化
        String ipAddr = IpUtils.getIpAddr();
        //获取用户国际化语言
        String value = redisService.getCacheObject(RedisI18nConstants.I18N + ipAddr);
        //如果没有获取默认
        if (StringUtils.isEmpty(value)) {
            value = redisService.getCacheObject(CONFIG_DEFAULT_LANGUAGE);
        }
        return value;
    }

    /**
     * description: 获取message
     * author: YY
     * method: getMessage
     * date: 2024/12/31 15:35
     * param:
     * param: key
     * return: java.lang.String
     **/
    public String getMessage(final String key) {
        //获取国家语言
        String userI18n = getUserI18n();
        String value = redisService.getCacheMapValue(LOCALIZATION + userI18n, key);
        if (StringUtils.isEmpty(value)) {
            return key;
        }
        return value;
    }
}
