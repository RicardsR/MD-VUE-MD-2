import { createStore } from 'vuex';
import songsList from "../src/assets/songs-list.json";

const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';

export const store = createStore({
    state: {
        all_songs: songsList,
        user: {
            firstName: 'Ričards',
            lastName: 'Reinsons',
            studentCode: 'IT21016',
            loggedAt: [],
            loggedIn: userLoggedIn,
        },
    },
    mutations: {
        login(state) {
            state.user.loggedIn = true;
            state.user.loggedAt.push(getFormattedTimestamp());
            localStorage.setItem('userLoggedIn', 'true');
        },
        logout(state) {
            state.user.loggedIn = false;
            localStorage.setItem('userLoggedIn', 'false');
        },
        resetUser(state) {
            state.user.firstName = 'name';
            state.user.lastName = 'surname';
            state.user.studentCode = 'CODE1234';
            state.user.loggedAt = [];
            state.user.loggedIn = false;
            localStorage.removeItem('userLoggedIn');
        },
        updateFirstName(state, name) {
            state.user.firstName = name;
        },
        updateLastName(state, surname) {
            state.user.lastName = surname;
        },
        updateStudentCode(state, code) {
            state.user.studentCode = code;
        },
    },
    actions: {
        login(context) {
            context.commit('login');
        },
        logout(context) {
            context.commit('logout');
        },
        updateName(context, name) {
            context.commit('updateFirstName', name);
        },
        updateSurname(context, surname) {
            context.commit('updateLastName', surname);
        },
        updateCode(context, code) {
            context.commit('updateStudentCode', code);
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