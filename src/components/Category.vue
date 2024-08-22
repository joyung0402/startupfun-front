<template>
  <v-card class="my-16 mx-auto mycards cgc" max-width="98%" style="background: none;box-shadow: none!important;">
    <v-row dense data-aos="fade-up">
      <v-col :cols="6" md="3">
        <v-row dense>
          <v-col :cols="12" md="12">
            <v-card class=" responsive-card" to="/stores">
              <v-img
                src="/public/image/w800-29.jpg"
                class="align-end responsive-img"
                height="300px"
                cover
              >
                <v-card-title class="cgtt">找設備</v-card-title>
              </v-img>
            </v-card>
          </v-col>
          <v-col :cols="12" md="12">
            <v-card class=" responsive-card" to="/stores">
              <v-img
                src="/public/image/w800-47.jpg"
                class="align-end responsive-img"
                height="300px"
                cover
              >
                <v-card-title class="cgtt">找設計</v-card-title>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col :cols="6" md="3">
        <v-row dense>
        <v-col :cols="12" md="12">
        <v-card class="responsive-card" to="/stores">
          <v-img
            src="/public/image/w800-45.jpg"
            class="align-end responsive-img abc-img"
            height="616px"
            cover
          >
            <v-card-title class="cgtt">找餐具</v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
      </v-col>
      <v-col :cols="12" md="6">
        <v-row dense>
          <v-col :cols="6" md="6">
            <v-card class=" responsive-card" to="/stores">
              <v-img
                src="/public/image/w800-21.jpg"
                class="align-end responsive-img"
                height="300px"
                cover
              >
                <v-card-title class="cgtt">找原料</v-card-title>
              </v-img>
            </v-card>
          </v-col>
          <v-col :cols="6" md="6">
            <v-card class=" responsive-card" to="/stores">
              <v-img
                src="/public/image/w800-09.jpg"
                class="align-end responsive-img"
                height="300px"
                cover
              >
                <v-card-title class="cgtt">其他服務</v-card-title>
              </v-img>
            </v-card>
          </v-col>
          <v-col :cols="12" md="12">
            <v-card class=" responsive-card" to="/stores">
              <v-img
                src="/public/image/w800-37.jpg"
                class="align-end responsive-img"
                height="300px"
                cover
              >
                <v-card-title class="cgtt">找家具</v-card-title>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
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
      { title: 'Pre-fab homes', src: '/public/image/1.png' },
      { title: 'Favorite road trips', src: '/public/image/1.png' },
      { title: 'Best airlines', src: '/public/image/1.png' },
      { title: 'Beautiful scenery', src: '/public/image/1.png' }
    ]
  })
}
</script>

<style scoped>
.cgtt{
  color: white;
  font-weight: bolder;
  font-size: 40px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0);
}

.v-row--dense > .v-col, .v-row--dense > [class*=v-col-] {
    padding: 8px;
}

.responsive-card:hover{
  -webkit-filter:brightness(1.1);
}

@media (max-width: 959px) {
  /* Adjust the image height for smaller screens */
  .responsive-img {
    height: 150px!important; /* Make sure this height matches the height of other images */
  }
  .abc-img{
height: 316px!important;
  }
  .cgc{
    padding-left: 4px;
    padding-right: 4px;
  }
}
@media (max-width: 480px) { /* 小屏幕手机 */
  .abc-img{
  height: 308px!important;
  }
  .v-row--dense > .v-col, .v-row--dense > [class*=v-col-] {
  padding: 4px;
  }
}
</style>
