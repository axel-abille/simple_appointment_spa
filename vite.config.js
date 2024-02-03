import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/App.jsx'],
            refresh: false,
        }),
    ],
    build: {
        outDir: 'public/dist', // Adjust this based on your Laravel public directory structure
      },
});
