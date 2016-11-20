<template>
  <div class="banner">
    <h1>GOTCHA、</h1>
    <p> NEVER SAY DIE</p>
    <div class="cursor">
      <span></span>
    </div>
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
    height: 5.140625rem;
    background: url('../../assets/header-bg@2x.png');
    background-size: 20rem 5.140625rem;
  }
  .banner h1 {
    width: 3.390625rem;
    height: 0.953125rem;
    font-size: 0.78125rem;
    text-align: center;
    color: #fff;
    padding-top: 1.6640625rem;
    padding-left: 8.2rem;
  }
  .banner p {
    font-size: 0.1875rem;
  	letter-spacing: 0.021875rem;
  	text-align: center;
  	color: #fcbb08;
    padding-top: 1.3rem
  }
  .banner .cursor {
    position: absolute;
    width: 0.203125rem;
    height: 0.3359375rem;
    border: solid 1px #ffffff;
    border-radius: 0.78125rem;
    left: 49%;
    bottom: 0.46875rem;
  }
  .banner .cursor span {
    position: absolute;
    width: 0.046875rem;
    height: 0.046875rem;
    border-radius: 0.0234375rem;
    background-color: #fff;
    top: 0.078125rem;
    left: 0.058125rem;
  }
</style>
