<template>
  <div class="slider" v-scrollanimation>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="video in listVideo" :key="video.id">
        <iframe :src=video.url title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="slider__text" @click="next">
      <h2>DREAM HOLIDAYS</h2>
      <p>Enjoy unforgettable experiences in dream hotels.</p>
      <BaseButton type="button" class="text__btn" text="View more"></BaseButton>
    </div>
  </div>

</template>

<script>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import BaseButton from "@/components/BaseButton";

export default {
  name: 'swiper-example-multiple-slides-per-biew',
  title: 'Multiple slides per view',
  components: {
    Swiper,
    SwiperSlide,
    BaseButton,
  },
  data() {
    return {
      listVideo:[
        {
          id : 0,
          url: 'https://www.youtube.com/embed/Kbtozdlxrcg'
        },
        {
          id : 1,
          url: 'https://www.youtube.com/embed/WkbtvG4DKto'
        },
        {
          id : 2,
          url: 'https://www.youtube.com/embed/DnMxLSccXEg'
        }
        ],
      swiperOption: {
        slideToClickedSlide:true,
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 5000,
        },
      }
    }
  },
  methods: {
    next: function (){
      return this.swiper.navigation.nextEl
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gelasio:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.slider{
  display: flex;
  max-width: 1600px;
  padding: 100px 0 0 127px;
  margin-top: 200px;
}

.slider__text{
  width: 430px;
  height: 222px;
  margin-left: 100px;
  margin-top: 100px;
}

.slider__text h2{
  color: rgba(27, 117, 187, 1);
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
}

.slider__text p{
  font-family: 'Gelasio', serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 45px;
  color: rgba(8, 31, 50, 1);
  margin-top: 15px;
}

.text__btn{
  margin-top: 31px;
  margin-left: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
}

.swiper{
  height: 450px;
  width: 730px;
  margin: 0;
  padding-top: 60px ;

}

.swiper-slide-next{
  z-index: -1;
  left: -540px;
  bottom: 60px;
  opacity: 0.8;
}


.swiper-slide-next iframe{
  height: 268px;
  width: 484px;
}

iframe{
  height: 325px;
  width: 630px;
  border-radius: 15px;
}

.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2.5s ease-in-out;
}

.enter {
  transform: translateY(0);
  margin-top: 0;
  opacity: 1;

}

@media (max-width: 1024px) {
  .swiper-slide-next{
    z-index: 0;
    left: 0;
    bottom: 0;
    opacity: 0;
  }
  iframe{
    height: 325px;
    width: 500px;
    border-radius: 15px;
  }
}
@media (max-width: 425px) {
  .slider{
    flex-direction: column;
    padding: 0;

  }
  .swiper-container{
    padding: 0;
  }
  iframe{
    width: 400px;
    height: 250px;
  }
  .swiper-slide{
    width: 425px !important;
  }
  .slider__text{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
  }
  .swiper-pagination{
    width: 425px;
  }
  .swiper{
    width: 100%;
    height: 300px;
    margin-left: 15px;
  }

  .slider__text p{
    font-size: 25px;
    padding: 15px;
    font-weight: 300;
    line-height: 25px;

  }
  .text__btn{
    margin: 0 auto;
  }
}

</style>