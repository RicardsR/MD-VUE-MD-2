<template>
    <div class="nav-buttons">
        <router-link to="/home">
            <button class="nav-button triangle-inactive" :class="{ active: $route.path === '/home', triangle: $route.path === '/home' }">HOME</button>
        </router-link>
        <router-link to="/about-me">
            <button class="nav-button triangle-inactive" :class="{ active: $route.path === '/about-me', triangle: $route.path === '/about-me' }">ABOUT ME</button>
        </router-link>
    </div>
</template>
  
<script>
export default {
    data() {
        return {};
    },
};
</script>
  
<style scoped>
.active {
    background-color: #8645E8;
    color: #fff;
    text-decoration: none;
}
</style>
