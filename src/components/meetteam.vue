<template>
  <div class="meettheteam">
      <navbar></navbar>
      <div class="columns is-desktop is-gapless" style="content-align: center; background-color: rgba(255, 255, 255, 0.7);">
        <div class="column" style="margin-top:80px;">
        <p style="color: black;"> Meet the Team</p>
          <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          src="@/assets/ShivanshVij.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
        </div>
      </div>
  </div>
</template>

<script>
import navbar from "./navbar.vue";
export default {
  components: {
    navbar: navbar
  },
  name: "meettheteam",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      image1: "@/assets/ShivanshVij.jpg"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 1920px;
  min-height: 300px;
}

.shield {
  position: absolute;
  top: 16%;
  left: 45.75%;
  width: 8.5%;
}
.logo {
  position: absolute;
  top: 27.5%;
  left: 30%;
  width: 40%;
}

.introduction {
  color: white;
  position: absolute;
  top: 55%;
  width: 60%;
  left: 20%;
  font-size: 28px;
  font-style: normal;
  font-weight: 300;
  text-decoration: none;
  text-transform: none;
  color: #ffffff;
}
@media only screen and (max-width: 1023px) {
  .shield {
    top: 20%;
    width: 16%;
    left: 42%;
  }
  .logo {
    top: 35%;
    width: 60%;
    left: 20%;
  }
  .introduction {
    top: 60%;
    width: 90%;
    left: 5%;
    font-size: 25px;
  }
}

@media only screen and (max-width: 550px) {
  .shield {
    top: 20%;
    width: 16%;
    left: 42%;
  }
  .logo {
    top: 30%;
    width: 60%;
    left: 20%;
  }
  .introduction {
    top: 45%;
    font-size: 21px;
  }
}
</style>
