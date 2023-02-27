import { createApp } from 'vue'
import './style.css'
import btnThrottle from '../lib/index'
import App from './App.vue'
createApp(App).mount('#app')

document.addEventListener('click', e => {
	btnThrottle(e, ['确定', '保存', '提交'], 2 * 1000)
})
