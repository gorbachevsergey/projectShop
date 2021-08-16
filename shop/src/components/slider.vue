<template>
  <div class="slider">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <iframe src="https://www.youtube.com/embed/Kbtozdlxrcg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </swiper-slide>
      <swiper-slide>
        <iframe src="https://www.youtube.com/embed/WkbtvG4DKto" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </swiper-slide>
      <swiper-slide>
        <iframe src="https://www.youtube.com/embed/DnMxLSccXEg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="slider__text">
      <h2>DREAM HOLIDAYS</h2>
      <p>Enjoy unforgettable experiences in dream hotels.</p>
      <button-blue class="text__btn" text="View more"></button-blue>
    </div>
  </div>

</template>

<script>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import buttonBlue from "@/components/button";

export default {
  name: 'swiper-example-multiple-slides-per-biew',
  title: 'Multiple slides per view',
  components: {
    Swiper,
    SwiperSlide,
    buttonBlue
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,


        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gelasio:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.slider{
  display: flex;
  width: 1600px;
  padding: 200px 0 0 127px;
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
}

.swiper{
  height: 450px;
  width: 730px;
  margin: 0;
  padding-top: 60px ;

}

.swiper-slide-next{
  z-index: -1;
  left: -500px;
  bottom: 50px;
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

</style>