//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ( /* webpackChunkName: "home" */ '../views/home.vue')
    },
    {
        path: '/browse',
        name: 'browse.index',
        component: () =>
            import ( /* webpackChunkName: "index" */ '../views/browse/index.vue')
    },
    {
        path: '/services',
        name: 'services.index',
        component: () =>
            import ( /* webpackChunkName: "index" */ '../views/services/index.vue')
    },
    {
        path: '/testimonials',
        name: 'testimonials.index',
        component: () =>
            import ( /* webpackChunkName: "index" */ '../views/testimonials/index.vue')
    },
    {
        path: '/contact',
        name: 'contact.index',
        component: () =>
            import ( /* webpackChunkName: "index" */ '../views/contact/index.vue')
    },
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes // <-- routes,
})

export default router