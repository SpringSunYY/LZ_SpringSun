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
        console.log(`${language}-${namespace}`)
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
            console.log(`加载了 ${language} 语言资源`);
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
