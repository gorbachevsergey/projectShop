<template>
  <div class="mainPage">
    <Header id="Home"></Header>
    <SearchRooms class="SearchRooms"></SearchRooms>
    <SliderVideo></SliderVideo>
    <WhyChooseUs id="Features"></WhyChooseUs>
    <HotelGallery id="Gallary"></HotelGallery>
    <ReviewsPeople id="Testimonials"></ReviewsPeople>
    <Subscribe></Subscribe>
    <Footer></Footer>
  </div>
</template>

<script>

import 'animate.css'
import Header from "@/components/Header";
import SliderVideo from "@/components/SliderVideo";
import SearchRooms from "@/components/SearchRooms";
import WhyChooseUs from "@/components/WhyChooseUs";
import HotelGallery from "@/components/HotelGallery";
import ReviewsPeople from "@/components/ReviewsPeople";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import Vue from "vue";
import VueScrollTo from "vue-scrollto";


export default {
  components: {
    Header,
    SliderVideo,
    SearchRooms,
    WhyChooseUs,
    HotelGallery,
    ReviewsPeople,
    Subscribe,
    Footer
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


.SearchRooms{
  position: relative;
  z-index: 5;
  top: -25px;
  left: -260px;
  margin: 0 auto;
}

</style>
