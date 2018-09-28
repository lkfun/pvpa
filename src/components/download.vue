<template>
  <div class="body">
    <div class="download">
      <h1>下载</h1>
      <div v-for="(item) in downloaddata.download" :key="item.group" >
        <h2>{{item.group}}</h2>
        <small>{{item.description}}</small>
        <div class="group">
          <div class="groupitem" v-if="!i.description||!i.description.toString().includes('不显示')"  v-for="(i) in item.items" :key="i.name">
            <del v-if="i.description&&i.description.toString().includes('挂了')">{{i.name}}：
              <a :href="i.address">{{i.address| capitalize}}</a>
            </del>
            <span v-else>{{i.name}}：
              <a :href="i.address">{{i.address| capitalize}}</a>
            </span>
            <div v-for="(item,index) in i.description" :key="index" >
              <small>&nbsp;&nbsp;&nbsp;&nbsp;{{item}}</small>
            </div>
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
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      value = value.replace('https://', '').replace('http://', '').replace('mailto:', '')
      if (value.length > 32) {
        value = value.substr(0, 32) + '...'
      }
      return value
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
  .groupitem span:before,.groupitem del:before{
    content: "🔶";
    color: #6b88ff;
    position: relative;
    margin-top: -0.05em;
    left:-0.2em;
    padding-right: 0.5em;
    font-size: 0.5em;
    line-height: 1;
    font-weight: bold;
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
    display:block;
  }
  h2:before {
    content: "🔷";
    color: #6b88ff;
    position: relative;
    margin-top: -0.05em;
    left:-0.2em;
    padding-right: 0.5em;
    font-size: 1em;
    line-height: 1;
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
