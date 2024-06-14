import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import store from "./store/index.ts";

import './styles/main.less';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(store);
app.mount('#app')
