<template>
  <div >

    <headers class="headers"></headers>
    <findRoom class="find-room"></findRoom>
    <slider class="slider"></slider>
  </div>

</template>




<script>

import headers from "./components/header.vue";
import slider from "./components/slider.vue";
import findRoom from "@/components/findRoom";

export default {
  components:{
    headers,
    slider,
    findRoom
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
.headers, .slider{
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
