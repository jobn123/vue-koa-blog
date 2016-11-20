<template>
  <div class="banner">
    <h1>
      OXYGEN
    </h1>
  </div>
</template>

<script>

export default {
  name: 'banner',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .banner {
    position: relative;
    width: 20rem;
    height: 9.13888888888889rem;
    background: url('../../assets/header-bg@2x.png');
    background-size: 20rem 9.13888888888889rem;
  }
  .banner h1 {
    width: 6.027777777777778rem;
    height: 1.6944444444444444rem;
    font-size: 1.3888888888888888rem;
    text-align: center;
    color: #fff;
    padding-top: 2.9583333333333335rem;
    padding-left: 6.986111111111111rem;
  }
</style>
