<template>
  <div id="app">
    <f-header></f-header>
    <transition name="fade" mode="out-in">
      <router-view ></router-view>
    </transition>
    <f-footer></f-footer>
    <f-music></f-music>
  </div>
</template>

<script>
import FFooter from './components/footer'
import FHeader from './components/header'
import FMusic from './components/music.vue'
export default {
  name: 'App',
  components: {
    FFooter,
    FHeader,
    FMusic
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 70px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
