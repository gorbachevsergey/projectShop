<template>
  <div class="footer" v-scrollanimation>
    <div class="footer__social">
      <div class="nav__logo">
        <img src="~@/image/logo.svg">
      </div>
      <div class="social__text">Travel deals on hotels, flights, vacation packages.</div>
      <div class="social__email">@shovasatkhira88.com</div>
      <div class="social_icon">
        <img src="~@/image/faceb.svg">
        <img src="~@/image/insta.svg">
        <img src="~@/image/twit.svg">
        <img src="~@/image/google.svg">
      </div>
    </div>
    <div class="footer__pages">
      <a class="pages__title">Home</a>
      <a class="title__ref" href="">Accessibility</a>
      <a class="title__ref" href="">Lertifiotion</a>
      <a class="title__ref" href="">Knowledge</a>
    </div>
    <div class="footer__pages">
      <a class="pages__title">Pages</a>
      <a class="title__ref" href="">Blogs</a>
      <a class="title__ref" href="">Careers</a>
      <a class="title__ref" href="">Communing</a>
    </div>
    <div class="subscribe__form" >
      <div class="form__title">SUBSCRIBE</div>
      <div class="form__input">
        <div :class="['input-group', isEmailValid()]">
          <input type="email" class="form__control" placeholder="Enter your email address" v-model="email" />
        </div>
        <BaseButton text="Subscribe"></BaseButton>
      </div>

    </div>
  </div>
</template>




<script>

import BaseButton from "@/components/BaseButton";

export default {
  components:{
    BaseButton
  },
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
}
</script>




<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Gelasio:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.footer{
  display: flex;
  justify-content: space-between;
  margin-top: 124px;
  max-width: 1203px;
  height: 250px;
  margin-bottom: 145px;
}

.footer__social{
  margin-right: 76px;
}
.nav__logo{
  height: 100px;
}

.social__text{
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  width: 257px;
}

.social__email{
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  margin-top: 30px;
}

.social_icon{
  margin-top: 15px;
}

.social_icon img{
  padding-right: 25px;
}

.pages__title{
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 30px;
  margin-left: 0;
  margin-top: 50px;

}

.title__ref{
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
  color: rgba(8, 31, 50, 1);
  margin-bottom: 20px;
  margin-left: 0;
}

.footer__pages{
  display: flex;
  flex-direction: column;
  margin-right: 76px;
}

.form__input{
  display: flex;
  margin-top: 30px;
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

.form__title{
  color: rgba(8, 31, 50, 1);
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
}

.subscribe__form{
  margin-top: 50px;

}
input {outline:none;}

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

@media (max-width: 1024px) {
  .subscribe__form{
    display: none;
  }

  .footer{
    margin: 0;
  }
  .footer__social{
    margin-left: 50px;
  }
}

@media (max-width: 425px) {
  .footer{
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin-top: 50px;
  }

}
</style>