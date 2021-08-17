<template>

  <div class="choiceDate">
    <div class="choiceDate__date">
      <h2>Cheek in</h2>
      <datepicker placeholder="Select Date" v-model="vModelExample"></datepicker>
    </div>
    <div class="choiceDate__line"></div>
    <div class="choiceDate__date">
      <h2>Cheek out</h2>
      <datepicker placeholder="Select Date" v-model="vModelDate"></datepicker>
    </div>
    <div class="choiceDate__line"></div>
    <chosePeople></chosePeople>
    <buttonBlue class="choiceDate__btn" text="Find room"></buttonBlue>
  </div>

</template>








<script>
import Datepicker from "vuejs-datepicker/dist/vuejs-datepicker.esm.js";
import * as lang from "vuejs-datepicker/src/locale";
import buttonBlue from "@/components/button";
import chosePeople from "@/components/chosePeople";


export default {
  data() {
    return {
      format: "d MMMM yyyy",
      disabledDates: {},
      disabledFn: {
        customPredictor(date) {
          if (date.getDate() % 3 === 0) {
            return true;
          }
        }
      },
      highlightedFn: {
        customPredictor(date) {
          if (date.getDate() % 4 === 0) {
            return true;
          }
        }
      },
      highlighted: {},
      eventMsg: null,
      language: "en",
      languages: lang,
      vModelExample: null,
      vModelDate:null,
      changedMonthLog: []
  }
  },
  components: {
    buttonBlue,
    Datepicker,
    chosePeople
  },
  methods: {
    logChangedMonth(date) {
      this.changedMonthLog.push(date)
    }
  }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
.choiceDate{
  width: 687px;
  height: 110px;
  background-color:rgba(255, 255, 255, 0.21);
  backdrop-filter: blur(70px);
  display: flex;
  align-items: center;
  border-radius: 15px;

}

h2{
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  text-align: left;
  margin-bottom: 7px;
}

.choiceDate__date{
  height: 62px;
  width: 88px;
  margin-left: 30px;
  margin-right: 30px;

}

.choiceDate__line{
  width: 1px;
  height: 34px;
  background-color: rgba(157, 172, 184, 1);
}
.chosePeople{
  margin-left: 30px;
}
.choiceDate__btn{
  margin-left: 60px;

}
</style>