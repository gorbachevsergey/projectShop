<template>
  <div >
    <headers class="headers"></headers>
    <findRoom class="find-room"></findRoom>
    <slider class="slider"></slider>
    <chooseUs class="choose"></chooseUs>
    <hotelGallery class="hotelGallery"></hotelGallery>
    <aboutUs class="aboutUs"></aboutUs>
    <subscribe class="subscribe"></subscribe>
    <footers class="footers"></footers>
  </div>

</template>




<script>

import headers from "./components/header.vue";
import slider from "./components/slider.vue";
import findRoom from "@/components/findRoom";
import chooseUs from "@/components/chooseUs";
import hotelGallery from "@/components/hotelgallery";
import aboutUs from "@/components/aboutUs";
import subscribe from "@/components/subscribe";
import footers from "@/components/footer";

export default {
  components:{
    headers,
    slider,
    findRoom,
    chooseUs,
    hotelGallery,
    aboutUs,
    subscribe,
    footers
  }
}

</script>




<style>

*{margin:0; padding:0; border:0}
*,
*::before,
*::after {
  box-sizing: border-box;
}
.headers, .slider, .choose, .hotelGallery, .aboutUs, .subscribe, .footers{
  margin: 0 auto;
}
.find-room{
  position: relative;
  z-index: 5;
  top: -25px;
  left: -260px;
  margin: 0 auto;

}
</style>
