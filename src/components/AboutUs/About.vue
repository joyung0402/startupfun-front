<template>
  <v-col cols="12" sm="12" class="my-16">
    <v-row justify="center">
      <v-col cols="12" sm="12">
        <v-row class="about00">
          <v-col cols="12" md="5" class="about01" data-aos="fade-in">
            <v-img
              :aspect-ratio="1"
              class="bg-white aboutimg"
              src="/public/image/aui01.jpg"
              width="100%"
              height="480px"
              cover
            ></v-img>
          </v-col>
          <v-col cols="12" md="7" class="about02" data-aos="fade-up">
            <v-card>
              <div id="aboutwd">
                <div class="about-info-inline">
                <p id="abouttitle">
                  關於創業趣
                </p>
                <p id="abouttitle2">
                  | ABOUT US
                </p>
              </div>
                <div id="abouttext" class="mt-8">
                  <p>創辦人本身是出版多本書的旅遊作家，在拍攝餐廳時，遇到不少店家產品、餐點好，
                  卻因擺設風格不統一、缺乏設計、招牌老舊，導致人潮流失；為了使店家死而復燃、重新恢復信心，
                  同時讓年輕人創業有方向，我們創立了這個平台，讓創業者不再為如何營運店家所煩惱。
                  在這裡消費者可以用現有資金，得到所有創辦餐廳、店家所需的一切設備，
                  包含社群、識別設計、店內擺設家具、餐廳廚房設備、網美人氣餐廳必備 裝潢、廣告招牌、美食原料。</p>
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
.aboutimg {
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.about01, .about02 {
  padding: 0;
}

.about00 {
  display: flex;
  flex-wrap: wrap; /* 確保在小屏設備上換行 */
  justify-content: center;
  align-items: center; /* 保持垂直置中 */
}

.about01 {
  margin-bottom: 20px; /* 手機板的底部間距 */
}

.about02 {
  margin-bottom: 20px; /* 手機板的底部間距 */
}

/* 手機版設置圖片高度為一半 */
@media (max-width: 600px) {
  .aboutimg {
    height: 240px!important; /* 手機版圖片高度設置為 480px 的一半 */
  }
}

@media (min-width: 960px) {
  .about01, .about02 {
    padding-left: 0; /* 電腦版取消左右內邊距 */
    padding-right: 0; /* 電腦版取消左右內邊距 */
  }
  .about00 {
    flex-wrap: nowrap; /* 確保在桌面版時不換行 */
  }
  .about02 {
    margin-left: -10%;
}
}

#aboutwd {
  padding: 40px;
}

#abouttitle {
  font-size: 32px;
  font-weight: 900;
}

#abouttitle2 {
  font-size: 32px;
  font-weight: 900;
  color: rgba(255, 188, 5, 0.2);
}

#abouttext {
  font-size: 16px;
  line-height: 2;
  font-weight: 600;
}

.about-info-inline {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.about-info-inline p {
  margin-right: 20px;
  display: flex;
  align-items: center;
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
</style>
