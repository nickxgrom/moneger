import Vue from "vue";
import App from "./app.vue";
import router from "./router";
import Atomio from "atomio-vue";
import "atomio-vue/dist/atomio.min.css";
import vuetify from "./plugins/vuetify";
import store from "./store";

Vue.use(Atomio)

new Vue({
    el: "#app",
    template: `<app/>`,
    router,
    vuetify,
    store,
    components: {
        App
    }
})
