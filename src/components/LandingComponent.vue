<template>
    <div class="landing">
        <div class="landing__content">
            <h1 class="landing__title">Welcome to the <span class="landing__title--highlight">IT Academy</span>!</h1>
            <p class="landing__text">This is a simple Vue.js application that demonstrates the usage of Vue.js components, props, events, and computed properties.</p>
            <p class="landing__text">You can log in and log out by clicking the button below.</p>
            <button class="landing__button" @click="toggleLogin">{{ isLoggedIn ? "Log out" : "Log in" }}</button>
        </div>
    </div>
</template>

<script></script>