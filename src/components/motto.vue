<template>
  <div class="hello">
    <f-header></f-header>
    <h1>{{titile}}</h1>
    <div class="motto" v-for="item in motto" :key="item.name">
      <p class="motto-p">{{ item.motto }}</p>
      <p class="afa">————{{item.name}}</p>
    </div>
    <f-footer></f-footer>
  </div>
</template>

<script>
import FFooter from './footer'
import FHeader from './header'
import motto from '../assets/motto.json'
export default {
  name: 'HelloWorld',
  data () {
    return {
      titile: '名人名言（大雾）',
      description: ['非洲农业不发达，必须要有金坷垃非洲农业不发达，必须要有金坷垃非洲农业不发达，必须要有金坷垃非洲农业不发达，必须要有金坷垃', '日本资源太缺乏，必须要有金坷垃'],
      motto
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
p{
  font-family: "SimSun"
}
.motto{
  display: block;
  background-color: #dfdfdf;
  max-width: 400px;
  margin: 0 10% ;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
}
.motto-p{
  text-align: left;
  font-size: 18px;
}
.afa{
  text-align: right;
}
.motto-p:first-letter{
  line-height: 40px;
  font-size: 40px;
 }
</style>
