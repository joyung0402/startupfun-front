<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :autoplay="{
      delay: 4000, //
      disableOnInteraction: false, // 允许用户交互后继续自动播放
    }"
    :modules="modules"
    class="slide"
  >
    <swiper-slide><img class="slideshowimg" src="/public/image/iss-01.jpg" alt="Slide 1"></swiper-slide>
    <swiper-slide><img class="slideshowimg" src="/public/image/iss-02.jpg" alt="Slide 2"></swiper-slide>
    <v-col cols="10" md="5" id="id-search-bar">
      <h1 id="idst" data-aos="fade-up">創業者的福星<br>最棒的創業夥伴</h1>
      <v-btn
              class="mt-8"
              id="indexsbtn"
              color="primary"
              @click="performSearch"
              to="/stores"
              data-aos="fade-up"
            >
              搜尋
            </v-btn>
      </v-col>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay' // Import autoplay styles

// Import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
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
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Pagination, Navigation, Autoplay]
    }
  }
}
</script>

<style>
.slideshowimg {
  width: 100%;
  height: 700px;
  object-fit: cover;
}

.slide {
  position: relative;
}

#ad01 {
  position: absolute;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#id-search-bar {
  position: absolute;
  z-index: 999;
  top: 50%;
  left: 25%; /* 在电脑版保持距离左侧25% */
  transform: translate(-25%, -50%); /* 调整水平位置 */
  width: 80%; /* 在电脑版设置宽度 */
}

#indexsbtn {
  background: #ffbc05 !important;
  border-radius: 20px;
  font-weight: 600;
  width: 25%;
}

#indexsbtn:hover {
  background: #e34e41 !important;
  border-radius: 20px;
  font-weight: 600;
}

#idst{
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  font-weight: bolder;
  font-size: 64px;
  letter-spacing:5px;
}
/* 响应式布局调整 */
@media (max-width: 1024px) { /* 平板及小屏幕电脑 */
  #id-search-bar {
    width: 70%; /* 平板上稍微减小宽度 */
    left: 50%;
    transform: translate(-50%, -50%); /* 水平和垂直居中 */
  }
  #idst{
  font-size: 48px;
}
}

@media (max-width: 768px) { /* 大小手机 */
  #id-search-bar {
    width: 90%; /* 手机上设置宽度 */
    left: 50%;
    transform: translate(-50%, -50%); /* 水平和垂直居中 */
  }
  #idst{
  font-size: 40px;
}
}

@media (max-width: 480px) { /* 小屏幕手机 */
  #id-search-bar {
    width: 95%; /* 进一步调整宽度以适应小屏幕 */
  }
  #idst{
  font-size: 34px;
}
}

</style>
