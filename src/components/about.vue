<template>
  <div class="hello">
    <div class="yeshou yeshouwarp ">
      <div class="yeshou " v-bind:style="yeshou"></div>
    </div>
    <h1><del>{{ msg }}</del></h1>
    <p>QQ群:<a :href="qqgroupadd[0]" target="_blank">{{ qqgroup[0] }}</a></p>
    <p>QQ群:<a :href="qqgroupadd[1]" target="_blank">{{ qqgroup[1] }}</a></p>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到阿斯特莱亚大陆（误）',
      qqgroup: ['199938498', '453620381'],
      qqgroupadd: ['https://jq.qq.com/?_wv=1027&k=5LUqzJ0', 'https://jq.qq.com/?_wv=1027&k=5mdqJjQ'],
      isActive: true,
      error: null,
      styleObject: {
        top: '270px'
      },
      yeshou: {
        backgroundImage: 'url(' + require('../assets/chouyou.gif') + ')'
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
    background:rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 100;
  }
  .yeshouwarp{
    overflow:hidden;
    margin: 0 auto;
  }
  .yeshou{
    width:300px;
    height: 300px;
    border-radius: 12px;
    background-repeat:no-repeat;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
  }
  .yeshou-blur{
    filter: blur(10px);
  }
  h1{
    color: #f54b8c;
  }
</style>
