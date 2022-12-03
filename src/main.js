import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import request from  './utils/request'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)

app.mount('#app')

// createApp(App).mount('#app')

app.config.globalProperties.$request = request

