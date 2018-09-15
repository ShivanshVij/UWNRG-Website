// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

import '@fortawesome/fontawesome-free/css/all.css'
import "buefy/lib/buefy.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Buefy from "buefy";
import Vuetify from 'vuetify';
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(Vuetify, {iconfont: 'fa'});
Vue.use(Buefy);

let app;
app = new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
