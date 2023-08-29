import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { projectAuth } from './firebase/config'

//global styles
import './assets/main.css'

//wrapping our app mounting to ensure firebase detects if a user is logged in or not
//the first time app loads, app variable doesnt have a value so the below lines will check for auth, then mount and load app. if app 
// already exists, it jsut checks for auth status

let app

projectAuth.onAuthStateChanged( ()=> {
    if(!app) {
        app =  createApp(App).use(router).mount('#app')
    }
})
