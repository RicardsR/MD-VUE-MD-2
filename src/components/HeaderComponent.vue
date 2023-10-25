<template>
    <div>
        <header class="header" :style="{ backgroundColor: isLoggedIn ? '#8645E8' : 'rgba(69, 64, 75, 0.25)' }">
            <div class="header-logo">
                <img class="header-logo-img" src="@/assets/logo_white.svg" alt="Logo" />
                <h1>KRAKEN.FM</h1>
            </div>
            <div class="header-user">
                <div class="user-info" v-if="isLoggedIn">
                    <div class="avatar" :style="{ backgroundColor: avatarColor }"></div>
                    <span class="username">{{ full_name }}</span>
                </div>
                <button @click="toggleLogin" class="button">{{ loginButtonText }}</button>
            </div>
        </header>
    </div>
</template>

<script>
import { store } from '@/store';

function getRandomVibrantColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 70 + Math.floor(Math.random() * 30);
    const lightness = 50 + Math.floor(Math.random() * 10);

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

export default {
    data() {
        return {
            user: {
                name: "Ričards",
                surname: "Reinsons",
                code: "IT21016",
            },
            avatarColor: getRandomVibrantColor(),
        };
    },
    computed: {
        isLoggedIn() {
            return store.state.user.loggedIn;
        },
        full_name() {
            return `${this.user.name} ${this.user.surname}`;
        },
        loginButtonText() {
            return this.isLoggedIn ? "LOGOUT" : "LOGIN";
        },
    },
    methods: {
        toggleLogin() {
            if (this.isLoggedIn) {
                const confirmLogout = window.confirm("Do you want to log out?");
                if (confirmLogout) {
                    store.dispatch("logout");
                }
            } else {
                const confirmLogin = window.confirm("Do you want to log in?");
                if (confirmLogin) {
                    store.dispatch("login");
                }
            }
        },
    },
};
</script>
