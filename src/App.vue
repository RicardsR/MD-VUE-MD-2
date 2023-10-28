<template>
  <div id="app" :class="{ 'kraken-bg': !isLoggedIn}">
    <HeaderComponent @login="login" @logout="logout" />
    <div class="container">
      <div v-if="isLoggedIn">
        <NavigationComponent @change-component="changeComponent" :isHomeActive="isHomeActive" :isAboutMeActive="isAboutMeActive" />
      </div>
      <div v-if="isLoggedIn">
        <router-view />
      </div>
      <div v-else>
        <LandingComponent />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import LandingComponent from "@/components/LandingComponent.vue";
import NavigationComponent from "@/components/NavigationComponent.vue";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      isLoggedIn: state => state.user.loggedIn
    }),
    isHomeActive() {
      return this.$route.name === "home";
    },
    isAboutMeActive() {
      return this.$route.name === "aboutMe";
    },
  },
  components: {
    HeaderComponent,
    NavigationComponent,
    LandingComponent,
  },
};
</script>