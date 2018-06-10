// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

import Buefy from "buefy";
import "buefy/lib/buefy.css";

Vue.use(Buefy);

let app;
app = new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
