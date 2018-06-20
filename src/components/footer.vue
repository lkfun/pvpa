<template>
  <div class="footer">
    <hr/>
    <small>Copyright&nbsp;&copy;&nbsp;2018&nbsp;pvpa.lkfun.cc&nbsp;版权所有</small>
    <hr/>
  </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style scoped>
  small{
    color: rgb(128, 128, 128)
  }
  hr {/*透明渐变水平线*/
    width:80%;
    margin:10px auto;
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(184, 167, 245, 0.75), rgba(0, 0, 0, 0));
  }
</style>
