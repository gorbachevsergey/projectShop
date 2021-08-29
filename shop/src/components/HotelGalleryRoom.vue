<template>

  <div>
    <div class="room" :style="{ backgroundImage: 'url('+ background +')' }">
      <div class="room__choice">
        <div class="room__about">
          <div class="room__name">{{name}}</div>
          <div class="room__price">{{price}}</div>
        </div>
        <BaseButton class="btn" text="Book now"></BaseButton>
      </div>
    </div>
  </div>

</template>




<script>
import BaseButton from "@/components/BaseButton";
export default {
  components:{
    BaseButton,
  },
  props:{
    price:{
      type: String,
      default: 'price no load'
    },
    name:{
      type: String,
      default: 'name no load'
    },
    background:{
      type: String,
      default: 'white',
    }
  }
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
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-end;
  background-repeat: no-repeat;
  background-size: 100%;
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

@media (max-width: 1024px) {
  .room{
    width: 800px;
  }

}
</style>