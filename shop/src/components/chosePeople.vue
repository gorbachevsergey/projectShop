<template>

  <div class="chosePeople">
    <div class="chosePeople__text">Person</div>
    <div class="choisePeople__select">
      <vue-multi-select
          v-model="adults"
          :btnLabel="btnLabelAdults"
          :selectOptions="dataAdults"/>
      <vue-multi-select
          v-model="kid"
          :btnLabel="btnLabelKid"
          :selectOptions="dataKid"/>
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
      kid: [],
      dataKid: [
        { name: '0' },
        { name: '1' },
        { name: '2' },
        { name: '3' },
        { name: '4' },
        { name: '5' },
      ],
      dataAdults: [
        { name: '1' },
        { name: '2' },
        { name: '3' },
        { name: '4' },
        { name: '5' },
      ],
    };
  },
  methods: {
  },
  components: {
    Button,
    vueMultiSelect,
  },
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
.choisePeople__select{
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