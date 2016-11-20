<template>
  <div class="home">
    <Nav></Nav>
    <Banner></Banner>
    <Acticle></Acticle>
  </div>
</template>

<script>
import Nav from './Nav';
import Banner from './Banner';
import Acticle from '../acticle/acticle'

export default {
  name: 'home',
  components: {
    Nav,
    Banner,
    Acticle,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
