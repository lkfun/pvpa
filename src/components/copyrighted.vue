<template>
  <div class="hello">
    <div class="marketwarp market">
      <h2>FL、VEGAS等无法提供了，抱歉！</h2>
      <div class="market" v-bind:style="market"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      market: {
        backgroundImage: 'url(' + require('../assets/market.jpg') + ')'
      }
    }
  }
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  .marketmask{
    background:rgba(0, 0, 0, 0.3);
    position: absolute;
    z-index: 100;
  }
  .marketwarp{
    overflow:hidden;
    margin: 0 auto;
  }
  .market{
    width:663px;
    height: 425px;
    border-radius: 12px;
  }
  .market-blur{
    filter: blur(10px);
  }
  h1{
    color: #a53015;
  }
</style>
