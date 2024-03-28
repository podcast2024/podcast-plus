import {fileURLToPath, URL} from 'node:url'
import path from 'node:path'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import px2rem from 'postcss-px2rem'

export default defineConfig({
    // base:'./',
    base:'./',
    css: {
	postcss: {
	    plugins: [
		px2rem({
		    // remUnit: 20
		})
	    ]
	},
	preprocessorOptions: {
	    less: {
		javascriptEnabled: true,
		additionalData: `@import "${path.resolve(__dirname, "src/assets/style.less")}";`,
	    },
	},
    },
    plugins: [
	vue(),
    ],
    resolve: {
	alias: {
	    '@': fileURLToPath(new URL('./src', import.meta.url))
	}
    }
})
