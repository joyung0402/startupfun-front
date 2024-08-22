<template>
  <v-col cols="12" sm="12" class="my-16">
    <v-row justify="center">
      <v-col cols="12" sm="12">
        <div class="newstitle" data-aos="fade-up">
          <h1 class="newstitle1">精選商家</h1>
          <h1 class="newstitle2">FEATURED STORES</h1>
        </div>
        <v-row class="mt-10">
          <!-- 计算属性用于限制显示数量 -->
          <v-col cols="6" sm="6" md="3" v-for="(popular, i) in limitedPopulars" :key="i" data-aos="fade-up">
            <v-card class="mx-auto card" color="grey-lighten-4" max-width="600" @click="navigateTo(popular.link)">
              <v-img :aspect-ratio="16 / 9" cover :src="popular.image" class="card-img">
              </v-img>
              <v-card-text class="pt-6">
                <div class="text-h6 mb-2 fst">
                  {{ popular.title }}
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <div class="btn mt-16">
          <v-btn class="btn01" to="/stores" data-aos="fade-in">READ MORE</v-btn>
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
export default {
  data () {
    return {
      tab: null,
      model: null,
      rating: 4.5,
      populars: [
        { image: 'image/w800-36.jpg', title: ' 原本生活', link: '/products/66c349fef2568ce3a964ad4d' },
        { image: 'image/w800-24.jpg', title: ' 星辰餐飲設備', link: '/products/66c349fef2568ce3a964ad4d' },
        { image: 'image/w800-28.jpg', title: ' 思維森', link: '/products/66c349fef2568ce3a964ad4d' },
        { image: 'image/w800-15.jpg', title: ' 恒久廚房', link: '/products/66c349fef2568ce3a964ad4d' },
        { image: 'image/w800-22.jpg', title: ' 炫彩餐飲設備', link: '/products/66c349fef2568ce3a964ad4d' },
        { image: 'image/w800-41.jpg', title: ' 大同瓷器', link: '/products/66c349fef2568ce3a964ad4d' },
        { image: 'image/w800-19.jpg', title: ' 盛宴原料', link: '/products/66c349fef2568ce3a964ad4d' },
        { image: 'image/w800-26.jpg', title: ' 靚麗廚具工坊', link: '/products/66c349fef2568ce3a964ad4d' },
        { image: 'image/w800-30.jpg', title: ' 前沿餐飲設施', link: '/products/66c349fef2568ce3a964ad4d' },
        { image: 'image/w800-39.jpg', title: ' 輝煌餐廳家具', link: '/products/66c349fef2568ce3a964ad4d' },
        { image: 'image/w800-35.jpg', title: ' 達達家居', link: '/products/66c349fef2568ce3a964ad4d' },
        { image: 'image/w800-43.jpg', title: ' 寶庫餐桌', link: '/products/66c349fef2568ce3a964ad4d' }
      ],
      isMobile: false, // 新增状态
      isTablet: false // 新增状态
    }
  },
  computed: {
    // 计算属性用于限制在不同设备上显示的商家数量
    limitedPopulars () {
      if (this.isMobile) {
        return this.populars.slice(0, 6)
      } else if (this.isTablet) {
        return this.populars.slice(0, 8)
      } else {
        return this.populars
      }
    }
  },
  methods: {
    navigateTo (path) {
      this.$router.push(path)
    },
    checkScreenSize () {
      const width = window.innerWidth
      this.isMobile = width <= 767
      this.isTablet = width > 767 && width <= 959
    }
  },
  mounted () {
    this.checkScreenSize() // 初始化检查
    window.addEventListener('resize', this.checkScreenSize) // 监听窗口尺寸变化
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.checkScreenSize) // 移除事件监听器
  }
}
</script>

<style>
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
  /* text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); */
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

.btn {
  display: flex;
  justify-content: center;
}

.btn01 {
  background: #ffbc05;
  border-radius: 20px;
  color: white;
  font-weight: 600;
}

.btn01:hover {
  background: #e34e41;
  border-radius: 20px;
  color: white;
  font-weight: 600;
}

.fst {
  font-size: 20px !important;
  color: #2b2b2b;
  font-weight: 600;
}

.fst:hover {
  color: #ffbc05;
}

/* 针对手机设备的样式调整 */
@media (max-width: 767px) {
  .my-16 {
    margin-top: 8px !important;
  }
  .newstitle1 {
    font-size: 34px !important;
  }
  .newstitle2 {
    font-size: 40px !important;
  }
  .newstitle::before {
    bottom: -10px;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .my-16 {
    margin-top: 8px !important;
  }
}
</style>
