import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path';

export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        include: ['@mui/material', '@emotion/react', '@emotion/styled'],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    }
})
