import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Material from '@primeuix/themes/material'

const app =  createApp(App)
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Material,
        options: {
            prefix: 'p',
            darkModeSelector: '.dark-theme'
        }
}})
app.mount('#app')
