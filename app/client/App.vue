<template>
  <div id="app">
    <HeaderNav></HeaderNav>
    <template v-if="$route.matched.length">
      <router-view></router-view>
    </template>
    <template v-else>
      <p>You are logged </p>
    </template>
    <HeaderFooter></HeaderFooter>
  </div>
</template>

<script>
import HeaderNav from './components/home/Nav';
import HeaderFooter from './components/common/Footer';

export default {
  name: 'app',
  components: {
    HeaderNav,
    HeaderFooter
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
