<template>
  <!-- Banner Section -->
  <v-col cols="12" sm="12" class="cubnimg">
    <v-container>
      <v-col>
        <v-row justify="center">
          <v-col cols="12" sm="12">
            <div class="cubannertitle" data-aos="fade-in">
              <h1 class="cubannertitle1">聯絡我們</h1>
              <h1 class="cubannertitle2">CONTACT US</h1>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </v-col>
  <div id="cubg">
    <v-container>
      <v-col cols="12" sm="12" class="my-16">
        <v-row justify="center">
          <v-col cols="12" sm="12">
            <v-row class="contact00">
              <v-col cols="12" md="6" class="contact01" data-aos="fade-in">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.164811413858!2d121.49866870000001!3d25.062402499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a91899d0b767%3A0x27dfab1b8388288a!2zMjQx5paw5YyX5biC5LiJ6YeN5Y2A6YeN5paw6Lev5LqM5q61NDLomZ8z5qiT!5e0!3m2!1szh-TW!2stw!4v1724286558488!5m2!1szh-TW!2stw" width="100%" height="480" style="border:0;border-radius: 20px;box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.2)!important;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </v-col>
              <v-col cols="12" md="6" class="contact02" data-aos="fade-up">
                <v-card>
                  <div id="contactwd">
                    <div class="contact-info-inline">
                      <p id="contacttitle">聯絡我們</p>
                      <p id="contacttitle2">| CONTACT US</p>
                    </div>
                    <div id="contacttext" class="mt-8">
                      <p><v-icon class="cuicon mr-2">mdi-map-marker</v-icon> 公司地址｜新北市三重區重新路2段42之7號3樓</p>
                      <p><v-icon class="cuicon mr-2">mdi-email</v-icon> 電子郵件｜startupfun0104@gmail.com</p>
                      <p><v-icon class="cuicon mr-2">mdi-clock-time-four</v-icon> 聯絡時間｜週一 至 週日 10:00 – 19:00</p>
                      <div class="contact-info-inline">
                        <p><v-icon class="cuicon mr-2">mdi-phone</v-icon> 聯絡電話｜0936-157-532</p>
                        <p><v-icon class="cuicon mr-2">mdi-card-account-details</v-icon> 統一編號｜94092832</p>
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row justify="center">
          <v-col cols="11" sm="11" class="mb-16">
            <v-form @submit.prevent="submitForm">
              <v-row>
                <v-col cols="12" md="6" class="mb-4" data-aos="fade-up">
                  <v-text-field
                    v-model="form.name"
                    label="姓名"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="mb-4" data-aos="fade-up">
                  <v-text-field
                    v-model="form.email"
                    label="公司名稱"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="mb-4" data-aos="fade-up">
                  <v-text-field
                    v-model="form.email"
                    label="電子郵件"
                    type="email"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="mb-4" data-aos="fade-up">
                  <v-text-field
                    v-model="form.phone"
                    label="聯絡電話"
                    type="tel"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="12" class="mb-4" data-aos="fade-up">
                  <v-textarea
                    v-model="form.message"
                    label="留言內容"
                    required
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-btn type="submit" id="cubtn" data-aos="fade-up">送出</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </div>
  <MainFooter></MainFooter>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm () {
      // 處理表單提交邏輯
      console.log(this.form)
      // 提交後重置表單
      this.form = { name: '', email: '', phone: '', message: '' }
    }
  },
  mounted () {
    // 初始化 AOS
    AOS.init({
      duration: 1000, // 動畫持續時間
      easing: 'ease-in-out', // 動畫效果
      once: true // 是否只觸發一次
    })
  }
}
</script>

<style>
.cubnimg{
  background: url(/public/image/cutbg.jpg);
  background-size: cover;
  background-position: center;
  height: 350px;
  display: flex;
  align-items: center;
}

.cubannertitle{
  width: 100%;
  height: 80px;
  position: relative;
}

.cubannertitle::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -20px;
  height: 4px;
  margin-left: -25px;
  width: 50px;
  border-radius: 3px;
  z-index: 2;
  background: #FFF;
}

.cubannertitle1{
  text-align: center;
  width: 100%;
  color: #FFF;
  font-size: 40px;
  font-weight: 900;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.cubannertitle2{
  text-align: center;
  width: 100%;
  font-size: 68px;
  font-weight: 900;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(255, 255, 255, 0.2);
}

.contactimg {
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.contact01, .contact02 {
  padding: 0;
}

.contact00 {
  display: flex;
  flex-wrap: wrap; /* 確保在小屏設備上換行 */
  justify-content: center;
  align-items: center; /* 保持垂直置中 */
}

.contact01 {
  margin-bottom: 20px; /* 手機版的底部間距 */
}

.contact02 {
  margin-bottom: 20px; /* 手機版的底部間距 */
}

@media (min-width: 960px) {
  .contact01, .contact02 {
    padding-left: 0; /* 電腦版取消左右內邊距 */
    padding-right: 0; /* 電腦版取消左右內邊距 */
  }
  .contact00 {
    flex-wrap: nowrap; /* 確保在桌面版時不換行 */
  }
  .contact02 {
    margin-left: -10%;
  }
}

#contactwd {
  padding: 40px;
}

#contacttitle {
  font-size: 32px;
  font-weight: 900;
}

#contacttext {
  font-size: 16px;
  line-height: 3;
  font-weight: 600;
}

#contacttitle2{
  font-size: 32px;
  font-weight: 900;
  color: rgba(255, 188, 5, 0.2);
}

.contact-info-inline {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.contact-info-inline p {
  margin-right: 20px;
  display: flex;
  align-items: center;
}

.contact-info-inline v-icon {
  margin-right: 8px;
}

.cuicon{
  color: #ffbc05;
}

#cubtn{
  background: #ffbc05;
  color: white;
  border-radius: 20px;
  float: right;
  width: 20%;
}

#cubtn:hover{
  background: #e34e41;
}

#cubg{
  background: url(/public/image/cubg.jpg);
  background-size: cover;
  background-position: top;
}
</style>
