import { createRouter, createWebHistory } from 'vue-router';
import { store } from '@/store';

let loggedIn = store.state.user.loggedIn;

const routes = [
    {
        path: '/',
        name: 'landing',
        component: () => import('./components/LandingComponent.vue'),
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('./components/HomeComponent.vue'),
        meta: { requiresAuth: true },
    },
    {
        path: '/about-me',
        name: 'aboutMe',
        component: () => import('./components/AboutMeComponent.vue'),
        meta: { requiresAuth: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// If user is not logged in and navigates to a page that requires authentication, redirect to landing page
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.state.user.loggedIn) {
            next({ name: 'landing' });
        } else {
            next();
        }
    } else {
        next();
    }
});


// If user is logged in and navigates to landing page, redirect to home page and vice versa
store.watch(
    state => state.user.loggedIn,
    (newValue, oldValue) => {
        if (newValue && !oldValue && !loggedIn) {
            loggedIn = true;
            router.push('/home');
        } else if (!newValue && oldValue && loggedIn) {
            loggedIn = false;
            router.push('/');
        }
    }
);

export default router;