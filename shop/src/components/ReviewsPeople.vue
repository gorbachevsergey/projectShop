<template>

  <div class="about" v-scrollanimation>
    <div class="about__title">
      <div class="title__header">What our client say</div>
      <BaseButton text="View All" @click.native="listReviewsMore"></BaseButton>
    </div>
    <div class="about__body">
        <div v-for="item in listReviewsLength" :key="item.id" >
          <ReviewsPeopleItem
              class="animate__animated animate__fadeInUp"
              :img="item.img"
              :text="item.text"
              :name="item.name"
              :instagram="item.instagram"
          >
          </ReviewsPeopleItem>
        </div>
    </div>
  </div>

</template>




<script>

import ReviewsPeopleItem from "@/components/ReviewsPeopleItem";
import BaseButton from "@/components/BaseButton";
import {mapGetters} from 'vuex'

export default {
  components:{
    BaseButton,
    ReviewsPeopleItem
  },
  data(){
    return{
      listReviewsLen : 3,
    }
  },
  computed:{
    ...mapGetters(['getListReviews']),
    listReviewsLength () {
      return this.getListReviews.slice(0,this.listReviewsLen)
    },
  },
  methods:{
    listReviewsMore (){
      this.listReviewsLen += 3
    }
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
