<template>
  <div>

    <div class="room" :style="{ backgroundImage: 'url('+ background +')' }">
      <div class="room__choice">
        <div class="room__about">
          <div class="room__name">{{name}}</div>
          <div class="room__price">{{price}}</div>
        </div>
        <buttonBlue class="btn" text="Book now"></buttonBlue>
      </div>
    </div>
  </div>

</template>




<script>
import buttonBlue from "@/components/button";
export default {
  data(){
    return{
    }
  },
  components:{
    buttonBlue,
  },
  props:['price','name','background']
}

</script>




<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Gelasio:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');


.room {
  height: 337px;
  width: 555px;
  display: flex;
  align-items: flex-end;
}

.room__about, .btn{
  margin-left: 28px;
}

.room__about{
  margin-bottom: 10px;
  display: inline-flex;
}

.room__name{
  font-family: 'Gelasio', serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 29px;


}

.room__price{
  font-family: 'Roboto' ,serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  margin-left: 25px;
}

.room__choice{
  width: 231px;
  height: 126px;
  display: flex;
  background-color:rgba(255, 255, 255, 0.21);
  backdrop-filter: blur(4px);
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
}

</style>