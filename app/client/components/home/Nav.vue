<template>
  <div class="nav">
    <div class="nav-cricle"></div>
    <ul>
      <li class="active"><a href="#">HOME</a><span></span></li>
      <li><a href="#">BLOG</a><span></span></li>
      <li><a href="#">ME</a><span></span></li>
      <li><a href="#">TAG</a><span></span></li>
      <li><a href="#">HOME</a><span></span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  width: 20rem;
  height: 1.3055555555555556rem;
}
.nav-cricle {
  width: 0.5833333333333334rem;
  height: 0.5833333333333334rem;
  border-radius: 0.2916666666666667rem;
  border: 0.08333333333333333rem solid #00b2a0;
  margin-left: 0.7222222222222222rem;
  margin-top: 0.3611111111111111rem;
  float: left;
}
ul {
  float: right;
  height: 1.3055555555555556rem;
  list-style: none;
  line-height: 1.3055555555555556rem;
  font-size: 0;/**去除inline-block的间隙*/
}
ul > li {
  position: relative;
  /*float: right;*/
  display: inline-block;
  font-size: 0.3888888888888889rem;
  margin-right: 0.6944444444444444rem;
}
ul > li > a {
  float: right;
  text-decoration: none;
  color: #373a39;
}
.active span {
  display: inline-block;
  position: absolute;
  width: 0.6944444444444444rem;
  height: 0.027777777777777776rem;
  border: solid 0.5px #fcbb08;
  top: 1rem;
  left: 25%;
}
</style>
