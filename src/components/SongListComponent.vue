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
import all_songs from "../assets/songs-list.json";

export default {
    components: {
        SongFilterComponent,
    },
    data() {
        return {
            sortBy: "none",
            songs: all_songs,
        };
    },
    computed: {
        sortedSongs() {
            if (this.sortBy === "name") {
                return this.sortedByName;
            } else if (this.sortBy === "artist") {
                return this.sortedByArtist;
            } else {
                return this.songs;
            }
        },
        sortedByName() {
            if (Array.isArray(this.songs)) {
                return [...this.songs].sort((a, b) => a.song.localeCompare(b.song));
            } else {
                return [];
            }
        },
        sortedByArtist() {
            if (Array.isArray(this.songs)) {
                return [...this.songs].sort((a, b) => a.artist.localeCompare(b.artist));
            } else {
                return [];
            }
        },
    },
    methods: {
        setSortBy(sortBy) {
            this.sortBy = sortBy;
        },
    },
};
</script>