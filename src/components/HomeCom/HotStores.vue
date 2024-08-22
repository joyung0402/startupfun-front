<template>
  <v-col cols="12" class="my-16">
    <v-row justify="center">
      <v-col cols="12">
        <div class="newstitle" data-aos="fade-up">
          <h1 class="newstitle1">熱門商家</h1>
          <h1 class="newstitle2">HOTEST STORES</h1>
        </div>
        <v-row class="mt-10">
          <v-col cols="12" sm="6" md="4" v-for="(card, index) in cards" :key="index" data-aos="fade-up">
            <v-card color="white">
              <v-row no-gutters>
                <v-col cols="6" id="nsta">
                  <v-card-title class="text-h5 text-black fst">
                    {{ card.title }}
                  </v-card-title>
                  <v-card-actions>
                    <v-btn class="ms-2 idnsbtn" size="small" text="READ MORE" variant="outlined" to="/products/66c349fef2568ce3a964ad4d"></v-btn>
                  </v-card-actions>
                </v-col>
                <v-col cols="6" class="pa-3">
                  <v-img :src="card.image" id="img-style"></v-img>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
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
  data: () => ({
    cards: [
      {
        title: '思維森',
        image: 'image/w800-28.jpg'
      },
      {
        title: '盛宴原料',
        image: 'image/w800-20.jpg'
      },
      {
        title: '大同瓷器',
        image: 'image/w800-44.jpg'
      },
      {
        title: '寶庫餐桌',
        image: 'image/w800-41.jpg'
      },
      {
        title: '靚麗廚具工坊',
        image: 'image/w800-29.jpg'
      },
      {
        title: '前沿餐飲設施',
        image: 'image/w800-16.jpg'
      }
    ]
  })
}
</script>

<style scoped>
#img-style {
  width: 100%;
  height: 150px;
  border-radius: 0px 20px 20px 0px!important;
  padding: 20px; /* 讓圖片四周有20px距離 */
  box-sizing: border-box; /* 確保 padding 不會影響圖片的總寬度 */
  object-fit: cover!important;
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

.idnsbtn{
  background: #ffbc05;
  border-radius: 20px;
  color: white;
  font-weight: 600;
  box-shadow: 0px 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 2px 2px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 5px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
  border: none;
}

.idnsbtn:hover {
  background: #e34e41;
  border-radius: 20px;
  color: white;
  font-weight: 600;
}
#nsta{
  margin-top: 20px;
  margin-bottom: 20px;
}

@media (max-width: 767px) {
  .newstitle1 {
    font-size: 34px;
  }
  .newstitle2 {
    font-size: 42px;
  }
  .newstitle::before {
    bottom: -10px;
  }
}
</style>
