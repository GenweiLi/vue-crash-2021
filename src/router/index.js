import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = new VueRouter({
    routes
})

export default router
