<template>
  <div class="hotel__room" v-scrollanimation>
    <div class="rooms">
      <div class="room__about">
        <div class="about__header">About hotel gallery</div>
        <div class="about__text">While some of these examples are real – actually offering guests a stay in the locations advertised – it’s mainly just a way.</div>
        <buttonBlue class="btn" text="View more"></buttonBlue>
      </div>
      <div v-for="item in this.baseRoom" v-bind:key="item.id" class="room">
        <room :name="item.name" :price="item.price" :background="item.background"></room>
      </div>
    </div>

  </div>


</template>




<script>
import room from "@/components/room";
import buttonBlue from "@/components/button";
import {mapGetters} from 'vuex'


export default {
  components:{
    room,
    buttonBlue
  },
  computed:{
    ...mapGetters(['baseRoom'])
  }
}

</script>




<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gelasio:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.hotel__room{
  width: 1140px;
  margin-top: 140px;
}
.room{
  margin-bottom: 37px;

}

.rooms{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.btn{
  display: flex;
  margin-left: 28px;

}
.room__about{
  height: 337px;
  width: 555px;
  display: flex;
  flex-direction: column;


}

.about__header{
  font-family: 'Gelasio' , serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 45px;
  margin-top: 40px;
}

.about__text{
  font-family: 'Roboto' , serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  color: rgba(8, 31, 50, 0.4);
  margin: 50px 25px 45px 25px;
}

.before-enter {
  opacity: 0;
  transform: translateY(200px);
  transition: all 2s ease-in-out;
}

.enter {
  opacity: 1;
  transform: translateY(0);
}
</style>
