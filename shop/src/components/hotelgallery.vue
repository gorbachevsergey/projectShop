<template>
  <div class="hotel__room">
    <div class="rooms">
      <div class="room__about">
        <div class="about__header">About hotel gallery</div>
        <div class="about__text">While some of these examples are real – actually offering guests a stay in the locations advertised – it’s mainly just a way.</div>
        <buttonBlue text="View more"></buttonBlue>
      </div>
      <div v-for="item in rooms" v-bind:key="item.id" class="room">
        <room :name="item.name" :price="item.price" :background="item.background"></room>
      </div>
    </div>

  </div>


</template>




<script>
import room from "@/components/room";
import buttonBlue from "@/components/button";

export default {
  data(){
    return{
      rooms:[
          {
            id: '1',
            name:'Lux: Room',
            price:'$60 night',
            background: '/img/room1.png',
          },
          {
            id: '2',
            name:'Mini Room',
            price:'$70 night',
            background: '/img/room2.png',
          },
          {
            id: '3',
            name:'Stand Room',
            price:'$65 night',
            background: '/img/room3.png',
          },
          {
            id: '4',
            name:'Single Room',
            price:'$55 night',
            background: '/img/room4.png',
          },
          {
            id: '5',
            name:'Elite  Room',
            price:'$65 night',
            background: '/img/room5.png',
          },
      ]
    }
  },
  components:{
    room,
    buttonBlue
  },
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

.room__about{
  height: 337px;
  width: 555px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

}

.about__header{
  font-family: 'Gelasio' , serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 45px;
}

.about__text{
  font-family: 'Roboto' , serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  color: rgba(8, 31, 50, 0.4);
}

</style>
