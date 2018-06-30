<template>
  <div class="hello">
    <img src="../assets/yeshou.jpg">
    <h1>{{ msg }}</h1>
    <p>QQ群:{{ qqgroup1[0] }}</p>
    <p>QQ群:{{ qqgroup1[1] }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      msg: '欢 迎 来 到 新 宝 岛',
      qqgroup1: ['199938498', '453620381']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  img {
    max-width: 340px;
  }
  h1{
    color: #a53015;
  }
</style>
