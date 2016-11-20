<template>
  <div class="home">
    <Nav></Nav>
    dd
  </div>
</template>

<script>
import Nav from './Nav';

export default {
  name: 'home',
  components: {
    Nav,
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
