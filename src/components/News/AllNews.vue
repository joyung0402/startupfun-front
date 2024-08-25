<template>
  <v-col cols="12" sm="12" class="my-16">
    <v-row class="content-row">
      <!-- Left Column for Content -->
      <v-col cols="12" sm="9" class="content-column">
        <v-row>
          <!-- Display paginated cards -->
          <v-col
            v-for="(card, index) in paginatedCards"
            :key="index"
            cols="12"
            sm="12"
            class="mb-4"
            data-aos="fade-up"
          >
            <v-card color="white">
              <v-row no-gutters>
                <v-col cols="12" sm="7">
                  <v-img :src="card.image" class="img-style"></v-img>
                </v-col>
                <v-col cols="12" sm="5" class="ntarea">
                  <v-card-title class="text-h5 text-black">
                    {{ card.title }}
                  </v-card-title>
                  <v-card-subtitle class="text-black">
                    {{ card.subtitle }}
                  </v-card-subtitle>
                  <v-card-actions>
                    <v-btn
                      class="ms-2 idnsbtn mt-8"
                      size="small"
                      text="READ MORE"
                      variant="outlined"
                      to="/singlenews"
                    ></v-btn>
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <!-- Pagination Controls -->
        <v-row class="mt-4" justify="center">
          <v-col cols="12" sm="12" class="d-flex justify-center">
            <v-pagination
              v-model="currentPage"
              :length="totalPages"
              :total-visible="5"
            ></v-pagination>
          </v-col>
        </v-row>
      </v-col>

      <!-- Right Column to maintain layout -->
      <v-col cols="12" sm="3" id="newsct" data-aos="fade-up">
        <v-row>
          <v-col>
            <!-- Search Bar -->
            <v-col cols="12">
              <v-text-field
                class="mx-auto"
                density="comfortable"
                placeholder="搜尋"
                prepend-inner-icon="mdi-magnify"
                style="max-width: 100%;"
                theme="light"
                variant="solo"
                rounded
                v-model="searchInput"
                @keydown.enter="handleEnterKey"
              ></v-text-field>
            </v-col>

            <!-- Latest News -->
            <h1 id="newstitle01">最新消息</h1>
            <v-col cols="12" class="mt-4 newslist1">
              <v-list>
                <v-list-item-group>
                  <v-list-item
                    v-for="(news, index) in staticLatestNews"
                    :key="index"
                    class="mb-2"
                  >
                    <v-list-item-content>
                      <v-list-item-title>{{ news.title }}</v-list-item-title>
                      <v-list-item-subtitle>{{ news.subtitle }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-col>

            <!-- Featured Articles -->
            <h1 id="featuredtitle01" class="mt-8">精選文章</h1>
            <v-col cols="12" class="mt-4 featuredlist1">
              <v-list>
                <v-list-item
                  v-for="(article, index) in featuredArticles"
                  :key="index"
                  class="mb-4"
                >
                  <v-list-item-avatar>
                    <v-img :src="article.image" class="featured-img"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{ article.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
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
      { title: '【免運費優惠】🚚 本月內所有訂單免運費！', subtitle: '2024.08.20', image: 'image/w800-01.jpg' },
      { title: '【限時折扣】🔥 預購即享30%折扣！', subtitle: '2024.08.20', image: 'image/w800-02.jpg' },
      { title: '【客戶專屬回饋】🎁 購滿$5000即送餐飲設備清潔套裝！', subtitle: '2024.08.20', image: 'image/w800-03.jpg' },
      { title: '【設備維護講座】📅 本週五免費參加我們的設備維護講座！', subtitle: '2024.08.20', image: 'image/w800-04.jpg' },
      { title: '【新品體驗日】🍽️ 本月末，我們將舉辦餐飲設備新品體驗日！', subtitle: '2024.08.20', image: 'image/w800-05.jpg' },
      { title: '【顧客評價活動】💬 分享你對我們餐飲設備的使用心得', subtitle: '2024.08.20', image: 'image/w800-06.jpg' },
      { title: '【合作夥伴專屬優惠】🤝 與我們合作的餐飲業界夥伴專享額外折扣！', subtitle: '2024.08.20', image: 'image/w800-07.jpg' },
      { title: '【舊機換新機】🔄 換新不再煩惱！將你的舊餐飲設備交給我們', subtitle: '2024.08.20', image: 'image/w800-08.jpg' }
    ],
    itemsPerPage: 3,
    currentPage: 1,
    search: '',
    searchInput: '',
    featuredArticles: [
      { title: '【新品體驗日】🍽️ 本月末，我們將舉辦餐飲設備新品體驗日！', image: 'image/w800-05.jpg' },
      { title: '【顧客評價活動】💬 分享你對我們餐飲設備的使用心得', image: 'image/w800-06.jpg' },
      { title: '【免運費優惠】🚚 本月內所有訂單免運費！', image: 'image/w800-01.jpg' },
    ]
  }),
  computed: {
    totalPages () {
      return Math.ceil(this.filteredCards.length / this.itemsPerPage)
    },
    filteredCards () {
      if (this.search) {
        return this.cards.filter(card =>
          card.title.toLowerCase().includes(this.search.toLowerCase())
        )
      }
      return this.cards
    },
    paginatedCards () {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.filteredCards.slice(start, end)
    },
    filteredItems () {
      return this.filteredCards.map(card => ({
        title: card.title,
        value: card.title
      }))
    },
    staticLatestNews () {
      // Assuming you want to always show the first 4 items in the `cards` array
      return this.cards.slice(0, 4).map(card => ({
        title: card.title,
        subtitle: card.subtitle
      }))
    }
  },
  methods: {
    performSearch () {
      // Add any additional logic needed when the user presses Enter
      this.search = this.searchInput.trim() // Trim whitespace if needed
      this.currentPage = 1 // Reset to the first page on new search
    },
    handleEnterKey (event) {
      this.performSearch()
    }
  }
}
</script>

<style scoped>
#newstitle01, #featuredtitle01 {
  padding: 0px 12px;
}

.newslist1, .featuredlist1 {
  padding: 0px!important;
}

.img-style {
  width: 100%;
  height: auto;
  box-sizing: border-box;
}

.v-pagination {
  margin-top: 20px;
}

.v-pagination .v-pagination__item {
  cursor: pointer;
}

.v-pagination .v-pagination__item--active {
  background-color: #e34e41;
  color: yellow;
}

.content-row {
  display: flex;
  align-items: stretch;
}

.content-column {
  padding-right: 20px;
}

.ntarea{
  padding-top: 20px!important;
  padding-bottom: 20px!important;
}

#newsct {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.2);
  padding: 12px;
  height: 100%;
}

.featuredlist1 .v-list-item-avatar {
  width: 100%;
  max-width: 100px; /* Adjust as needed */
}

.featured-img {
  width: 100%;
  height: auto;
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

.v-card .v-card-title {
  font-size: 20px!important;
  font-weight: 600;
    line-height: 1.6;
}
</style>
