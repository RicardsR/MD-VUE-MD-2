<template>
    <div class="form">
        <div class="form__content">
            <h1 class="form__title">Form</h1>
            <p class="form__text">This is a simple Vue.js application that demonstrates the usage of Vue.js components, props, events, and computed properties.</p>
            <p class="form__text">You can log in and log out by clicking the button below.</p>
            <button class="form__button" @click="toggleLogin">{{ isLoggedIn ? "Log out" : "Log in" }}</button>
        </div>
    </div>
</template>

<script>
</script>