import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index'
import vuex from './store/index'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/src/index.scss'

const app = createApp(App)
app.use(ElementPlus)
    .use(router)
    .use(vuex)
    .mount('#app')
