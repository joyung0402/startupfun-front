<template>
  <!-- Banner Section -->
  <v-col cols="12" sm="12" class="ssbnimg">
    <v-container>
      <v-col>
        <v-row justify="center">
          <v-col cols="12" sm="12">
            <div class="ssbannertitle">
              <h1 class="ssbannertitle1">原本生活</h1>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </v-col>

<!-- Back to Top Button and Info Link -->
<v-col cols="12" sm="12" class="sspoint d-none d-md-flex">
  <v-container>
    <v-col>
      <v-row justify="end" align="center">
        <div class="top-link" @click="scrollToTop">
          <v-icon>mdi-arrow-up</v-icon>
          <span>TOP</span>
        </div>
        <div class="info-link" @click="scrollToSspoint01">
          <v-icon>mdi-information-outline</v-icon>
          <span>簡介</span>
        </div>
        <div class="info-link" @click="scrollToSspoint02">
          <v-icon>mdi-book-open-page-variant</v-icon>
          <span>服務項目</span>
        </div>
        <div class="info-link" @click="scrollToSspoint03">
          <v-icon>mdi-image-multiple</v-icon>
          <span>相關商品 / 作品</span>
        </div>
        <div class="info-link" @click="scrollToSspoint04">
          <v-btn type="submit" class="sspointbtn">立即聯絡</v-btn>
        </div>
      </v-row>
    </v-col>
  </v-container>
</v-col>

  <!-- Main Content -->
  <v-container>
    <v-col cols="12" sm="12" class="mt-16">
      <v-row justify="center">
        <v-col cols="12" sm="12">
          <v-row id="sspoint01">
            <v-col cols="12" sm="3" class="sstore01">
              <v-img
                :aspect-ratio="1"
                class="bg-white"
                id="sstoreimg"
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                width="100%"
                height="100%"
                cover
              ></v-img>
            </v-col>
            <v-col cols="12" sm="9" class="sstore02">
              <v-card>
                <div id="sstorewd">
                  <p id="sstoretitle">原本生活</p>
                  <div class="mt-8 sstoretext">
                    <p>
                      多款家用好物任意挑選 — 原本生活帶你享受生活的美好，質感設計讓使用上除了美觀外，更能展現品味，享受「好生活」 消費滿額立享免運優惠，超取、宅配任君選擇，歡慶3周年，立享獨家優惠！多款家用好物任意挑選 — 原本生活帶你享受生活的美好，質感設計讓使用上除了美觀外，更能展現品味，享受「好生活」 消費滿額立享免運優惠，超取、宅配任君選擇，歡慶3周年，立享獨家優惠！多款家用好物任意挑選 — 原本生活帶你享受生活的美好，質感設計讓使用上除了美觀外，更能展現品味，享受「好生活」 消費滿額立享免運優惠，超取、宅配任君選擇，歡慶3周年，立享獨家優惠！
                    </p>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>

    <!-- Service Section -->
    <v-col cols="12" sm="12">
      <v-row>
        <v-col cols="12" sm="8">
          <div class="ssservice" id="sspoint02">
            <h1>服務項目</h1>

            <v-carousel hide-delimiters class="my-6">
  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    cover
  ></v-carousel-item>
</v-carousel>

            <p class="sstoretext">
              多款家用好物任意挑選 — 原本生活帶你享受生活的美好，質感設計讓使用上除了美觀外，更能展現品味，享受「好生活」 消費滿額立享免運優惠，超取、宅配任君選擇，歡慶3周年，立享獨家優惠！多款家用好物任意挑選 — 原本生活帶你享受生活的美好，質感設計讓使用上除了美觀外，更能展現品味，享受「好生活」 消費滿額立享免運優惠，超取、宅配任君選擇，歡慶3周年，立享獨家優惠！多款家用好物任意挑選 — 原本生活帶你享受生活的美好，質感設計讓使用上除了美觀外，更能展現品味，享受「好生活」 消費滿額立享免運優惠，超取、宅配任君選擇，歡慶3周年，立享獨家優惠！
              多款家用好物任意挑選 — 原本生活帶你享受生活的美好，質感設計讓使用上除了美觀外，更能展現品味，享受「好生活」 消費滿額立享免運優惠，超取、宅配任君選擇，歡慶3周年，立享獨家優惠！多款家用好物任意挑選 — 原本生活帶你享受生活的美好，質感設計讓使用上除了美觀外，更能展現品味，享受「好生活」 消費滿額立享免運優惠，超取、宅配任君選擇，歡慶3周年，立享獨家優惠！多款家用好物任意挑選 — 原本生活帶你享受生活的美好，質感設計讓使用上除了美觀外，更能展現品味，享受「好生活」 消費滿額立享免運優惠，超取、宅配任君選擇，歡慶3周年，立享獨家優惠！
            </p>
          </div>
          <div class="ssservice mt-6" id="sspoint03">
            <v-row>
              <v-col cols="12" sm="6">
                <h1 class="mt-4">相關商品 / 作品</h1>
              </v-col>
              <v-col cols="12" sm="6" id="sspbtn">
              <a href="/path-to-catalog.pdf" download>
                <v-btn class="ssproduct-btn mx-2">型錄下載</v-btn>
              </a>
              <a href="/">
                <v-btn class="ssproduct-btn mx-2">查看更多</v-btn>
              </a>
              </v-col>
            </v-row>
            <div class="my-8">
              <v-btn @click="showCategory('plates')" class="category-btn mx-2">圓盤</v-btn>
              <v-btn @click="showCategory('utensils')" class="category-btn mx-2">餐具</v-btn>
              <v-btn @click="showCategory('storage')" class="category-btn mx-2">收納盤</v-btn>
            </div>
            <v-row>
              <v-col v-for="(image, index) in currentImages" :key="index" cols="12" sm="4">
                <v-img
                  :src="image"
                  class="image-thumbnail"
                  @click="openDialog(image)"
                >
                  <div class="fill-height repeating-gradient"></div>
                </v-img>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="12" sm="4">
          <div class="ssservice" id="sspoint04">
            <div>
              <h1>商家資訊</h1>
              <div class="my-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14458.814597305804!2d121.4195156!3d25.0441293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7bec9ad74b1%3A0xa639904a89f26435!2z5Yue5YuV6YOo5Yue5YuV5Yqb55m85bGV572y5YyX5Z-65a6c6Iqx6YeR6aas5YiG572y5rOw5bGx6IG35qWt6KiT57e05aC0!5e0!3m2!1szh-TW!2stw!4v1718091533768!5m2!1szh-TW!2stw"
                  width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div class="sstoretext">
                <p>地址 : 新北市區忠三街35巷8號</p>
                <p>電話 : 02-2648-5358</p>
                <p>email : startupfun0104@gmail.com</p>
              </div>
            </div>
            <div class="mt-12">
              <h1>立即聯絡</h1>
              <v-form @submit.prevent="submitForm">
                <v-text-field
                  v-model="form.name"
                  label="姓名"
                  required
                  class="mb-4"
                ></v-text-field>
                <v-text-field
                  v-model="form.email"
                  label="電子郵件"
                  type="email"
                  required
                  class="mb-4"
                ></v-text-field>
                <v-text-field
                  v-model="form.phone"
                  label="聯絡電話"
                  type="tel"
                  required
                  class="mb-4"
                ></v-text-field>
                <v-textarea
                  v-model="form.message"
                  label="留言內容"
                  required
                  class="mb-4"
                ></v-textarea>
                <v-btn type="submit" id="sscbtn">送出</v-btn>
              </v-form>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-container>

  <!-- Dialog for Lightbox -->
  <v-dialog v-model="dialog" max-width="80%">
    <v-img :src="dialogImage" class="lightbox-image"></v-img>
  </v-dialog>
  <MainFooter></MainFooter>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      categories: {
        plates: [
          'https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
          'https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
          'https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
          'https://cdn.vuetifyjs.com/images/parallax/material2.jpg'
        ],
        utensils: [
          'https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
          'https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
          'https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
          'https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
          'https://cdn.vuetifyjs.com/images/parallax/material2.jpg'
        ],
        storage: [
          'https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
          'https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
          'https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
          'https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
          'https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
          'https://cdn.vuetifyjs.com/images/parallax/material2.jpg'
        ]
      },
      currentCategory: 'plates',
      dialog: false,
      dialogImage: '',
      carouselImages: [
        'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
        'https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
        'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
        'https://cdn.vuetifyjs.com/images/parallax/material2.jpg'
      ]
    }
  },
  computed: {
    currentImages () {
      return this.categories[this.currentCategory] || []
    }
  },
  methods: {
    showCategory (category) {
      this.currentCategory = category
    },
    scrollToTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    scrollToSspoint01 () {
      const element = document.getElementById('sspoint01')
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 160,
          behavior: 'smooth'
        })
      }
    },
    scrollToSspoint02 () {
      const element = document.getElementById('sspoint02')
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 160,
          behavior: 'smooth'
        })
      }
    },
    scrollToSspoint03 () {
      const element = document.getElementById('sspoint03')
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 160,
          behavior: 'smooth'
        })
      }
    },
    scrollToSspoint04 () {
      const element = document.getElementById('sspoint04')
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 160,
          behavior: 'smooth'
        })
      }
    },
    openDialog (image) {
      this.dialogImage = image
      this.dialog = true
    },
    submitForm () {
      // Handle form submission logic here
      console.log(this.form)
      // Reset form after submission
      this.form = { name: '', email: '', phone: '', message: '' }
    }
  }
}
</script>

<style scoped>
.sspoint {
  height: 60px;
  width: 100%;
  background: #ffbc05;
  box-shadow: none; /* Removed shadow */
  display: flex;
  align-items: center;
  position: -webkit-sticky; /* For Safari */
  position: sticky;
  top: 80px;
  z-index: 1000; /* Ensure it stays above other content */
}

.top-link, .info-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
}

.top-link:hover, .info-link:hover {
  color: #fff;
}

.info-link {
  margin-left: 40px; /* Adjusted space between the two elements */
}

.ssbnimg {
  background: url(/public/image/2.png);
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  align-items: center;
}

.ssbannertitle {
  width: 100%;
  height: 80px;
  position: relative;
}

.ssbannertitle::before {
  content: '';
  position: absolute;
  top: -20px;
  height: 4px;
  width: 50px;
  border-radius: 3px;
  z-index: 2;
  background: #fff;
}

.ssbannertitle1 {
  text-align: start;
  width: 100%;
  color: #fff;
  font-size: 40px;
  font-weight: 900;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

#sstoreimg {
  border-radius: 20px !important;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

#sspoint01 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
}

#sstorewd {
  padding: 40px;
}

#sstoretitle {
  font-size: 32px;
  font-weight: 900;
}

.sstoretext {
  font-size: 16px;
  line-height: 2;
  font-weight: 600;
}

.ssservice {
  border-radius: 20px !important;
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.2) !important;
  background: white;
  padding: 20px;
}

.category-btn {
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.2) !important;
  background: white;
  border-radius: 20px;
}

.category-btn:hover {
  background-color: #ffbc05;
}

.category-btn:focus {
  background-color: #ffbc05;
  color: #fff;
}

.image-thumbnail {
  border-radius: 20px;
  cursor: pointer;
}

.image-thumbnail:hover {
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.lightbox-image {
  border-radius: 20px;
}

#sscbtn {
  background: #ffbc05;
  width: 100%;
  border-radius: 20px;
  color: white;
  font-weight: bold;
}

#sscbtn:hover {
  background: #e34e41 !important;
}

#sspbtn{
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 16px;
}

.sspointbtn{
  background: #e34e41 !important;
  border-radius: 20px!important;
  color: #fff;
}

.sspointbtn:hover{
  background: white !important;
  color: black;
}

.ssproduct-btn{
  border-radius: 20px;
  background: #ffbc05;
  color: white;
}

.ssproduct-btn:hover{
  background: #e34e41;
}
</style>
