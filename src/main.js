import { createApp } from 'vue'
import app from './app.vue'
import VueScrollTo from 'vue-scrollto'

createApp(app)
  .use(VueScrollTo, {
    duration: 1000,
    easing: 'ease',
  })
  .mount('#app')
