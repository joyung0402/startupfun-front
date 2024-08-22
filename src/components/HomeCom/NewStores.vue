<template>
  <v-col cols="12" sm="12" class="my-16 my-sm-8 newsbottom">
    <v-row justify="center">
      <v-col cols="12" sm="12">
        <div class="newstitle" data-aos="fade-up">
          <h1 class="newstitle1">最新商家</h1>
          <h1 class="newstitle2">NEWEST STORES</h1>
        </div>

        <swiper :breakpoints="breakpoints" :spaceBetween="20" :navigation="true" :modules="modules" class="swiper" data-aos="fade-up">
          <swiper-slide>
            <v-card class="mx-auto card" max-width="800" @click="navigateTo('/products/66c349fef2568ce3a964ad4d')">
              <v-img height="200px" src="/public/image/w800-18.jpg" cover></v-img>
              <v-card-title class="fst">盛宴原料</v-card-title>
            </v-card>
          </swiper-slide>
          <swiper-slide>
            <v-card class="mx-auto card" max-width="800" @click="navigateTo('/products/66c349fef2568ce3a964ad4d')">
              <v-img height="200px" src="/public/image/w800-36.jpg" cover></v-img>
              <v-card-title class="fst">原本生活</v-card-title>
            </v-card>
          </swiper-slide>
          <swiper-slide>
            <v-card class="mx-auto card" max-width="800" @click="navigateTo('/products/66c349fef2568ce3a964ad4d')">
              <v-img height="200px" src="/public/image/w800-46.jpg" cover></v-img>
              <v-card-title class="fst">大同瓷器</v-card-title>
            </v-card>
          </swiper-slide>
          <swiper-slide>
            <v-card class="mx-auto card" max-width="800" @click="navigateTo('/products/66c349fef2568ce3a964ad4d')">
              <v-img height="200px" src="/public/image/w800-33.jpg" cover></v-img>
              <v-card-title class="fst">達達家居</v-card-title>
            </v-card>
          </swiper-slide>
          <swiper-slide>
            <v-card class="mx-auto card" max-width="800" @click="navigateTo('/products/66c349fef2568ce3a964ad4d')">
              <v-img height="200px" src="/public/image/w800-28.jpg" cover></v-img>
              <v-card-title class="fst">思維森</v-card-title>
            </v-card>
          </swiper-slide>
          <swiper-slide>
            <v-card class="mx-auto card" max-width="800" @click="navigateTo('/products/66c349fef2568ce3a964ad4d')">
              <v-img height="200px" src="/public/image/w800-44.jpg" cover></v-img>
              <v-card-title class="fst">原本生活</v-card-title>
            </v-card>
          </swiper-slide>
          <swiper-slide>
            <v-card class="mx-auto card" max-width="800" @click="navigateTo('/products/66c349fef2568ce3a964ad4d')">
              <v-img height="200px" src="/public/image/w800-42.jpg" cover></v-img>
              <v-card-title class="fst">大同瓷器</v-card-title>
            </v-card>
          </swiper-slide>
          <swiper-slide>
            <v-card class="mx-auto card" max-width="800" @click="navigateTo('/products/66c349fef2568ce3a964ad4d')">
              <v-img height="200px" src="/public/image/w800-40.jpg" cover></v-img>
              <v-card-title class="fst">達達家居</v-card-title>
            </v-card>
          </swiper-slide>
        </swiper>
      </v-col>
    </v-row>
  </v-col>
</template>

<script setup>
// 引入 swiper
import { useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Pagination } from 'swiper/modules'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'
const router = useRouter()

// 初始化 AOS
onMounted(() => {
  AOS.init({
    duration: 1000, // 动画持续时间
    easing: 'ease-in-out', // 动画效果
    once: true // 是否只触发一次
  })
})

// 將組件放入一個陣列並賦值 modules
const modules = [Navigation, Pagination]

// 設定 breakpoints
const breakpoints = {
  // 針對手機
  320: {
    slidesPerView: 2
  },
  // 針對平板
  768: {
    slidesPerView: 2
  },
  // 針對桌面
  1024: {
    slidesPerView: 4
  }
}

function navigateTo (path) {
  router.push(path)
}
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 110%;
}

.swiper-slide {
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.v-card {
  width: 97%;
}

.newstitle {
  width: 100%;
  height: 80px;
  position: relative;
}

.newstitle::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -20px;
  height: 4px;
  margin-left: -25px;
  width: 50px;
  border-radius: 3px;
  z-index: 2;
  background: #e34e41;
}

.newstitle1 {
  text-align: center;
  width: 100%;
  color: #e34e41;
  font-size: 40px;
  font-weight: 900;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
}

.newstitle2 {
  text-align: center;
  width: 100%;
  font-size: 68px;
  font-weight: 900;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(255, 188, 5, 0.2);
}

.newsbottom {
  margin-bottom: 150px !important;
}

.fst{
  font-size: 20px!important;
  color: #2b2b2b;
  font-weight: 600;
}

.fst:hover{
  color: #ffbc05;
}

/* 響應式邊距 */
@media (max-width: 767px) {
  .my-16 {
    margin-top: 8px !important;
  }
  .newstitle1{
    font-size: 34px;
  }
  .newstitle2{
    font-size: 40px;
  }
  .newstitle::before{
    bottom: -10px;
  }
  .swiper {
  height: 100%;
}
.newsbottom {
  margin-bottom: 64px !important;
}
}

@media (min-width: 768px) and (max-width: 1023px) {
  .my-16 {
    margin-top: 8px !important;
  }
}
</style>
