<template>
  <div class="meettheteam">
      <navbar></navbar>
      <img class="background" src="@/assets/nano.jpg" width="100%" height="500px"><p class="header">Meet our Amazing Team!</p></img>
      <div class="card" @mouseover="shivanshvij = false;" @mouseleave="shivanshvij = true;" >
        <img src="@/assets/ShivanshVij.jpg" alt="Shivansh Vij" style="width:100%;"> 
        <div v-if="shivanshvij == true" class="container">
          <h4 ><b>Shivansh Vij</b></h4>
          <p>S.A.W. Team Lead, Control Hardware Engineer, Web Design</p>
        </div>
        <div v-if="shivanshvij == false" class="container">
          <h4 style="margin-bottom: 10px;"><b>Check me out:</b></h4>
          <h4 >
            <a href="https://github.com/shivanshvij"><b style="margin-left: 10px;margin-right: 10px;">
              <i class="fab fa-github"></i>
            </b></a>
            <a href="https://shivanshvij.com"><b style="margin-left: 10px;margin-right: 10px;">
              <i class="fas fa-globe-americas"></i>
            </b></a>
            <a href="https://www.linkedin.ca/in/shivanshvij"><b style="margin-left: 10px;margin-right: 10px;">
              <i class="fab fa-linkedin"></i>
            </b></a>
          </h4>
        </div>
      </div>
      <div class="card" @mouseover="jonathanwu = false;" @mouseleave="jonathanwu = true;" >
        <img src="@/assets/JonathanWu.jpg" alt="Jonathan Wu" style="width:100%;"> 
        <div v-if="jonathanwu == true" class="container">
          <h4 ><b>Jonathan Wu</b></h4>
          <p>Design Team Lead, Overall Weeb (But we still love him)</p>
        </div>
        <div v-if="jonathanwu == false" class="container">
          <h4 style="margin-bottom: 10px;"><b>Check me out:</b></h4>
          <h4 >
            <a href="https://github.com/shivanshvij"><b style="margin-left: 10px;margin-right: 10px;">
              <i class="fab fa-github"></i>
            </b></a>
            <a href="https://shivanshvij.com"><b style="margin-left: 10px;margin-right: 10px;">
              <i class="fas fa-globe-americas"></i>
            </b></a>
            <a href="https://www.linkedin.ca/in/shivanshvij"><b style="margin-left: 10px;margin-right: 10px;">
              <i class="fab fa-linkedin"></i>
            </b></a>
          </h4>
        </div>
      </div>
      <div class="card" @mouseover="maxhamilton = false;" @mouseleave="maxhamilton = true;" >
        <img src="@/assets/MaxHamilton.jpg" alt="Max Hamilton" style="width:100%;"> 
        <div v-if="maxhamilton == true" class="container">
          <h4 ><b>Max Hamilton</b></h4>
          <p>Nano Eng Genius, guy who keeps us from getting too distracted</p>
        </div>
        <div v-if="maxhamilton == false" class="container">
          <h4 style="margin-bottom: 10px;"><b>Check me out:</b></h4>
          <h4 >
            <a href="https://github.com/shivanshvij"><b style="margin-left: 10px;margin-right: 10px;">
              <i class="fab fa-github"></i>
            </b></a>
            <a href="https://shivanshvij.com"><b style="margin-left: 10px;margin-right: 10px;">
              <i class="fas fa-globe-americas"></i>
            </b></a>
            <a href="https://www.linkedin.ca/in/shivanshvij"><b style="margin-left: 10px;margin-right: 10px;">
              <i class="fab fa-linkedin"></i>
            </b></a>
          </h4>
        </div>
      </div>
      <div class="card" @mouseover="jeffhuang = false;" @mouseleave="jeffhuang = true;" >
        <img src="@/assets/JeffHuang.png" alt="Jeff Huang" style="width:100%;"> 
        <div v-if="jeffhuang == true" class="container">
          <h4 ><b>Jeff Huang</b></h4>
          <p>Super awesome dude, but he's in Japan right now becoming a weeb</p>
        </div>
        <div v-if="jeffhuang == false" class="container">
          <h4 style="margin-bottom: 10px;"><b>Check me out:</b></h4>
          <h4 >
            <a href="https://github.com/shivanshvij"><b style="margin-left: 10px;margin-right: 10px;">
              <i class="fab fa-github"></i>
            </b></a>
            <a href="https://shivanshvij.com"><b style="margin-left: 10px;margin-right: 10px;">
              <i class="fas fa-globe-americas"></i>
            </b></a>
            <a href="https://www.linkedin.ca/in/shivanshvij"><b style="margin-left: 10px;margin-right: 10px;">
              <i class="fab fa-linkedin"></i>
            </b></a>
          </h4>
        </div>
      </div>
      
  </div>
</template>

<script>
import navbar from "./navbar.vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  components: {
    navbar: navbar,
  },
  name: "meettheteam",
  data() {
    return {
      shivanshvij: true,
      jonathanwu: true,
      maxhamilton: true,
      jeffhuang: true,
    }
  },
  mounted () {
  },
  watch: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background {
  border-radius: 0px;
  max-height: 200px;
  object-fit: cover;
}
.header {
  color: white;
  position: absolute;
  top: 24%;
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
  .header {
    top: 16%;
    font-size: 18px;
  }
  .background {
    max-height: 100px;
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

.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 5px; /* 5px rounded corners */
    margin: 10px;
    margin-left: 15px;
    margin-right: 15px;
    display: inline-block;
    position: relative;
    width: 280px;
    height: 375px;
}

/* Add rounded corners to the top left and the top right corner of the image */
img {
    border-radius: 5px 5px 0 0;
    height: 280px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
    transition: all 0.06s; 
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);
    transform: scale(1.02);
}

/* Add some padding inside the card container */
.container {
  position: absolute;
  width: 280px;
  align-content: center;
  margin-top: -10px;
  height: 120px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .15s;
}
.fade-enter, .fade-leave-to {
  transition-delay: 5000ms;
  opacity: 0;
}


</style>


