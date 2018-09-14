import Vue from "vue";
import Router from "vue-router";
import homepage from "@/components/homepage";
import teampage from "@/components/meetteam";
import navbar from "@/components/navbar";

Vue.use(Router);

const router = new Router({
  hashbang: false,
  history: true,
  mode: "history",
  routes: [
    {
      path: "/team",
      name: "Team Page",
      component: teampage
    },
    {
      path: "/*",
      name: "Home Page",
      component: homepage
    }
  ]
});

export default router;
