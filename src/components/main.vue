<template>
  <div class="hello">
    <f-header></f-header>
    <img src="../assets/pvpa.jpg">
    <h2>{{msg}}</h2>
    <f-footer></f-footer>
  </div>
</template>

<script>
import FFooter from './footer'
import FHeader from './header'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到第一产业影音交流协会',
      description: ['非洲农业不发达，必须要有金坷垃', '日本资源太缺乏，必须要有金坷垃']
    }
  },
  components: {
    FFooter,
    FHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2,h3 {
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
.quot{
  font-size: 50px;
  line-height: 100px;
}
p{
  font-family:'Kaiti TC Regular'
}
</style>
