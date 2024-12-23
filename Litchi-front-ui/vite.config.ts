import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())
    const { VITE_APP_ENV } = env

    return {
        plugins: [react()],
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
