<template>
  <div class="write">
    <VueMarkdown></VueMarkdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'write',
  components: {
    VueMarkdown,
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
