import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd())
    const {VITE_APP_ENV} = env

    return {
        plugins: [
            react(),
            createSvgIconsPlugin({
                // 指定需要缓存的图标文件夹
                iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/svg')],
                // 指定symbolId格式
                symbolId: 'icon-[dir]-[name]',
                /**
                 * custom dom id
                 * @default: __svg__icons__dom__
                 */
                customDomId: '__svg__icons__dom__',
            }),],
        optimizeDeps: {
            include: ['@mui/material', '@emotion/react', '@emotion/styled'],
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        base: VITE_APP_ENV === 'production' ? '/' : '/',
        server: {
            port: 81,
            host: true,
            open: true,
            proxy: {
                '/dev-api': {
                    target: 'http://localhost:8080',
                    changeOrigin: true,
                    rewrite: (p) => p.replace(/^\/dev-api/, ''),
                },
            },
        },
    }
})
