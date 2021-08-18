<template>

  <div class="about">
    <div class="about__title">
      <div class="title__header">What our client say</div>
      <buttonBlue text="View All"></buttonBlue>
    </div>
    <div class="about__body">
      <div v-for="item in reviews" v-bind:key="item.id" >
        <about :img="item.img" :text="item.text" :name="item.name" :instagram="item.instagram" ></about>
      </div>
    </div>
  </div>

</template>




<script>

import about from "@/components/about";
import buttonBlue from "@/components/button";

export default {
  data(){
    return{
      reviews:[
        {
          id:'1',
          img: require('../image/man1.png'),
          text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ultrices.',
          name: 'David lee',
          instagram: 'davidlee@',
        },
        {
          id:'2',
          img: require('../image/man2.png'),
          text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ultrices.',
          name: 'Ravi shankor',
          instagram: 'ravishankor@',
        },
        {
          id:'3',
          img: require('../image/man1.png'),
          text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ultrices.',
          name: 'Thomas lew',
          instagram: 'thomaslew@',
        },
      ],
    }
  },
  components:{
    buttonBlue,
    about
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

</style>
