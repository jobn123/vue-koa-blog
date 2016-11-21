<template>
  <div id="app">
    <!-- <Home></Home> -->
    <template v-if="$route.matched.length">
     <router-view></router-view>
   </template>
   <template v-else>
     <p>You are logged </p>
   </template>
  </div>
</template>

<script>
import Home from './components/home/Home';

export default {
  name: 'app',
  components: {
    Home,
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
