<template>
  <div class="home">
    <Banner></Banner>
    <Acticle></Acticle>
  </div>
</template>

<script>
import Banner from './Banner';
import Acticle from '../acticle/acticle'

export default {
  name: 'home',
  components: {
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
