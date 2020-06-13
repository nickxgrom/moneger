import Vue from "vue";
import App from "./app.vue";
import router from "./router";
import Atomio from "atomio-vue";
import "atomio-vue/dist/atomio.min.css";
import vuetify from "./plugins/vuetify";

Vue.use(Atomio)

new Vue({
    el: "#app",
    template: `<app/>`,
    router,
    vuetify,
    components: {
        App
    }
})
