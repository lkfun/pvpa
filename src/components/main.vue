<template>
  <div class="hello">
    <f-header></f-header>
    <img src="../assets/pvpa.jpg">
    <h1>{{ msg }}</h1>
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
      msg: '欢迎来到第一产业影音交流协会'
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
</style>
