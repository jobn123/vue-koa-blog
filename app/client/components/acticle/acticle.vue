<template>
  <div class="acticle">
    <div class="title">
      {{title}}
      <span></span>
    </div>
    <div class="content">
      {{msg}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'acticle',
  data() {
    return {
      title: 'About Me',
      msg:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .acticle {
    position: relative;
    width: 20rem;
    height: 3.8359375rem;
    background-color: #f6f8fa;
  }
  .title {
    position: absolute;
    top: 1.09375rem;
    left: 1.9rem;
    width: 5.56rem;
    /*height: 3.8359375rem;*/
    font-size: 0.46875rem;
  }
  .title span {
    position: absolute;
    display: block;
    width: 0.46875rem;
    height: 0.03125rem;
    background-color: #fcbb08;
  }
  .content {
    position: absolute;
    top: 1.1875rem;
    left: 7.416666666342187rem;
    font-size: 0.21875rem;
    width: 10.7rem;
    height: 2.499999999890625rem;
  }
</style>
