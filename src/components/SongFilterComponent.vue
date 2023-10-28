<template>
        <div class="sort-container">
            <p>Sort by: </p>
            <div>
                <button class="sort-button" :class="{ 'sort-button-active': sortBy === 'none' }" @click="setSortBy('none')">None</button>
                <button class="sort-button" :class="{ 'sort-button-active': sortBy === 'name' }" @click="setSortBy('name')">Name</button>
                <button class="sort-button" :class="{ 'sort-button-active': sortBy === 'artist' }" @click="setSortBy('artist')">Artist</button>
            </div>
        </div>
</template>

<script>
export default {
    name: "SongFilterComponent",
    data() {
        return {
            sortBy: "none",
        };
    },
    methods: {
        setSortBy(sortBy) {
            this.sortBy = sortBy;
            this.$emit("sort-changed", sortBy);
        },
    },
};
</script>