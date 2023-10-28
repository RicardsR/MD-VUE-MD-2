<template>
    <div class="song-list">
        <div>
            <SongFilterComponent @sort-changed="setSortBy" />
            <table class="song-list-table">
                <div class="song-list-table-column">
                    <div class="song-list-header">
                        <div>Name</div>
                    </div>
                    <tbody class="song-list-row">
                        <tr v-for="song in sortedSongs" :key="song.id">
                            <td>{{ song.song }}</td>
                        </tr>
                    </tbody>
                </div>
                <div class="song-list-table-column">
                    <div class="song-list-header">
                        <div>Artist</div>
                    </div>
                    <tbody class="song-list-row">
                        <tr v-for="song in sortedSongs" :key="song.id">
                            <td>{{ song.artist }}</td>
                        </tr>
                    </tbody>
                </div>
            </table>
        </div>
    </div>
</template>

<script>
import SongFilterComponent from "./SongFilterComponent.vue";
import { mapState } from "vuex";

export default {
    components: {
        SongFilterComponent,
    },
    computed: {
        ...mapState(["all_songs"]),
        sortedSongs() {
            if (this.sortBy === "name") {
                return this.sortedByName;
            } else if (this.sortBy === "artist") {
                return this.sortedByArtist;
            } else {
                return this.all_songs;
            }
        },
        sortedByName() {
            if (Array.isArray(this.all_songs)) {
                return [...this.all_songs].sort((a, b) => a.song.localeCompare(b.song));
            } else {
                return [];
            }
        },
        sortedByArtist() {
            if (Array.isArray(this.all_songs)) {
                return [...this.all_songs].sort((a, b) => a.artist.localeCompare(b.artist));
            } else {
                return [];
            }
        },
    },
    data() {
        return {
            sortBy: "none",
        };
    },
    methods: {
        setSortBy(sortBy) {
            this.sortBy = sortBy;
        },
    },
};
</script>