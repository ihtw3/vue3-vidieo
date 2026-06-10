// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import '@/assets/styles/base.less'
import '@/assets/styles/iconfont.less'
// import piniaPersist from 'pinia-plugin-persist'

import '@/mock/index'

import { Tab, Tabs, Swipe, SwipeItem, Search, Field, CellGroup, Col, Row, Lazyload, Toast } from 'vant'
import 'vant/lib/index.css';

const app = createApp(App)
const pinia=createPinia()

app.use(createPinia())
app.use(router)
app.use(Tab)
app.use(Tabs)
app.use(Swipe)
app.use(SwipeItem)
app.use(Search)
app.use(Field)
app.use(CellGroup)
app.use(Col)
app.use(Row)
app.use(Lazyload)
app.use(pinia)
app.use(Toast)

app.mount('#app')
