<template>
  <div class="chosePeople">
    <div class="chosePeople__text">Person</div>
    <div class="chosePeople__select">
      <vue-multi-select
          v-model="choiceAdults"
          :btnLabel="btnLabelAdults"
          :selectOptions="getListAmountAdult"
          class="select__active"/>
      <vue-multi-select
          v-model="choiceKid"
          :btnLabel="btnLabelKid"
          :selectOptions="getListAmountChildren"
          class="select__active"/>
      </div>
  </div>
</template>

<script>

import vueMultiSelect from 'vue-multi-select';
import 'vue-multi-select/dist/lib/vue-multi-select.css';
import {mapGetters,mapActions} from 'vuex'



export default {
  components: {
    vueMultiSelect,
  },
  data() {
    return {
      btnLabelAdults: values =>values.length > 0 ? values[0].name + ' adults' : 'Adults',
      btnLabelKid: values =>values.length > 0 ? values[0].name + ' kid' : 'Kid',
    };
  },
  computed:{
    ...mapGetters(['getListAmountChildren','getListAmountAdult']),
    choiceAdults: {
      get () {},
      set (value) {
        this.choiceAmountAdults(value)
      }
    },
    choiceKid :{
      get () {},
      set(value) {
        this.choiceAmountChildren(value)
      }
    },
  },
  methods : {
    ...mapActions(['choiceAmountChildren','choiceAmountAdults']),
  }
}

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

.btn-select:hover{
  color: black !important;
}

</style>