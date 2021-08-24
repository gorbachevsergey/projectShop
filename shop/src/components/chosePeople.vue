<template>
  <div class="chosePeople">
    <div class="chosePeople__text">Person</div>
    <div class="chosePeople__select">
      <vue-multi-select
          v-model="choiceAdults"
          :btnLabel="btnLabelAdults"
          :selectOptions="this.$store.state.dataAdults"/>
      <vue-multi-select
          v-model="choiceKid"
          :btnLabel="btnLabelKid"
          :selectOptions="this.$store.state.dataKid"/>
      </div>
  </div>
</template>

<script>

import vueMultiSelect from 'vue-multi-select';
import 'vue-multi-select/dist/lib/vue-multi-select.css';
import Button from "@/components/button";



export default {
  data() {
    return {
      btnLabelAdults: values =>values.length > 0 ? values[0].name + ' adults' : 'Adults',
      btnLabelKid: values =>values.length > 0 ? values[0].name + ' kid' : 'Kid',
      adults: [],
      kid:[],
    };
  },
  components: {
    Button,
    vueMultiSelect,
  },
  computed:{
    choiceAdults: {
      get () {
        return this.$store.state.adults
      },
      set (value){
        this.$store.commit('choiceAdults',value)
      }
    },
    choiceKid :{
      get () {
        return this.$store.state.kids
      },
      set(value) {
        this.$store.commit('choiceKids',value)
      }
    }
  }
};

</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.chosePeople{

  height: 62px;
  width: 100px;
  display: flex;
  flex-direction: column;
}
.chosePeople__select{
  display: flex;
  flex-direction: row;
}
.selectList{
  flex-direction: column;
}

.select > button {
  border: none !important;
  padding: 0 8px 0 0 !important;
}

.select .caret{
  display: none !important;

}
.select button{
  background: none !important;
}

input{
  width: 100px;
}

.chosePeople__text{
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  text-align: left;

}
</style>