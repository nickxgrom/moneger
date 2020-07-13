import Vue from "vue";
import App from "./app.vue";
import router from "./router";
import Atomio from "atomio-vue";
import Donut from "vue-css-donut-chart"
import "vue-css-donut-chart/dist/vcdonut.css"
import "atomio-vue/dist/atomio.min.css";
import vuetify from "./plugins/vuetify";
import store from "./store";

Vue.use(Atomio)
Vue.use(Donut)

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
