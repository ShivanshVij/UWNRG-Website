<template>
  <div id="app">
    <transition name="el-fade-in">
      <router-view class="transition-box"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.transition-box {
  border-radius: 4px;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
}
</style>
