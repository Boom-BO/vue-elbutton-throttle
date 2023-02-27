import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), ElementPlus()],
	base: './',
	build: {
		cssCodeSplit: true,
		sourcemap: false,
		rollupOptions: {
			output: {
				chunkFileNames: 'js/[name]-[hash].js',
				entryFileNames: 'js/[name]-[hash].js',
				assetFileNames: '[ext]/[name]-[hash].[ext]'
			}
		}
	},
	server: {
		host: '0.0.0.0',
		port: 8080,
		open: true,
		https: false,
		proxy: {}
	}
})
