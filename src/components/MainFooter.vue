<template>
  <v-footer
    class="text-center d-flex flex-column pt-16"
  >
  <div>
    <v-img
  :width="200"
  cover
  src="/public/image/logo.png"
  data-aos="fade-up"
></v-img>
  </div>
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4 pt-8"
        variant="text"
        data-aos="fade-up"
      ></v-btn>
    </div>

    <div class="py-8" data-aos="fade-up">
      <p class="fttext">公司地址｜新北市三重區重新路2段42之7號3樓</p>

<p class="fttext">電子郵件｜startupfun0104@gmail.com</p>

<p class="fttext">聯絡時間｜週一 至 週日 10:00 – 19:00</p>

<p class="fttext">聯絡電話｜0936-157-532&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;統一編號｜94092832</p>
</div>

    <v-divider></v-divider>

    <div class="py-8" data-aos="fade-up">
    <strong>© All rights reserved by 創業趣 </strong>{{ new Date().getFullYear() }}
    </div>
  </v-footer>
</template>
<script>
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
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-instagram'
    ]
  })
}
</script>

<style>
.v-card--flat {
    box-shadow: none !important;
    background: #ffbc05!important;
}
.v-footer{
  background: #ffbc05!important;
}
.fttext{
  font-size: 16px;
  font-weight: 600;
  line-height: 2;
}
</style>
