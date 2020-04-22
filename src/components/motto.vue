<template>
  <div class="hello">
    <div class="download">
      <div class="motto" v-for="item in motto" :key="item.name">
        <p class="motto-p">{{ item.motto }}</p>
        <p class="afa">————{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import motto from '../assets/motto.json'
export default {
  name: 'HelloWorld',
  data () {
    return {
      motto
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.download{
  display: block;
  max-width: 800px;
  margin: 0 auto ;
  text-align: left;
}
</style>
