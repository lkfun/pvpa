<template>
  <div >
    <div class="music" v-bind:style="styleObject">
      <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=298 height=52 src="//music.163.com/outchain/player?type=2&id=1311319145&auto=0&height=32"></iframe>
      <span v-on:click="musicmethod">♬</span>
    </div>
  </div>
</template>

<script>
import TweenLite from 'gsap/TweenLite'
export default {
  name: 'header',
  data () {
    return {
      number: 0,
      styleObject: {
        left: '-298px'
      }
    }
  },
  methods: {
    musicmethod: function (data) {
      this.show = !this.show
      var newValue = this.show ? -8 : -298
      console.info(TweenLite)
      TweenLite.to(this.$data.styleObject, 0.5, {
        left: newValue + 'px'
      })
      var params = {}
      params.username = 'value1'// 你要传给后台的参数值 key/value//this.$axios.get('http://192.168.0.79/lkfunWebService/api/values', params)
    }
  },
  watch: {
    number: function (newValue) {}
  }
}
</script>

<style scoped>
  .music {
    position: fixed;
    top: 280px;
    left: -10px;
    width:323px;
    right: 0;
    z-index: 1000;
  }
  .music>iframe{
    float: left;
    background-color: rgba(0, 127, 255, 0.3)
  }
  .music>span {
    width: 20px;
    height:52px;
    background-color: rgba(0, 127, 255, 0.3);
    color: rgba(0, 127, 255, 0.9);
    padding-left: 3px;
    float: left;
    display: block;
    line-height: 50px;
    cursor: pointer;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -ms-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
  }
  .music>span:hover{
    background-color: rgba(0, 127, 255, 0.8);
  }
  .header-fixed-top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10000;
  }
  .nav {
    float: left;
  }
  .nav li {
    display: inline-block;
  }
  .nav a {
    display: inline-block;
    padding: 0em .8em;
    font-size: 1.1em;
    line-height: 1.1em;
    color: rgba(0, 127, 255, 0.6);
    text-decoration: none;
  }
  .active a,.nav a:hover,.nav a:focus{
    color: rgba(0, 127, 255, 1);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
