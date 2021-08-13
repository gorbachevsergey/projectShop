<template>
  <div >
    <headers class="headers"></headers>
  </div>

</template>




<script>

import headers from "./components/header.vue";

export default {
  components:{
    headers
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
.headers{
  margin: 0 auto;
}

</style>
