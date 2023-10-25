import { createStore } from 'vuex';

// Check if the user was logged in previously
const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';

export const store = createStore({
    state: {
        all_songs: [],
        user: {
            firstName: 'name',
            lastName: 'surname',
            studentCode: 'CODE1234',
            loggedAt: [],
            loggedIn: userLoggedIn, // Set the initial login status from localStorage
        },
    },
    mutations: {
        login(state) {
            state.user.loggedIn = true;
            state.user.loggedAt.push(getFormattedTimestamp());

            // Store the login status in localStorage
            localStorage.setItem('userLoggedIn', 'true');
        },
        logout(state) {
            state.user.loggedIn = false;
            state.user.loggedAt.push(getFormattedTimestamp());

            // Update the login status in localStorage
            localStorage.setItem('userLoggedIn', 'false');
        },
        resetUser(state) {
            state.user.firstName = 'name';
            state.user.lastName = 'surname';
            state.user.studentCode = 'CODE1234';
            state.user.loggedAt = [];
            state.user.loggedIn = false;

            // Clear the login status in localStorage
            localStorage.removeItem('userLoggedIn');
        },
    },
    actions: {
        login(context) {
            context.commit('login');
        },
        logout(context) {
            context.commit('logout');
        },
    },
});

function getFormattedTimestamp() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} - ${hours}:${minutes}`;
}
