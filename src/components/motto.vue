<template>
  <div class="hello">
    <f-header></f-header>
    <div class="motto" v-for="item in motto" :key="item.name">
      <p class="motto-p"><span class="quot">“ </span>{{ item.motto }}<span class="quot"> ”</span></p>
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
      msg: '欢迎来到第一产业影音交流协会',
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
.quot{
  font-size: 50px;
  line-height: 100px;
}
p{
  font-family:'Kaiti TC Regular'
}
.motto{
  display: block;
  background-color: #dfdfdf;
  max-width: 500px;
  margin: 0 auto ;
  padding-left: 30px;
  padding-right: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
}
.motto-p{
  font-size: 20px;
}
.afa{
  text-align: right;
}
</style>
