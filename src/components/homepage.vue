<template>
  <div class="homepage">
      <navbar></navbar>
      <div class="columns is-desktop is-gapless" style="content-align: center; background-color: rgba(0, 0, 0, 0.7);">
        <img class="background" src="@/assets/nrg_bg.jpg">
        <div class="column" style="">
          <img class="shield" src="@/assets/waterloo-shield.svg">
          <img class="logo" src="@/assets/logo.png">
        </div>
        <p class="introduction">We are an undergraduate student team that explores technological marvels at the micro-scale. By encouraging collaboration amongst undergraduate students, professors, and professionals, we generate novel ideas that showcase the ingenuity of microrobotics.</p>
      </div>
      <div class="columns is-desktop is-gapless" style="position: absolute; top: 100%; width: 100%;">
        <div class="column" style="background: white; width: 100%;">
          <v-footer dark height="auto">
            <v-card class="flex" flat tile>
              <v-card-actions class="black">

                <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
                  <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
                <v-divider></v-divider>
                <strong style="margin-left: 15px; color: white;margin-right: 16px;">&copy;2018 — University of Waterloo Nanorobotics Group</strong>
              </v-card-actions>
            </v-card>
          </v-footer>
        </div>
      </div>
    
  </div>
  
</template>

<script>
import 'vuetify/dist/vuetify.min.css';
import navbar from "./navbar.vue";
export default {
  components: {
    navbar: navbar
  },
  name: "homepage",
  data() {
    return {
      msg: "UWNRG Website Home Page",
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
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
  height: 100%;
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
