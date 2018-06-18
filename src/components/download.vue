<template>
  <div class="body">
    <f-header></f-header>
    <div class="download">
      <h1>下载</h1>
      <div v-for="(item) in downloaddata.download" :key="item.group" >
        <h2>{{item.group}}</h2>
        <small>{{item.description}}</small>
        <div class="group">
          <div  v-for="(i) in item.items" :key="i.name">
            <del v-if="i.description&&i.description.includes('挂了')">{{i.name}}</del>
            <span v-else>{{i.name}}</span>
            ： <a :href="i.address">{{i.address}}</a>
            <small>{{i.description}}</small>
          </div>
        </div>
      </div>
    </div>
    <f-footer></f-footer>
  </div>
</template>

<script>
import FFooter from './footer'
import FHeader from './header'
import downloaddata from '../assets/downloaddata.json'
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      downloaddata,
      msg: '欢 迎 来 到 新 宝 岛',
      qqgroups: [{text: '199938498'}, {text: '453620381'}]
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
  body{
    display: block;
  }
  .download{
    display: block;
    max-width: 800px;
    margin: 0 auto ;
    text-align: left;
  }
  .group{
    padding:20px 20px 50px 10px ;
    line-height: 30px;
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
    color: #6b88ff;
  }
  small{
    color: #999999;
  }
  h1{
    color: #007fff;
  }
  h2{
    margin: 6px auto;
  }
</style>
