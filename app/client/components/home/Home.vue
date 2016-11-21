<template>
  <div class="home">
    <HeaderNav></HeaderNav>
    <Banner></Banner>
    <Acticle></Acticle>

    <template v-if="$route.matched.length">
     <router-view></router-view>
   </template>
   <template v-else>
     <p>You are logged </p>
   </template>
  </div>
</template>

<script>
import HeaderNav from './Nav';
import Banner from './Banner';
import Acticle from '../acticle/acticle'

export default {
  name: 'home',
  components: {
    HeaderNav,
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
