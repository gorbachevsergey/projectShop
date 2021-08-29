<template>

  <div class="choose"  v-scrollanimation>
    <div>
      <div class="choose__header">Why you choose us!</div>
      <div class="choose__text">
        Naturally, it’s becoming even more important
        for hotel and hospitality brands to stand out from the crowd.
        Content marketing remains a key way for hotels to do this.
      </div>
    </div>

    <div class="choose__block" >
      <div class="choose__item" v-for="item in choose" :key="item.id">
        <div class="item__block">
          <div class="block__logo"> <img :src="item.img"> </div>
          <div class="block__header">{{item.header}}</div>
          <div class="block__text">{{item.text}}</div>
        </div>
      </div>
    </div>
  </div>

</template>




<script>

export default {
  data(){
    return{
      choose:[
        {
            id:'1',
            img: require('../image/Easybooking.svg'),
            header: 'Easy booking',
            text:'The booking process should include minimal steps.'
        },
        {
            id:'2',
            img: require('../image/Friendlyinterface.svg'),
            header: 'Friendly interface',
            text:'A hotel booking engine with a good user-friendly.'
        },
        {
            id:'3',
            img: require('../image/Responsibility.svg'),
            header: 'Responsibility',
            text:'You should be able to add rooms to your system.'
          },
        {
            id:'4',
            img: require('../image/Quickordersupply.svg'),
            header: 'Quick order supply',
            text:'The booking process should include minimal steps.'
          },
      ],
    }
  },
}

</script>




<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Gelasio:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.choose{
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  height: 480px;
  margin-top: 560px;
}

.choose__header{
  font-family: 'Gelasio', serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 45px;
  text-align: center;
}

.choose__text{
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  text-align: center;
  margin: 25px auto;
  max-width: 819px;
  height: 58px;
  color: rgba(8, 31, 50, 0.4);
}

.choose__block{
  display: flex;
  margin-top: 60px;
}

.choose__item{
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-right: 30px;
  border-radius: 15px;
}

.item__block{
  height: 262px;
  max-width: 258px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

}

.block__header{
  font-family: 'Gelasio', serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
}

.block__text{
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  height: 58px;
  max-width: 228px;
  color: rgba(8, 31, 50, 0.4);
  text-align: center;

}

.before-enter {
  opacity: 0;
  transform: translateY(-200px);
  transition: all 2s ease-in-out;
}

.enter {
  opacity: 1;
  margin-top: 60px;
  transform: translateY(0);
}

@media (max-width: 1024px) {
  .choose__item{
    margin: 10px;
  }
  .block__text{
    margin: 5px;
  }
}

@media (max-width: 425px) {
  .choose__block{
    flex-wrap: wrap;
    justify-content: center;
  }
  .choose{
    height: 100%;
  }

}
</style>
