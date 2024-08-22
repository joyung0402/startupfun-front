<template>
  <v-col cols="12" sm="12" class="my-16">
    <v-row justify="center">
      <!-- 搜尋欄 -->
      <v-col cols="12" class="search-bar" data-aos="fade-up">
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

        <v-row class="mt-4">
          <!-- 其他搜尋條件 -->
          <v-col cols="12" md="9" class="d-flex">
            <v-autocomplete
              class="mr-2"
              v-model="values1"
              :items="items1"
              label="想要找些甚麼呢?"
              dense
            ></v-autocomplete>
            <v-autocomplete
              v-model="values2"
              :items="items2"
              label="分類"
              dense
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="3" class="d-flex justify-end">
            <v-btn
              class="mt-4"
              id="storessbtn"
              color="primary"
              @click="performSearch"
            >
              搜尋
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="12">
        <v-row class="mt-10">
          <!-- 顯示分頁的熱門項目 -->
          <v-col
            v-for="(popular, i) in paginatedPopulars"
            :key="i"
            cols="6"
            sm="6"
            md="4"
          >
            <v-card
              class="mx-auto pointer"
              color="grey-lighten-4"
              max-width="800"
              @click="navigateToDetail(popular.link)"
              data-aos="fade-up"
            >
              <v-img :aspect-ratio="16 / 9" cover :src="popular.image">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-card-text class="pt-6 card-text">
                <div class="font-weight-light text-h6 mb-2">
                  {{ popular.title }}
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- 分頁控制 -->
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
    itemsPerPage: 12, // 每頁顯示的項目數（4行 * 3列）
    currentPage: 1,
    search: '',
    searchInput: '',
    values1: null,
    values2: null,
    items1: ['圓盤', '抽油煙機', '高腳椅', '平面設計'], // Option 1 的選項
    items2: ['找設計', '找餐具', '找家具', '找設備', '找原料', '其他項目'], // Option 2 的選項
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
      { image: 'image/w800-43.jpg', title: ' 寶庫餐桌', link: '/products/66c349fef2568ce3a964ad4d' },
      { image: 'image/w800-43.jpg', title: ' 寶庫餐桌', link: '/products/66c349fef2568ce3a964ad4d' },
      { image: 'image/w800-35.jpg', title: ' 達達家居', link: '/products/66c349fef2568ce3a964ad4d' },
      { image: 'image/w800-39.jpg', title: ' 輝煌餐廳家具', link: '/products/66c349fef2568ce3a964ad4d' },
      { image: 'image/w800-30.jpg', title: ' 前沿餐飲設施', link: '/products/66c349fef2568ce3a964ad4d' },
      { image: 'image/w800-26.jpg', title: ' 靚麗廚具工坊', link: '/products/66c349fef2568ce3a964ad4d' },
      { image: 'image/w800-19.jpg', title: ' 盛宴原料', link: '/products/66c349fef2568ce3a964ad4d' },
      { image: 'image/w800-41.jpg', title: ' 大同瓷器', link: '/products/66c349fef2568ce3a964ad4d' },
      { image: 'image/w800-22.jpg', title: ' 炫彩餐飲設備', link: '/products/66c349fef2568ce3a964ad4d' },
      { image: 'image/w800-15.jpg', title: ' 恒久廚房', link: '/products/66c349fef2568ce3a964ad4d' },
      { image: 'image/w800-28.jpg', title: ' 思維森', link: '/products/66c349fef2568ce3a964ad4d' },
      { image: 'image/w800-24.jpg', title: ' 星辰餐飲設備', link: '/products/66c349fef2568ce3a964ad4d' },
      { image: 'image/w800-36.jpg', title: ' 原本生活', link: '/products/66c349fef2568ce3a964ad4d' }
    ]
  }),
  computed: {
    totalPages () {
      return Math.ceil(this.filteredPopulars.length / this.itemsPerPage)
    },
    filteredPopulars () {
      if (this.search) {
        return this.populars.filter(popular =>
          popular.title.toLowerCase().includes(this.search.toLowerCase())
        )
      }
      return this.populars
    },
    paginatedPopulars () {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.filteredPopulars.slice(start, end)
    }
  },
  methods: {
    performSearch () {
      this.search = this.searchInput.trim()
      this.currentPage = 1 // 重置到第一頁
    },
    handleEnterKey (event) {
      this.performSearch()
    },
    navigateToDetail (link) {
      this.$router.push(link)
    }
  }
}
</script>

<style scoped>
.search-bar {
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.2) !important;
  padding: 20px;
  border-radius: 20px;
  background: white;
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

.v-autocomplete {
  max-width: 100%;
}

#storessbtn {
  background: #ffbc05 !important;
  border-radius: 20px;
  font-weight: 600;
  width: 100%;
}

#storessbtn:hover {
  background: #e34e41 !important;
  border-radius: 20px;
  font-weight: 600;
}

.pointer {
  cursor: pointer;
  background: white;
}
.pointer:hover {
  background: white!important;
}

.card-text .font-weight-light {
  color: black;
  transition: color 0.3s;
  font-weight: bold!important;
}

.card-text .font-weight-light:hover {
  color: #ffbc05;
}

.card-text .font-weight-light:active {
  color: #ffbc05;
}
</style>
