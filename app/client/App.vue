<template>
  <div id="app">
    <Home></Home>
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
