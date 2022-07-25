import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/index.vue'
const routes = [
    {
        name: 'home', component: Home
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router