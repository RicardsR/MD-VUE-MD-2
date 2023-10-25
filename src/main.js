import { createApp } from 'vue';
import App from './App.vue';
import LandingComponent from './components/LandingComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import NavigationComponent from './components/NavigationComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import SongListComponent from './components/SongListComponent.vue';
import SongFilterComponent from './components/SongFilterComponent.vue';
import AboutMeComponent from './components/AboutMeComponent.vue';
import FormComponent from './components/FormComponent.vue';

import router from './router';
import { store } from './store';

import './styles.css';

const app = createApp(App);

app.component('LandingComponent', LandingComponent);
app.component('HeaderComponent', HeaderComponent);
app.component('NavigationComponent', NavigationComponent);
app.component('HomeComponent', HomeComponent);
app.component('SongListComponent', SongListComponent);
app.component('SongFilterComponent', SongFilterComponent);
app.component('AboutMeComponent', AboutMeComponent);
app.component('FormComponent', FormComponent);

app.use(router);
app.use(store);

app.mount('#app');