import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import locales from './locales/index'


const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  legacy: false,
  allowComposition: true,
  globalInjection: true,
  messages: locales,
  missingWarn: false,
  fallbackWarn: false
})

const app = createApp(App)
app.use(createPinia())
app.use(i18n)
app.mount('#app')