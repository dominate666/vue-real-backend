import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from '../components/Home.vue'
export default new Router({
    routes:[
        {
            path:"/home",
            component:Home
        },
        {
            path:'',
            redirect:'home'
        }
    ],
    mode:"history"
})