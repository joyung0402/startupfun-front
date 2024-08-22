<template>
  <v-col cols="12" sm="12" class="my-16 newsbottom">
    <v-row justify="center">
      <v-col cols="12" sm="12">
        <div class="newstitle" data-aos="fade-up">
          <h1 class="newstitle1">客戶評價</h1>
          <h1 class="newstitle2">CUSTOMER REVIEWS</h1>
        </div>

        <swiper
          :slidesPerView="slidesPerView"
          :spaceBetween="20"
          :navigation="true"
          :pagination="{ clickable: true }"
          :modules="modules"
          class="swiper"
          :breakpoints="breakpoints"
          data-aos="fade-up"
        >
  <swiper-slide v-for="(review, index) in reviews" :key="index">
    <v-card
      class="mx-auto"
      :prepend-avatar="require(`@/assets/${review.avatar}`)"
      :subtitle="review.subtitle"
      :title="review.title"
    >
      <v-card-text class="review-text">
        {{ getLimitedText(review.text) }}
      </v-card-text>
    </v-card>
  </swiper-slide>
        </swiper>
      </v-col>
    </v-row>
  </v-col>
</template>

<script setup>
// 引入 swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
// 引進 swiper 與其組件的 CSS
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// 引入 swiper 組件
import { Navigation, Pagination } from 'swiper/modules'
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

// 將組件放入一個陣列並賦值 modules
const modules = [Navigation, Pagination]

// Swiper breakpoints configuration
const breakpoints = {
  320: { // Mobile view
    slidesPerView: 1,
    spaceBetween: 10
  },
  768: { // Tablet view
    slidesPerView: 2,
    spaceBetween: 20
  },
  1024: { // Desktop view
    slidesPerView: 2,
    spaceBetween: 20
  }
}

// For simplicity, using static reviews data
const reviews = [
  {
    text: '整體體驗非常滿意！從選擇到下單，再到配送和安裝，每一步都無比順利。平台的界面友善且易於操作，產品分類清晰，讓我能快速找到所需的設備。產品的描述詳細，圖片高清，幫我做出了明智的選擇。客服人員的回應也非常及時且專業，他們提供了有價值的建議，幫我解決了不少疑問。',
    avatar: '/public/image/person01.png',
    subtitle: '2024.08.20',
    title: '大村武居酒屋'
  },
  {
    text: '配送方面，服務也很出色。我的訂單在預定時間內準時送達，而且設備包裝非常仔細，完好無損。安裝團隊的專業程度也讓我印象深刻，工作效率高且態度友好，確保每一項設備都按預期安裝好。[創業趣]的優質服務和高效的物流系統令我非常滿意，未來我一定會繼續在這裡選購餐飲設備。強烈推薦給大家！',
    avatar: '/public/image/person02.png',
    subtitle: '2024.08.18',
    title: '浙川園川味料理'
  },
  {
    text: '整體體驗非常滿意！從選擇到下單，再到配送和安裝，每一步都無比順利。平台的界面友善且易於操作，產品分類清晰，讓我能快速找到所需的設備。產品的描述詳細，圖片高清，幫我做出了明智的選擇。客服人員的回應也非常及時且專業，他們提供了有價值的建議，幫我解決了不少疑問。',
    avatar: '/public/image/person01.png',
    subtitle: '2024.08.20',
    title: '大村武居酒屋'
  },
  {
    text: '配送方面，服務也很出色。我的訂單在預定時間內準時送達，而且設備包裝非常仔細，完好無損。安裝團隊的專業程度也讓我印象深刻，工作效率高且態度友好，確保每一項設備都按預期安裝好。[創業趣]的優質服務和高效的物流系統令我非常滿意，未來我一定會繼續在這裡選購餐飲設備。強烈推薦給大家！',
    avatar: '/public/image/person02.png',
    subtitle: '2024.08.18',
    title: '浙川園川味料理'
  }
  // 添加更多 review 物件
]

// 函數限制文本為五行
function getLimitedText (text) {
  const lines = text.split('\n')
  return lines.slice(0, 5).join('\n') + (lines.length > 5 ? '...' : '')
}
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 110%;
}

.swiper-slide {
  font-size: 16px; /* 內文字體設為16px */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 10%;
  height: 100%;
  object-fit: cover;
}

.v-card {
  width: 100%;
  padding: 16px; /* 調整間距 */
  margin: 10px 0; /* 調整上下距離 */
}

.review-text {
  font-size: 16px; /* 內文字體設為16px */
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
  margin-bottom: 200px !important;
  margin-top: 120px !important;
}

/* 響應式邊距 */
@media (max-width: 767px) {
  .my-16 {
    margin-top: 8px !important;
    margin-bottom: 64px !important;
  }
  .newstitle1 {
    font-size: 34px;
  }
  .newstitle2 {
    font-size: 40px;
  }
  .newstitle::before {
    bottom: -10px;
  }
  .swiper {
    height: 100%;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .my-16 {
    margin-top: 8px !important;
    margin-bottom: 64px !important;
  }
}
</style>
