<template>
  <AllCompaniesBanner></AllCompaniesBanner>
<div id="sbg">
  <v-container>
    <AllCompanies></AllCompanies>
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
#sbg{
  background: url(/public/image/sbg.jpg);
  background-size: cover;
  background-position: top;
}
</style>
