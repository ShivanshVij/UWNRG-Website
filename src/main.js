// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

import '@fortawesome/fontawesome-free/css/all.css'

import Buefy from "buefy";
import "buefy/lib/buefy.css";
import 'nx-card/dist/nx-card.css';
import Vuetify from 'vuetify';
import NxCard from 'nx-card';

Vue.use(NxCard);
Vue.use(Buefy);
Vue.use(Vuetify, {
  iconfont: 'fa'
 });

let app;
app = new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
