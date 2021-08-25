<template>
  <div class="header">
    <div class="header__nav">
      <div class="nav__logo"></div>
      <ul v-for="(item,index) in getListLinks" v-bind:key="index">
        <a
            :class="{active:item === selected }"
            v-scroll-to="`#${item}`"
            @click="selected = item"
        >
          {{item}}
        </a>
      </ul>
      <BaseButton class="header__btn" text = ".l." ></BaseButton>
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
  width: 1600px;
  height: 690px;
  background-image: url("~@/image/headerBackground.png");
}

.header__nav{
  display: flex;

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
  padding-left: 40px;
  color: rgba(8, 31, 50, 1);
  transition: .3s;
  align-items: center
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
  background-image: url("~@/image/logo.svg");
  height: 144px;
  width: 186px;
  margin-left: 220px;
  margin-right: 115px;
}

.header__text{
  height: 136px;
  width: 456px;
  margin-left: 227px;
  margin-top: 100px;
}

.header__text h2{
  color: rgba(27, 117, 187, 1);
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0.1em;

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
  margin-top: 35px;
  word-wrap:break-word;
  width: 350px;
}

.text__btn{
  margin-top: 30px;

}

.header__btn{
  margin-left: 331px;
  margin-top: 35px;
}

.text__blue{
  color: rgba(27, 117, 187, 1);
}


</style>
