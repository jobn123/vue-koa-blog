<template>
  <div class="headernav">
    <div class="nav-cricle"></div>
    <ul>
      <li class="active"><router-link to="/">BLOG</router-link><span></span></li>
      <li><router-link to="/tag">TAG</router-link><span></span></li>
      <li><a href="#">PHOTO</a><span></span></li>
      <li><router-link to="/me">ME</router-link><span></span></li>
      <li><router-link to="/write">POST</router-link><span></span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'headernav',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headernav {
  width: 20rem;
  height: 0.734375rem;
}
.nav-cricle {
  width: 0.328125rem;
  height: 0.328125rem;
  border-radius: 0.1640625rem;
  border: 0.046875rem solid #00b2a0;
  margin-left: 0.40625rem;
  margin-top: 0.203125rem;
  float: left;
}
ul {
  float: right;
  height: 0.734375rem;
  list-style: none;
  line-height: 0.734375rem;
  font-size: 0;/**去除inline-block的间隙*/
}
ul > li {
  position: relative;
  /*float: right;*/
  display: inline-block;
  font-size: 0.25rem;
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
  width: 0.390625rem;
  height: 0.027777777777777776rem;
  border: solid 0.5px #fcbb08;
  top: 0.5625rem;
  left: 25%;
}
</style>
