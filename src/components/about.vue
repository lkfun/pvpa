<template>
  <div class="hello">
    <div class="yeshouwarp yeshou">
      <div  class="yeshoumask yeshou"></div>
      <div class="yeshou yeshou-blur" v-bind:style="yeshou"></div>
    </div>
    <h1>{{ msg }}</h1>
    <p>QQ群:<a :href="qqgroupadd[0]" target="_blank">{{ qqgroup[0] }}</a></p>
    <p>QQ群:<a :href="qqgroupadd[1]" target="_blank">{{ qqgroup[1] }}</a></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢 迎 来 到 新 宝 岛',
      qqgroup: ['199938498', '453620381'],
      qqgroupadd: ['https://jq.qq.com/?_wv=1027&k=5LUqzJ0', 'https://jq.qq.com/?_wv=1027&k=5mdqJjQ'],
      isActive: true,
      error: null,
      styleObject: {
        top: '270px'
      },
      yeshou: {
        backgroundImage: 'url(' + require('../assets/yeshou.jpg') + ')'
      }
    }
  }
}
</script>

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
  h1{
    color: #a53015;
  }
</style>
