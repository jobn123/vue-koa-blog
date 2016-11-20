<template>
  <div class="home">
    <Nav></Nav>
    <Banner></Banner>
  </div>
</template>

<script>
import Nav from './Nav';
import Banner from './Banner';

export default {
  name: 'home',
  components: {
    Nav,
    Banner,
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
