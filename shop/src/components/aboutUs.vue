<template>

  <div class="about" v-scrollanimation>
    <div class="about__title">
      <div class="title__header">What our client say</div>
      <buttonBlue text="View All" @click.native="len += 3"></buttonBlue>
    </div>
    <div class="about__body">

        <div v-for="item in this.reviews.slice(0,len)" v-bind:key="item.id" >
          <about class="animate__animated animate__fadeInUp" :img="item.img" :text="item.text" :name="item.name" :instagram="item.instagram" ></about>
        </div>


    </div>
  </div>

</template>




<script>

import about from "@/components/about";
import buttonBlue from "@/components/button";
import {mapGetters} from 'vuex'

export default {
  data(){
    return{
      len : 3,
    }
  },
  components:{
    buttonBlue,
    about
  },
  computed:{
    ...mapGetters(['reviews'])
  }
}

</script>




<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Gelasio:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.about{
  width: 1140px;
  margin-top: 140px;
}

.about__body{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap
}

.about__title{
  display: flex;
  justify-content: space-between;
}
.title__header{
  font-family: 'Gelasio' , serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 45px;
}
.before-enter {
  opacity: 0;
  transform: scale(0.0) translateX(-2000px);
  transition: all 2s ease-in-out;
}

.enter {
  opacity: 1;
  transform: scale(1,1) translateX(0);
}
</style>
