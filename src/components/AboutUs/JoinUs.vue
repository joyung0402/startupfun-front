<template>
  <v-col cols="12" sm="12" class="my-16">
    <v-row justify="center">
      <v-col cols="12" sm="12">
        <v-row class="join00" data-aos="fade-up">
          <v-col cols="12" md="4" class="join01">
            <v-card class="d-flex flex-column fill-height join-card">
              <div id="joinwd">
                <p id="jointitle">
                  加入我們
                </p>
                <div id="jointext" class="mt-8">
                  <p>創辦人本身是出版多本書的旅遊作家，在拍攝餐廳時，遇到不少店家產品、餐點好，
                  卻因擺設風格不統一、缺乏設計、招牌老舊，導致人潮流失；為了使店家死而復燃、重新恢復信心，
                  同時讓年輕人創業有方向，我們創立了這個平台，讓創業者不再為如何營運店家所煩惱。
                  在這裡消費者可以用現有資金，得到所有創辦餐廳、店家所需的一切設備，
                  包含社群、識別設計、店內擺設家具、餐廳廚房設備、網美人氣餐廳必備 裝潢、廣告招牌、美食原料。</p>
                </div>
                <div class="my-16 btnl">
        <v-btn class="btn01" to="/contactus">JOIN US</v-btn>
        </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" class="join02">
            <v-img
              class="bg-white joinimg fill-height"
              src="/public/image/aui02.jpg"
              width="100%"
              height="100%"
              cover
            ></v-img>
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
.btnl{
  display: flex;
  justify-content: start;
}

.btn01{
  background: #ffbc05;
  border-radius: 20px;
  color: white;
  font-weight: 600;
}

.btn01:hover{
  background: #e34e41;
  border-radius: 20px;
  color: white;
  font-weight: 600;
}

.join-card {
  border-radius: 20px 0 0 20px!important;
}

.joinimg {
  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0px!important; /* 桌面版的圓角設置 */
}

.join01, .join02 {
  padding: 0;
}

.join00 {
  display: flex;
  flex-wrap: wrap; /* 確保在小屏設備上換行 */
  justify-content: flex-end;
  align-items: stretch; /* 讓項目填滿整個列高度 */
}

.join01 {
  margin-bottom: 20px; /* 手機板的底部間距 */
}

.join02 {
  margin-bottom: 20px; /* 手機板的底部間距 */
}

@media (max-width: 600px) {
  .join-card, .joinimg {
    border-radius: 20px!important; /* 手機板上設置圓角 */
  }

  .join01, .join02 {
    padding-left: 20px; /* 手機板上的內邊距 */
    padding-right: 20px; /* 手機板上的內邊距 */
  }
}

@media (min-width: 600px) and (max-width: 960px) {
  .join-card, .joinimg {
    border-radius: 20px!important; /* 平板上設置圓角 */
  }

  .join01, .join02 {
    padding-left: 20px; /* 平板上的內邊距 */
    padding-right: 20px; /* 平板上的內邊距 */
  }
}

@media (min-width: 960px) {
  .join-card {
    border-radius: 20px 0 0 20px!important; /* 保持電腦版的圓角樣式 */
  }

  .joinimg {
    border-radius: 20px; /* 電腦版圖片圓角 */
  }

  .join01, .join02 {
    padding-left: 0; /* 電腦版取消左右內邊距 */
    padding-right: 0; /* 電腦版取消左右內邊距 */
  }

  .join00 {
    flex-wrap: nowrap; /* 確保在桌面版時不換行 */
  }
}

#joinwd {
  padding: 40px;
  flex: 1; /* 確保 v-card 會填滿高度 */
}

#jointitle {
  font-size: 32px;
  font-weight: 900;
}

#jointext {
  font-size: 16px;
  line-height: 2;
  font-weight: 600;
}
</style>
