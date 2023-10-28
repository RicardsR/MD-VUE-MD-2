<template>
    <div class="comp-container">
        <h1>{{ title }}</h1>
        <SongListComponent />
    </div>
</template>

<script>
import SongListComponent from './SongListComponent.vue';

export default {
    components: {
        SongListComponent,
    },
    data() {
    return {
      title: "Home",
    };
  },
};
</script>