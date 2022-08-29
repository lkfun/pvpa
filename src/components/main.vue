<template>
  <div class="hello">
    <icon name="pvpa" :scale="20"></icon>
    <h1>LoI<small>®</small></h1>
    <h3>Land of Illusions</h3>
    <h3>幻想乡</h3>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '欢迎来到幻想乡'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2,h3 {
  font-weight: bold;
}
h1 {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 46px;
  font-family: '微软雅黑';
}
h3 {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 11px;
  font-weight: bold;
}
h1>small {
  font-size: 11px;
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
.quot{
  font-size: 50px;
  line-height: 100px;
}
p{
  font-family:'Kaiti TC Regular'
}
</style>
