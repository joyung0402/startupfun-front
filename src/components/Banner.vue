<template>
  <v-col cols="12" sm="12" class="aubnimg">
    <v-row justify="center">
    <v-col cols="12" sm="10">
      <div class="bannertitle" data-aos="fade-in">
    <h1 class="bannertitle1">關於我們</h1>
    <h1 class="bannertitle2">ABOUT US</h1>
  </div>
    </v-col>
  </v-row>
  </v-col>
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
</script>

<style>
.aubnimg{
  background: url(/public/image/autbg.jpg);
  background-size: cover;
  background-position: center;
  height: 350px;
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
</style>
