<template>
  <div :class="{ active : isActive }" class="abouts" @click=" isActive = !isActive">
    <div class="abouts__foto">
      <img :src="img">
    </div>
    <div class="abouts__quotes">
      <img src="~@/image/quotes.svg">
    </div>
    <div class="abouts__text">{{text}}</div>
    <div class="abouts__name">{{name}}</div>
    <div class="abouts__instagram">{{instagram}}</div>
  </div>

</template>




<script>

export default {
  props:{
    img:{
      type: String,
      default: 'photo no load'
    },
    text:{
      type: String,
      default: 'text no load'
    },
    name:{
      type: String,
      default: 'name no load'
    },
    instagram:{
      type: String,
      default: 'instagram no load'
    }
  },
  data(){
    return{
      isActive: false,
    }
  },

}

</script>




<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gelasio:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.abouts{
  height: 325px;
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;

}

.abouts__foto{
  margin-top: 28px;
}

.abouts__quotes{
  align-self: start;
  margin-left: 39px;
}

.abouts__text{
  width: 300px;
  text-align: center;
  font-family: 'Roboto', serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;


}

.abouts__name{
  margin-top: 30px;
  font-family: 'Gelasio', serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;


}

.abouts__instagram{

  font-family: 'Roboto', serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;


}
.active{
  box-shadow: 0 0 10px 2px rgb(17, 91, 147);
  border: 1px solid rgba(0, 0, 0, 0.1);

}
</style>
