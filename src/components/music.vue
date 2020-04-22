<template>
  <div >
    <div class="music" v-bind:style="styleObject">
      <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=298 height=52 src="//music.163.com/outchain/player?type=2&id=1311319145&auto=0&height=32"></iframe>
      <span v-on:click="musicmethod">♬</span>
    </div>
  </div>
</template>

<script>
import TweenLite from 'gsap'
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
</style>
