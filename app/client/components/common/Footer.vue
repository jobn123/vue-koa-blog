<template>
  <div class="headerfooter">
    <div class="footerTop">
      <div class="footerCricle"></div>
      <div class="footerLine"></div>
      <p>
        @copyrights 滚粗
      </p>
      <div class="footer-arrow">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerfooter',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .headerfooter {
   /*width: 20rem;
   height: 5.09375rem*/
 }
 .footerTop {
   position: relative;
   width: 20rem;
   height: 3rem;
   background-color: #373a39;
 }
 .footerCricle {
   position: absolute;
   width: 0.328125rem;
   height: 0.328125rem;
   border-radius: 0.1640625rem;
   border: 0.046875rem solid #00b2a0;
   top: 0.5rem;
   left: 9.708333333333329rem;
 }
 .footerLine {
   position: absolute;
   top: 1.175rem;
   left: 8.858333333332941rem;
   width: 2.083333333333242rem;
   height: 0.015625rem;
   border: solid 1px #fcbb08;
 }
 .footerTop p{
   position: absolute;
   font-size: 0.21875rem;
   color: #a8a8a8;
   top: 1.5rem;
   left: 9.05rem;
 }
 .footer-arrow {
   position: absolute;
   width: 0.23rem;
   height: 0.078125rem;
   background: url('../../assets/Shape.png');
   background-size: 0.23rem 0.078125rem;
   top: 2.24rem;
   left: 9.78rem;
 }
</style>
