<template>
  <v-col cols="12" sm="12" class="my-16">
    <v-row justify="center">
      <v-col cols="12" sm="12">
        <div class="newstitle" data-aos="fade-up">
          <h1 class="newstitle1">服務項目</h1>
          <h1 class="newstitle2">OUR SERVICES</h1>
        </div>
        <v-row class="services00 mt-10" data-aos="fade-up">
          <v-col cols="12" sm="12" md="4" class="services02">
            <v-card class="fill-height">
              <div id="serviceswd">
                <h1 class="servicesnb">01</h1>
                <p id="servicestitle" class="my-4">
                  給想創業的你
                </p>
                <div id="servicestext">
                  <p>各項餐飲設備、餐廳形象設計</p>
                  <p>多種風格餐具、室內裝潢、食材</p>
                  <p>油煙設備、調酒器材</p>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="4" class="services02">
            <v-card class="fill-height">
              <div id="serviceswd">
                <h1 class="servicesnb">02</h1>
                <p id="servicestitle" class="my-4">
                  集結所有你需要的資源
                </p>
                <div id="servicestext">
                  <p>無論咖啡廳、酒吧、麵包甜點店</p>
                  <p>自助餐、火鍋燒烤店 ㄧ鍵就能解決</p>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="4" class="services02">
            <v-card class="fill-height">
              <div id="serviceswd">
                <h1 class="servicesnb">03</h1>
                <p id="servicestitle" class="my-4">
                  安心消費有保障
                </p>
                <div id="servicestext">
                  <p>工廠、代理商原廠優惠價，買越多越划算</p>
                  <p>可預約參觀工廠， 七天鑑賞期、專業保固維修</p>
                  <p>直營廠商設備教學， 品質正貨保證</p>
                </div>
              </div>
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
</script>

<style>
.servicesnb {
  font-size: 68px;
}

.services00 {
  display: flex;
  flex-wrap: wrap; /* 確保換行 */
  justify-content: center; /* 居中顯示 */
}

.services02 {
  margin-bottom: 20px; /* 卡片間的間距 */
}

#serviceswd {
  padding: 40px;
}

#servicestitle {
  font-size: 32px;
  font-weight: 900;
}

#servicestext {
  font-size: 16px;
  line-height: 2;
  font-weight: 600;
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

/* 預設情況下 */
.my-16 {
  margin-top: 16px;
  margin-bottom: 16px;
}

/* 手機版情況下減少上下距離 */
@media (max-width: 600px) {
  .my-16 {
    margin-top: 8px!important;  /* 調整手機版的上距 */
    margin-bottom: 8px!important;  /* 調整手機版的下距 */
  }
}

/* 其他媒介查詢或樣式 */
@media (min-width: 960px) {
  .my-16 {
    margin-top: 16px;
    margin-bottom: 16px;
  }
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
