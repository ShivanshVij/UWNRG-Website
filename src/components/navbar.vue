<template>
  <nav class="navbar is-fixed-top" style="background: #F8F8F8;">
    <div class="navbar-brand">
      <router-link class="navbar-item" :to="{path: '/'}" replace>
        <div style="width: 100%;">
          <img src="@/assets/logo2.png" alt="Univeristy of Waterloo Nanorobotics Group" style="margin-top: -10px;">
        </div>
      </router-link>
      <div class="navbar-burger burger is-link" @click="toggleMenu" :class="{'is-active': navIsActive}" data-target="mainNav">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="mainNav" class="navbar-menu" :class="{'is-active': navIsActive}">
      <div class="navbar-start">
        <router-link class="navbar-item" :to="{path: '/team'}" replace>Meet the Team</router-link>
        <router-link class="navbar-item" :to="{path: '/robots'}" replace>Our Robots</router-link>
        <router-link class="navbar-item" :to="{path: '/events'}" replace>Events</router-link>
        <router-link class="navbar-item" :to="{path: '/sponsors'}" replace>Sponsors</router-link>
        <router-link class="navbar-item" :to="{path: '/contact'}" replace>Contact Us</router-link>
      </div>
    </div>
  </nav>
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
.navbar-burger {
  margin-top: 3.5px;
  margin-right: 6px;
}

span {
  color: black;
  font-weight: bold;
  font: outline;
}

.navbar-item {
  padding-top: 3px;
  padding-bottom: 3px;
}

.navbar-brand {
  background: #f8f8f8;
  height: 60px;
  margin-left: 150px;
  margin-top: 3.5px;
  margin-bottom: 0px;
  padding: 0px;
}
@media only screen and (max-width: 1023px) {
  img {
    margin-bottom: -2px;
    margin-left: 0px;
  }

  .navbar-brand {
    margin-left: 10px;
  }

  .navbar-start:hover {
    color: black;
  }
}

* {
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
</style>
