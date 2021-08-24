<template>
  <div class="mainPage">
    <headers  id="Home" class="headers" ></headers>
    <findRoom class="find-room"></findRoom>
    <slider class="slider"></slider>
    <chooseUs id="Features" class="choose"></chooseUs>
    <hotelGallery id="Gallary" class="hotelGallery" ></hotelGallery>
    <aboutUs id="Testimonials" class="aboutUs"></aboutUs>
    <subscribe class="subscribe"></subscribe>
    <footers class="footers"></footers>
  </div>

</template>




<script>

import 'animate.css'
import headers from "./components/header.vue";
import slider from "./components/slider.vue";
import findRoom from "@/components/findRoom";
import chooseUs from "@/components/chooseUs";
import hotelGallery from "@/components/hotelgallery";
import aboutUs from "@/components/aboutUs";
import subscribe from "@/components/subscribe";
import footers from "@/components/footer";
import Vue from "vue";
import VueScrollTo from "vue-scrollto";

export default {
  components: {
    headers,
    slider,
    findRoom,
    chooseUs,
    hotelGallery,
    aboutUs,
    subscribe,
    footers
  },
}

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

</script>

<style>

*{margin:0 auto; padding:0; border:0}
*,
*::before,
*::after {
  box-sizing: border-box;
}


.find-room{
  position: relative;
  z-index: 5;
  top: -25px;
  left: -260px;
  margin: 0 auto;
}

</style>
