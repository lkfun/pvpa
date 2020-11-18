<template>
  <div class="body">
    <div class="download">
      <div v-for="(item) in downloaddataComputed.download" :key="item.group" >
        <h2>{{item.group}}</h2>
        <small>{{item.description}}</small>
        <div class="group">
          <div class="groupitem"  v-for="(i) in item.items" :key="i.name">
            <del v-if="i.description&&i.description.toString().includes('挂了')">{{i.name}}：
              <a :href="i.address" :title="i.address" target="_blank">{{i.address| capitalize(i.qq)}}</a>
            </del>
            <span v-else>{{i.name}}：
              <a :href="i.address" :title="i.address" target="_blank">{{i.address| capitalize(i.qq)}}</a>
            </span>
            <div v-for="(item,index) in i.description" :key="index" >
              <small>{{item}}</small>
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
  computed: {
    downloaddataComputed: function () {
      downloaddata.download.forEach((element, elementIndex) => {
        element.items.forEach((item, itemIndex) => {
          downloaddata.download[elementIndex].items = downloaddata.download[elementIndex].items.filter(item => (!item.description || !item.description.toString().includes('不显示')))
        })
      })
      return downloaddata
    }
  },
  data: function () {
    return {
      downloaddata
    }
  },
  filters: {
    capitalize: function (value, qq) {
      if (!value) return ''
      value = value.toString()
      value = value.replace('https://', '').replace('http://', '').replace('mailto:', '')
      if (value.length > 32) {
        value = value.substr(0, 32) + '...'
      }
      if (value.indexOf('jq.qq.com') > -1) {
        value = qq
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
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 1em;
  }
  a,a:visited {
    color: #474dff;
  }
  small{
    color: #999999;
    display:block;
    font-size:0.85em;
    padding: 0.3em 0.1em 0.3em 2em;
  }
  h2:before {
    content: "🔷";
    color: #474dff;
    position: relative;
    margin-top: -0.05em;
    left:-0.2em;
    padding-right: 0.5em;
    font-size: 1em;
    line-height: 1;
  }
  h2{
    margin: 0.2em auto;
  }
  h1{
    color: #474dff;
  }
  del{
    color:#ddddee;
  }
  del a{
    color:#a9a9dd;
  }
  .download{
    display: block;
    max-width: 80em;
    margin: 0 auto ;
    text-align: left;
  }
  .group{
    padding:1.5em 1.5em 3em 2em;
    line-height: 1.5em;
    font-size: 1em;
  }
  .groupitem{
    padding-bottom: 2em;
  }
  .groupitem span:before,.groupitem del:before{
    content: "⬜";
    color: #6b88ff;
    position: relative;
    margin-top: -0.05em;
    left:-0.2em;
    padding-right: 0.5em;
    line-height: 1em;
    font-weight: bold;
  }
</style>
