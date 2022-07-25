import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import fullpage from "vue-fullpage.js"
import 'vue-fullpage.js/dist/style.css'
import 'animate.css/animate.min.css'

const app = createApp(App)
app.use(router)
app.use(fullpage)
app.mount('#app')
