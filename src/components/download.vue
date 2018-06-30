<template>
  <div class="body">
    <div class="download">
      <h1>下载</h1>
      <div v-for="(item) in downloaddata.download" :key="item.group" >
        <h2>{{item.group}}</h2>
        <small>{{item.description}}</small>
        <div class="group">
          <div class="groupitem" v-for="(i) in item.items" :key="i.name">
            <del v-if="i.description&&i.description.includes('挂了')">{{i.name}}： <a :href="i.address">{{i.address}}</a></del>
            <span v-else>{{i.name}}： <a :href="i.address">{{i.address}}</a></span>
            <br/>
            <small>{{i.description}}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import downloaddata from '../assets/downloaddata.json'
export default {
  data: function () {
    return {
      downloaddata
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{
    position: relative;
    display: block;
  }
  .download{
    display: block;
    max-width: 800px;
    margin: 0 auto ;
    text-align: left;
  }
  .group{
    padding:20px 20px 50px 30px ;
    line-height: 20px;
    font-size: 15px;
  }
  .groupitem{
    padding-bottom: 30px;
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
  h2:before {
    content: "📓";
    color: #6b88ff;
    position: relative;
    margin-top: -0.05em;
    left:-0.2em;
    padding-right: 0.5em;
    font-size: 1.2em;
    line-height: 1;
    font-weight: bold;
  }
  h2{
    margin: 6px auto;
  }
  h1{
    color: #007fff;
  }
  del{
    color:#ddddee;
  }
  del a{
    color:#a9a9dd;
  }
</style>
