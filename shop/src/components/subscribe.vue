<template>
  <div class="subscribe" v-scrollanimation>
    <div class="subscribe__title">STAY IN TOUCH</div>
    <div class="subscribe__text">Join our email. First to know about specials,events and more!</div>
    <div class="subscribe__form" >
      <div :class="['input-group', isEmailValid()]">
        <input type="email" class="form__control" placeholder="Enter your email address" v-model="email" />
      </div>
      <buttonBlue text="Subscribe"></buttonBlue>
    </div>
  </div>

</template>




<script>

import buttonBlue from "@/components/button";

export default {
  data () {
    return{
      email: '',
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    }
  },
  methods: {
    isEmailValid: function() {
      return (this.email === "")? "" : (this.reg.test(this.email)) ? 'hasSuccess' : 'hasError';
    }
  },
  components:{
    buttonBlue
  }

}

</script>




<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Gelasio:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.subscribe{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 140px;
}

.subscribe__title{
  font-family: 'Roboto', serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
}

.subscribe__text{
  font-family: 'Gelasio', serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 45px;
  margin-top: 20px;

}

.subscribe__form{
  display: flex;
  margin-top: 50px;
  height: 54px;
  width: 569px;

}

.form__control{
  width: 430px;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding-left: 30px;

}

.hasSuccess{
  box-shadow: 0 0 10px 2px rgb(17, 91, 147);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.hasError{
  box-shadow: 0 0 10px 2px rgb(147, 17, 67);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.before-enter {
  opacity: 0;
  transform: rotate(180deg);
  transition: all 1s ease-in-out;
}

.enter {
  opacity: 1;
  transform: rotate(0);
}
</style>