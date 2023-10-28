<template>
    <div>
        <header class="header" :style="{ backgroundColor: isLoggedIn ? '#8645E8' : 'rgba(69, 64, 75, 0.25)' }">
            <div class="header-logo">
                <img class="header-logo-img" src="@/assets/logo_white.svg" alt="Logo" />
                <h2>KRAKEN.FM</h2>
            </div>
            <div class="header-user">
                <div class="user-info" v-if="isLoggedIn">
                    <div class="avatar" :style="{ backgroundColor: avatarColor }"></div>
                    <h3 class="username">{{ full_name }}</h3>
                </div>
                <div class="header-devider" v-if="isLoggedIn"></div>
                <button @click="toggleLogin" class="button" :class="{ 'button-logout': isLoggedIn }">{{ loginButtonText }}</button>
            </div>
        </header>
    </div>
</template>

<script>
import { store } from '@/store';
import { computed } from 'vue';

function getRandomVibrantColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 70 + Math.floor(Math.random() * 30);
    const lightness = 50 + Math.floor(Math.random() * 10);

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

export default {
    data() {
        return {
            avatarColor: getRandomVibrantColor(),
        };
    },
    setup() {
        const user = computed(() => store.state.user);

        function toggleLogin() {
            if (user.value.loggedIn) {
                if (confirm('Do you want to log out?')) {
                    store.commit('logout');
                }
            } else {
                if (confirm('Do you want to log in?')) {
                    store.commit('login');
                }
            }
        }

        return {
            user,
            full_name: computed(() => `${user.value.firstName} ${user.value.lastName}`),
            isLoggedIn: computed(() => user.value.loggedIn),
            loginButtonText: computed(() => (user.value.loggedIn ? 'LOGOUT' : 'LOGIN')),
            toggleLogin,
        };
    },
};
</script>