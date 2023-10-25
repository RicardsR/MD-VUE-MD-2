import { createRouter, createWebHistory } from 'vue-router';
import { store } from './store';

const routes = [
    {
        path: '/',
        component: () => import('./components/LandingComponent.vue'),
    },
    {
        path: '/home',
        component: () => import('./components/HomeComponent.vue'),
        meta: { requiresAuth: true },
    },
    {
        path: '/about-me',
        component: () => import('./components/AboutMeComponent.vue'),
        meta: { requiresAuth: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!store.state.user.loggedIn) {
            next('/');
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
