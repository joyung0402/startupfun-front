<template>
  <SlideShow></SlideShow>
<div id="idbg01">
<v-container>
  <NewStores></NewStores>
</v-container>
<v-container id="fullct">
  <Category></Category>
</v-container>
</div>
<div id="idbg02">
<v-container>
  <HotStores></HotStores>
</v-container>
<v-container>
  <FeaturedStores></FeaturedStores>
</v-container>
</div>
<Marquee></Marquee>
<div id="idbg03">
<v-container>
  <Comment></Comment>
</v-container>
</div>
<MainFooter></MainFooter>
</template>

<script setup>
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

// import { ref } from 'vue'
// import { definePage } from 'vue-router/auto'
// import { useApi } from '@/composables/axios'
// import { useSnackbar } from 'vuetify-use-dialog'

// definePage({
//   meta: {
//     title: '購物網',
//     login: false,
//     admin: false
//   }
// })

// const { api } = useApi()
// const createSnackbar = useSnackbar()

// const page = ref(1)
// const pages = ref(1)
// const ITEMS_PER_PAGE = 20

// const products = ref([])
// const loadProducts = async () => {
//   try {
//     const { data } = await api.get('/product', {
//       params: {
//         itemsPerPage: ITEMS_PER_PAGE,
//         page: page.value
//       }
//     })
//     pages.value = Math.ceil(data.result.total / ITEMS_PER_PAGE)
//     products.value.splice(0, products.value.length, ...data.result.data)
//   } catch (error) {
//     console.log(error)
//     createSnackbar({
//       text: error?.response?.data?.message || '發生錯誤',
//       snackbarProps: {
//         color: 'red'
//       }
//     })
//   }
// }
// loadProducts()
</script>

<style>
#fullct{
  max-width: 100%!important;
  padding-left: 0px!important;
  padding-right: 0px!important;
}

#idbg01{
  background: url(/public/image/idbg-01.jpg);
  background-size: cover;
  background-position: top;
  margin-top: -10px;
}

#idbg02{
  background: url(/public/image/idbg-02.jpg);
  background-size: cover;
  background-position: top;
}

#idbg03{
  background: url(/public/image/idbg-03.jpg);
  background-size: cover;
  background-position: top;
}
</style>
