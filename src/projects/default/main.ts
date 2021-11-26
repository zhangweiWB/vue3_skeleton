import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index'
import vuex from './store/index'
import Design from '@q/design';
import '/@/styles/index.less';
const app = createApp(App)
app
    .use(Design)
    .use(router)
    .use(vuex)
    .mount('#app')
