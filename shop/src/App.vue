<template>
  <div >
    <headers class="headers"></headers>
    <slider class="slider"></slider>
  </div>

</template>




<script>

import headers from "./components/header.vue";
import slider from "./components/slider.vue"

export default {
  components:{
    headers,
    slider
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

</style>
