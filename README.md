

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

### 自定义返回顶部组件

```tsx
import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import MySvgIcon from "@/compoents/SvgIcon";
import "./index.scss"; // 引入样式文件

// 定义 CSS 动画
const useStyles = {
    jump: {
        animation: 'jump 1s ease-out', // 动画持续 1s，更长的时间来显示跳动
    },
    disappear: {
        animation: 'disappear 0.8s ease-out forwards', // 向上消失的动画，持续 0.8s
    },
};

const BackToTop: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [triggerAnimation, setTriggerAnimation] = useState<boolean>(false);
    const [isDisappearing, setIsDisappearing] = useState<boolean>(false);
    const [hasAppeared, setHasAppeared] = useState<boolean>(false); // 控制是否已出现

    // 监听滚动事件，判断是否显示回到顶部按钮
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setVisible(true);

            if (!hasAppeared) {
                setTriggerAnimation(true);  // 只有第一次出现时才触发跳动动画
                setHasAppeared(true);        // 标记按钮已经出现
                setTimeout(() => setTriggerAnimation(false), 1000); // 动画结束后停止
            }
        } else {
            setVisible(false);
        }
    };

    // 回到顶部的功能
    const handleBackToTop = () => {
        setIsDisappearing(true); // 开始消失动画
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

        // 动画结束后将按钮隐藏
        setTimeout(() => {
            setVisible(false);
            setIsDisappearing(false); // 完成消失动画
        }, 2000); // 消失动画持续 1s，更长时间
    };

    // 组件挂载时添加滚动监听事件，卸载时移除监听
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {visible && (
                <IconButton
                    className="backToTop" // 使用外部样式
                    onClick={handleBackToTop}
                    style={{
                        position: 'fixed',
                        bottom: '10vh',
                        right: '10vh',
                        height: '10vh',
                        width: '10vh',
                        backgroundColor: '#1976d2',
                        color: '#fff',
                        ...(triggerAnimation ? useStyles.jump : {}),
                        ...(isDisappearing ? useStyles.disappear : {}), // 向上消失动画
                    }}
                >
                    <MySvgIcon name="back-to-top" size="5vh" /> {/* 使用自定义图标 */}
                </IconButton>
            )}
        </div>
    );
};

export default BackToTop;

```

```scss
/* 向上消失的动画 */
@keyframes disappear {
  0% {
    transform: translateY(0);  /* 初始位置 */
    opacity: 1;                /* 完全可见 */
  }
  100% {
    transform: translateY(-1000px); /* 向上移动 50px */
    opacity: 0;                   /* 变得完全透明 */
  }
}

/* 跳动的动画 */
@keyframes jump {
  0% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(-40px);
  }
  20% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(0px);
  }
  80% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

/* 悬停效果 */
.backToTop:hover {
  color: #5aeab2 !important;
  background-color: white !important;
  transition: background-color 0.3s, color 0.3s;
}

```

### 自定义svg icon组件

```
import React, { SVGProps, useState, useEffect } from 'react';

interface SvgIconProps extends SVGProps<SVGSVGElement> {
    name: string;
    prefix?: string;
    color?: string; // color 可以传递，默认为 currentColor
    size?: string | number; // 控制大小，接受字符串或数字
    onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

const MySvgIcon: React.FC<SvgIconProps> = ({
                                               name,
                                               prefix = 'icon',
                                               color = 'currentColor', // 默认使用 currentColor
                                               size = '1em', // 默认大小是1em，可以调整为相对大小
                                               ...props
                                           }) => {
    const [isNetwork, setIsNetwork] = useState<boolean>(false);
    const symbolId = `#${prefix}-${name}`;

    // 判断 name 是否是一个网络 URL
    useEffect(() => {
        setIsNetwork(name.startsWith('http') || name.startsWith('https'));
    }, [name]);

    return (
        <svg
            {...props}
            aria-hidden="true"
            width={size}  // 控制宽度
            height={size} // 控制高度
            style={{fill: color}}
        >
            {isNetwork ? (
                // 如果是网络 URL，直接用网络地址
                <use href={name}/>
            ) : (
                // 本地加载，使用 symbolId
                <use href={symbolId}/>
            )}
        </svg>
    );
};

export default MySvgIcon;

```

