<template>
    <div class="song-list">
        <div class="song-list__content">
            <h1 class="song-list__title">Songs</h1>
            <p class="song-list__text">This is a simple Vue.js application that demonstrates the usage of Vue.js components, props, events, and computed properties.</p>
            <p class="song-list__text">You can log in and log out by clicking the button below.</p>
            <button class="song-list__button" @click="toggleLogin">{{ isLoggedIn ? "Log out" : "Log in" }}</button>
        </div>
    </div>
</template>

<script>

</script>