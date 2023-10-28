<template>
    <form class="form-container">
        <div class="form-row">
            <label for="first-name" class="form-label">First name</label>
            <input id="first-name" type="text" :value="user.firstName" :disabled="disabled"
                @input="updateName($event.target.value)" class="input" :class="{ 'input-disabled': disabled }" />
        </div>
        <div class="form-row">
            <label for="last-name" class="form-label">Last name</label>
            <input id="last-name" type="text" :value="user.lastName" :disabled="disabled"
                @input="updateSurname($event.target.value)" class="input" :class="{ 'input-disabled': disabled }" />
        </div>
        <div class="form-row">
            <label for="student-code" class="form-label">Student code</label>
            <input id="student-code" type="text" :value="user.studentCode" :disabled="disabled"
                @input="updateCode($event.target.value)" class="input" :class="{ 'input-disabled': disabled }" />
        </div>
        <div class="form-row">
            <label class="form-label">Logged in at</label>
            <div v-for="timestamp in sortedTimestamps" :key="timestamp" class="form-logged-at-list">
                {{ timestamp }}
            </div>
        </div>
    </form>
</template>

<script>
import { computed } from 'vue';
import { store } from '@/store';

export default {
    props: {
        disabled: {
            type: Boolean,
            default: true,
        },
        loggedAt: {
            type: Array,
            default: () => [],
        },
    },
    setup() {
        const user = computed(() => store.state.user);

        return {
            user,
        };
    },
    computed: {
        sortedTimestamps() {
            return [...this.user.loggedAt].sort((a, b) => b - a);
        },
    },
    methods: {
        updateName(name) {
            store.commit('updateFirstName', name);
        },
        updateSurname(surname) {
            store.commit('updateLastName', surname);
        },
        updateCode(code) {
            store.commit('updateStudentCode', code);
        }
    },
};
</script>