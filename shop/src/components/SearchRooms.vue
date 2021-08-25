<template>

  <div class="choiceDate" v-scrollanimation>
    <div class="choiceDate__date">
      <h2>Cheek in</h2>
      <datepicker placeholder="Select Date" v-model="dateBegin"></datepicker>
    </div>
    <div class="choiceDate__line"></div>
    <div class="choiceDate__date">
      <h2>Cheek out</h2>
      <datepicker placeholder="Select Date" v-model="dateEnd"></datepicker>
    </div>
    <div class="choiceDate__line"></div>
    <SearchRoomsPersonChoice></SearchRoomsPersonChoice>
    <BaseButton class="choiceDate__btn" text="Find room"></BaseButton>
  </div>

</template>


<script>

import Datepicker from "vuejs-datepicker/dist/vuejs-datepicker.esm.js";
import * as lang from "vuejs-datepicker/src/locale";
import BaseButton from "@/components/BaseButton";
import SearchRoomsPersonChoice from "@/components/SearchRoomsPersonChoice";
import {mapGetters, mapActions} from 'vuex'

export default {
  components: {
    BaseButton,
    Datepicker,
    SearchRoomsPersonChoice,
  },
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
      changedMonthLog: []
  }
  },
  computed:{
    ...mapGetters(['getBookingDateBegin','getBookingDateEnd']),
    dateBegin : {
      get () {
        return this.getBookingDateBegin
      },
      set (value) {
        this.bookingDateBegin(value)
      }
    },
    dateEnd : {
      get () {
        return this.getBookingDateEnd
      },
      set (value) {
        this.bookingDateEnd(value)
      }
    },
  },
  methods: {
    logChangedMonth(date) {
      this.changedMonthLog.push(date)
    },
    ...mapActions(['bookingDateEnd','bookingDateBegin']),
  },
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

.before-enter {
  opacity: 0;

  transform: scale(0);
  transition: all 1s ease-in-out;
}

.enter {
  opacity: 1;
  transform: scale(1);
}
</style>