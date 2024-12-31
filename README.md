

[TOC]

# 后端

## B端



## C端

### config模块

用于C端的基本配置，配置信息、国际化、菜单

#### 国际化

使用redis实现国际化，方便自己修改，不用使用配置文件

1. 新增模块litchi-common-i18n

2. 主要代码

   ```java
   package com.lz.i18n.service;
   
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
   ```

3. 自动注入bean

   ```
   com.lz.i18n.service.I18nService
   ```

   



### 自定义功能

开发中自定义的一些功能

#### 数据批量插入

借鉴荔枝软件生成批量插入https://gitee.com/SpringSunYY/LZ-RuoYi-App实现批量插入，前端vue3有所修改

# 前端

## B端

## C端

### 集成mui

官网：https://v5-0-6.mui.com/zh/getting-started/usage/

```
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```

必须要在这里配置，vite.config.ts

```
        optimizeDeps: {
            include: ['@mui/material', '@emotion/react', '@emotion/styled'],
        },
```

### 国际化

存入浏览器缓存

1. npm install @types/i18next

2. 主要代码

```tsx
import i18n, {BackendModule} from 'i18next'; // 导入 i18next 和 BackendModule 类型
import {initReactI18next} from 'react-i18next';
import {getLocalization, setLocalization} from "@/apis/config/i18nMessageInfo.ts";

// 获取浏览器语言，并设置为默认语言
const defaultLanguage = 'en'; // 设置为默认语言，如果浏览器语言不可用，则使用 'en'

// 获取浏览器语言
const getBrowserLanguage = () => {
    let lang: string | null = localStorage.getItem('lang');
    // 如果没有就从浏览器获取
    if (!lang) {
        lang = navigator.language || (navigator as any).userLanguage; // 获取浏览器语言
        lang = lang?.split('-')[0] || null;
    }
    localStorage.setItem('lang', lang ? lang : defaultLanguage); // 若没有语言，使用默认语言
    return lang || defaultLanguage;
};

// 自定义的 Backend 加载器（对象实现）
// @ts-ignore
const LocalStorageBackend: BackendModule = {
    type: 'backend', // 必须设置为 'backend'

    // 读取翻译文件
    read: async (language: string, namespace: string, callback: (err: Error | null, data: object | false) => void) => {
        const cachedData = localStorage.getItem(`${language}-${namespace}`);
        // console.log(`${language}-${namespace}`)
        if (cachedData) {
            // 如果缓存中有数据，直接调用回调并返回数据
            callback(null, JSON.parse(cachedData));
        } else {
            try {
                const response = await getLocalization(language);
                const data = response.data;

                // 确保返回的数据符合类型要求（object）
                if (data && typeof data === 'object') {
                    localStorage.setItem(`${language}-${namespace}`, JSON.stringify(data)); // 缓存到 localStorage
                    callback(null, data); // 返回数据
                } else {
                    // 数据格式不正确，调用回调并返回错误
                    callback(new Error(`Invalid data format for ${language} - ${namespace}`), false);
                }
            } catch (error) {
                // 如果发生错误，确保回调中的 error 类型为 Error，data 为 false
                callback(error instanceof Error ? error : new Error('加载语言失败'), false); // 发生错误时回调
            }
        }
    },

    save: () => {
        // 可选的保存方法（如果需要）
    },
};

const browserLanguage = getBrowserLanguage();

// 初始化 i18next
i18n
    .use(initReactI18next) // 连接 i18next 和 React
    .use(LocalStorageBackend) // 使用自定义的加载器
    .init({
        lng: browserLanguage, // 使用浏览器语言
        fallbackLng: defaultLanguage, // 如果没有找到浏览器语言的翻译，则使用默认语言
        interpolation: {
            escapeValue: false, // React 已经对 XSS 进行防护，不需要转义
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json', // 本地加载路径
        },
        cache: {
            enabled: true, // 启用缓存
        },
    });

// 切换语言函数
export const switchLanguage = (language: string) => {
    // 清除缓存中的翻译文件，确保重新加载
    const namespaces = ['translation'];  // 如果有多个命名空间可以扩展这个数组
    namespaces.forEach((ns) => {
        const cacheKey = `${language}-${ns}`;
        localStorage.removeItem(cacheKey);  // 移除缓存中的翻译文件
    });
    // 切换语言并更新语言数据
    i18n.changeLanguage(language).then(() => {
        // 确保语言切换后从后台加载新的语言资源
        i18n.loadNamespaces('translation', () => { // 确保加载当前语言的翻译资源
            // console.log(`加载了 ${language} 语言资源`);
            if (language) {
                setLocalization(language);
            }
        });
        localStorage.setItem('lang', language);
    }).catch((error) => {
        console.error('切换语言失败:', error);
    });
};

export default i18n;

```

