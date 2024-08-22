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
    <swiper-slide><img class="slideshowimg" src="/public/image/1.png" alt="Slide 1"></swiper-slide>
    <swiper-slide><img class="slideshowimg" src="/public/image/2.png" alt="Slide 2"></swiper-slide>
    <h1 class="ad01">0000000000</h1>
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

/* img{
  width: 100%;
  height: 800px;
  object-fit: cover;
} */

.slide {
  position: relative;
}

.ad01 {
  position: absolute;
  z-index: 999;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
}
</style>
