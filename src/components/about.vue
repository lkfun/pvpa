<template>
  <div class="hello">
    <div class="ifam" v-bind:style="styleObject">
      <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=35040360&auto=1&height=66"></iframe>
    </div>
    <div class="yeshouwarp yeshou">
      <div  class="yeshoumask yeshou"></div>
      <div class="yeshou yeshou-blur" v-bind:style="yeshou"></div>
    </div>
    <h1>{{ msg }}</h1>
    <p>QQ群:{{ qqgroup1[0] }}</p>
    <p>QQ群:{{ qqgroup1[1] }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢 迎 来 到 新 宝 岛',
      qqgroup1: ['199938498', '453620381'],
      isActive: true,
      error: null,
      styleObject: {
        top: '270px'
      },
      yeshou: {
        backgroundImage: 'url(' + require('../assets/yeshou.jpg') + ')'
      }
    }
  },
  methods: {
    clickfuntion () {
      this.styleObject.top = '10px'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  .yeshoumask{
    background:rgba(0, 0, 0, 0.3);
    position: absolute;
    z-index: 100;
  }
  .yeshouwarp{
    overflow:hidden;
    margin: 0 auto;
  }
  .yeshou{
    width:399px;
    height: 300px;
    border-radius: 12px;
  }
  .yeshou-blur{
    filter: blur(10px);
  }
  .ifam {
    width:330px;
    height: 88px;
    margin: 0 auto;
    left:50%;
    position: absolute;
    margin-left:-165px;
    display: 'block';
    z-index: 1000;
  }
  h1{
    color: #a53015;
  }
</style>
