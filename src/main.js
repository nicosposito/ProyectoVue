import { createApp } from 'vue'
import App from './App.vue'


import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import mitt from 'mitt';
const eventBus = mitt();

const app = createApp(App);
app.config.globalProperties.eventBus = eventBus;
loadFonts();

app.use(router)
  .use(vuetify) 
  .use(VueSweetalert2)
  .component('Datepicker', Datepicker)
  .mount('#app')
  


