<template>
    <v-col cols="12" sm="12" class="snbnimg">
    <v-row justify="center">
    <v-col cols="12" sm="12">
      <div class="bannertitle" data-aos="fade-in">
    <h1 class="bannertitle1">活動快訊</h1>
    <h1 class="bannertitle2">EVENT NEWS</h1>
  </div>
    </v-col>
  </v-row>
  </v-col>
  <div id="snbg">
  <v-container>
    <v-col>
    <v-row>
    <v-col cols="12" md="12">
    <v-row justify="center">
      <v-col cols="12" class="logincard my-16" data-aos="fade-in">
        <h1 class="sntitle" data-aos="fade-up">【免運費優惠】🚚 本月內所有訂單免運費！</h1>
        <v-img
  :width="1920"
  cover
  class="my-16"
  src="/public/image/w800-01.jpg"
  data-aos="fade-up"
></v-img>
<p data-aos="fade-up">
  🎉【免運費優惠】🚚<br>

本月特別驚喜！所有訂單享受免運費服務，不論您購買什麼商品，都能輕鬆免費送到家！<br>

💥 不要錯過這個絕佳機會，立即選購您喜愛的產品，我們將免費為您配送！<br>

⏰ 優惠僅限本月內有效，快來把握！<br>

🔗 現在就去我們的網站選購吧！<br>
</p>
      </v-col>
    </v-row>
  </v-col>
</v-row>
</v-col>
  </v-container>
</div>
<MainFooter></MainFooter>
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'

// 初始化 AOS
onMounted(() => {
  AOS.init({
    duration: 1000, // 动画持续时间
    easing: 'ease-in-out', // 动画效果
    once: true // 是否只触发一次
  })
})
</script>

<style>
.logincard{
  border-radius: 20px!important;
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.2)!important;
  background: white;
  padding: 80px 40px;
}
.snbnimg{
  background: url(/public/image/ntbg.jpg);
  background-size: cover;
  background-position: center;
  height: 200px;
  display: flex;
  align-items: center;
}

.bannertitle{
  width: 100%;
  height: 80px;
    position: relative;
}

.bannertitle::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -20px;
    height: 4px;
    margin-left: -25px;
    width: 50px;
    border-radius: 3px;
    z-index: 2;
    background: #FFF;
}

.bannertitle1{
  text-align: center;
  width: 100%;
  color: #FFF;
    font-size: 40px;
    font-weight: 900;
    position: absolute;
    top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.bannertitle2{
  text-align: center;
  width: 100%;
    font-size: 68px;
    font-weight: 900;
    position: absolute;
    top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(255, 255, 255, 0.2);
}

.loginbtn{
  border-radius: 20px;
  width: 100%;
  color: white!important;
}

.loginbtn:hover{
background: #e34e41!important;
}

#snbg{
  background: url(/public/image/nbg.jpg);
  background-size: cover;
  background-position: top;
  margin-top: -10px;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .my-16 {
    margin-top: 64px !important;
  }
  .sntitle{
    font-size: 24px;
  }
}

@media (max-width: 768px){
  .my-16 {
    margin-top: 32px !important;
    margin-bottom: 32px !important;
  }
  .sntitle{
    font-size: 24px;
  }
}
</style>
