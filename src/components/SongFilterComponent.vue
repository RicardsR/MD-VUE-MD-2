<template>
    <div class="song-filter">
        <div class="song-filter__content">
            <h1 class="song-filter__title">Filter</h1>
            <p class="song-filter__text">Filter the songs by entering a search term below.</p>
            <input class="song-filter__input" type="text" v-model="searchTerm" placeholder="Search term" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "SongFilterComponent",
        data() {
            return {
                searchTerm: ""
            };
        },
        watch: {
            searchTerm() {
                this.$emit("search-term-changed", this.searchTerm);
            }
        }
    };
</script>