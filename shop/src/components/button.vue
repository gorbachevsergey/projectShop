<template>
  <div>
  <div class="button">{{text}}</div>
  </div>

</template>

<script>

export default {
  props:['text']
}

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Gelasio:wght@500&display=swap');

.button{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  width: 134px;
  background-color: rgba(27, 117, 187, 1);
  color: white;
  font-family: 'Gelasio', serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  border-radius: 5px;
  transition: .3s;
}

.button:hover{
  background-color: rgb(32, 132, 208);
  box-shadow: 5px 3px 4px 2px rgb(41, 146, 225)
}

.button:active{
  background-color: rgb(24, 98, 154);
  box-shadow: 5px 3px 4px 2px rgb(17, 91, 147);
}
</style>