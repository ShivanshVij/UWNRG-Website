<template>
  <div class="navbar">
    <b-navbar toggleable="md" type="light" variant="white" fixed="top">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">
        <router-link class="navbar-item" :to="{path: '/'}" replace><img src="@/assets/logo2.png" alt="UWNRG" style="width: 150px;margin: 8px; margin-top: 3px;margin-left: 40px;"></router-link>
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item href="#"><router-link class="navbar-item" :to="{path: '/team'}" replace>Meet the Team</router-link></b-nav-item>
          <b-nav-item href="#"><router-link class="navbar-item" :to="{path: '/robots'}" replace>Our Robots</router-link></b-nav-item>
          <b-nav-item href="#"><router-link class="navbar-item" :to="{path: '/events'}" replace>Events</router-link></b-nav-item>
          <b-nav-item href="#"><router-link class="navbar-item" :to="{path: '/sponsors'}" replace>Sponsors</router-link></b-nav-item>
          <b-nav-item href="#"><router-link class="navbar-item" :to="{path: '/contact'}" replace>Contact Us</router-link></b-nav-item>
          
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      navIsActive: false
    };
  },
  methods: {
    toggleMenu: function() {
      this.navIsActive = !this.navIsActive;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar{
  width: 100%;
  margin: 0;
  padding: 0;
}
.navbar-toggler{
  margin-left: 3px;
}

* {
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
</style>
