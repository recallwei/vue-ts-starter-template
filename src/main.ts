import '@/assets/styles/main.scss'
import 'vfonts/OpenSans.css'
import 'vfonts/FiraCode.css'
import 'nprogress/nprogress.css'

import { createPinia } from 'pinia'

import router from '@/router'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

faviconLoader()
naiveUILoader()
