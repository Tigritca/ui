import {createApp} from 'vue'
import App from './App.vue'
import VCalendar from 'v-calendar';
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Page from "./schedule/Components/Page";
import Modal from "./record/Components/Modal";
import Form from "./record/Components/RegistrationForm";
import store from "./store/index";
import "bootstrap/scss/bootstrap.scss"
import "bootstrap-icons/font/bootstrap-icons.css"
import DKToast from 'vue-dk-toast';

createApp(App)
    .use(router)
    .use(DKToast)
    .use(store)
    .use(VueAxios, axios)
    .use(VCalendar, {})
    .component('schedule-page', Page)
    .component('modal', Modal)
    .component('registration-form', Form)
    .mount('#app');