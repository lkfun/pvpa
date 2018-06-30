<template>
  <header class="header header-fixed-top">

    <ul class="nav">
        <li v-bind:class="{ active: $route.path==='/' }">
          <router-link to='/'>首页</router-link>
        </li>
        <li v-bind:class="{ active: $route.path==='/download' }">
          <router-link to='/download'>下载</router-link>
        </li>
        <li v-bind:class="{ active: $route.path==='/motto' }">
          <router-link to='/motto'>名言</router-link>
        </li>
        <li v-bind:class="{ active: $route.path==='/about' }">
          <router-link to='/about'>关于</router-link>
        </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style scoped>
  .active{
    padding-bottom: 5px;
    border-bottom: 2px solid #4598FF;
    color: #3A3A3A;
  }
  .header {
    border-bottom: 1px solid #eee;
    box-shadow: 0 1px 3px #eee;
    background-color: #fff;
  }
  .header-fixed-top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10000;
  }
  .nav {
    float: left;
  }
  .nav li {
    display: inline-block;
  }
  .nav a {
    display: inline-block;
    padding: 0em .8em;
    font-size: 1.1em;
    line-height: 1.1em;
    color: #007fff;
    text-decoration: none;
  }
  .nav a:hover {
    color: #007fff;
  }
  .nav a:focus {
    color: #007fff;
  }
</style>
