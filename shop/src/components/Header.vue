<template>
  <div class="header">
    <div class="header__nav">
      <div class="nav__logo">
        <img src="/img/logo.svg">
      </div>
      <ul v-for="(item,index) in getListLinks" v-bind:key="index">
        <a
            :class="{active:item === selected }"
            v-scroll-to="`#${item}`"
            @click="selected = item"
        >
          {{item}}
        </a>
      </ul>
      <BaseButton class="header__btn" text = "Book Now" ></BaseButton>
    </div>
    <div class="header__text">
      <h2>SERENITY</h2>
      <h3>Stay with us feel like <span class="text__blue">home</span>.</h3>
      <p>Pet-friendly hotels are becoming increasingly popular; appealing to travellers who can’t bear to be parted.</p>
      <BaseButton class="text__btn" text="Read more"></BaseButton>
    </div>
  </div>
</template>

<script>

import BaseButton from "@/components/BaseButton";
import {mapGetters} from 'vuex'

export default {
  components:{
    BaseButton,
  },
  data() {
    return{
      selected:[],
    }
  },
  computed:{
    ...mapGetters(['getListLinks'])

  }
}

</script>




<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gelasio:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');


.header{
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  height: 690px;
  background-image: url("~@/image/headerBackground.png");

}

.header__nav{
  display: flex;
  width: 100%;



}

ul{
  display: inline-flex;
  align-items: center;
}

a{
  list-style-type: none;
  font-family: 'Gelasio', serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  color: rgba(8, 31, 50, 1);
  transition: .3s;
  align-items: center;
  cursor: pointer;
}

a.active{
  color: rgba(27, 117, 187, 1);
}

a:hover{
  text-shadow: 5px 3px 4px black;
}

.active:hover{
  color: rgb(18, 95, 154);
  text-shadow: 5px 3px 4px rgb(41, 146, 225)
}

.nav__logo{
  width: 186px;
  height: 136px;
  margin-left: 208px;
}

.header__text{
  height: 136px;
  width: 456px;
  margin-left: 227px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.header__text h2{
  color: rgba(27, 117, 187, 1);
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0.1em;
  margin: 0;

}

.header__text h3{
  font-family: 'Gelasio', serif;
  font-size: 57px;
  font-style: normal;
  font-weight: 600;
  line-height: 68px;
  color: #081F32;
  margin-top: 15px;
}

.header__text p{
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  color: rgba(8, 31, 50, 1);
  opacity: 0.6;
  word-wrap:break-word;
  width: 350px;
  margin: 35px 0 0 0;
}

.text__btn{
  margin: 30px 0 0 0;


}

.header__btn{
  margin-top: 35px;
  margin-right: 230px;

}

.text__blue{
  color: rgba(27, 117, 187, 1);
}

@media (max-width: 1600px) {
  .nav__logo{
    margin-left: calc(10px + (208 - 20) * ((100vw - 320px) / (1600 - 320)));
  }
  .header__btn{
    margin-right: calc(10px + (230 - 20) * ((100vw - 320px) / (1600 - 320)));

  }
}
</style>
