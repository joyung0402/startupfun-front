<template>
    <v-col cols="12" sm="12" class="lgbnimg">
    <v-row justify="center">
    <v-col cols="12" sm="10">
      <div class="bannertitle" data-aos="fade-in">
    <h1 class="bannertitle1">登入</h1>
    <h1 class="bannertitle2">LOGIN</h1>
  </div>
    </v-col>
  </v-row>
  </v-col>
  <div id="lgbg">
  <v-container>
    <v-row justify="center">
    <v-col cols="10" md="4" class="logincard my-16" data-aos="fade-up">
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">登入</h1>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <v-form :disabled="isSubmitting" @submit.prevent="submit">
          <v-text-field
            label="帳號"
            minlength="4" maxlength="20" counter
            v-model="account.value.value"
            :error-messages="account.errorMessage.value"
          ></v-text-field>
          <v-text-field
            label="密碼"
            minlength="4" maxlength="20" counter
            type="password"
            v-model="password.value.value"
            :error-messages="password.errorMessage.value"
          ></v-text-field>
          <div class="text-center">
            <v-btn class="loginbtn" type="submit" color="#ffbc05" :loading="isSubmitting">登入</v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-col>
</v-row>
  </v-container>
</div>
<MainFooter></MainFooter>
</template>

<script setup>
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useRouter } from 'vue-router'
import validator from 'validator'
import { definePage } from 'vue-router/auto'
import { useUserStore } from '@/stores/user'
import { useSnackbar } from 'vuetify-use-dialog'
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

definePage({
  meta: {
    title: '購物網 | 登入',
    login: false,
    admin: false
  }
})

const router = useRouter()
const user = useUserStore()
const createSnackbar = useSnackbar()

const schema = yup.object({
  account: yup
    .string()
    .required('使用者帳號必填')
    .min(4, '使用者帳號長度不符')
    .max(20, '使用者帳號長度不符')
    .test(
      // .test(自訂驗證名稱, 錯誤訊息, 驗證 function)
      'isAlphanumeric', '使用者帳號格式錯誤',
      (value) => {
        return validator.isAlphanumeric(value)
      }
    ),
  password: yup
    .string()
    .required('使用者密碼必填')
    .min(4, '使用者密碼長度不符')
    .max(20, '使用者密碼長度不符')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})
const account = useField('account')
const password = useField('password')

const submit = handleSubmit(async (values) => {
  const result = await user.login(values)
  if (result === '登入成功') {
    createSnackbar({
      text: result,
      snackbarProps: {
        color: 'green'
      }
    })
    router.push('admin')
  } else {
    createSnackbar({
      text: result,
      snackbarProps: {
        color: 'red'
      }
    })
  }
})
</script>

<style>
.logincard{
  border-radius: 20px!important;
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.2)!important;
  background: white;
  padding: 80px 40px;
}
.lgbnimg{
  background: url(/public/image/lgbg.jpg);
  background-size: cover;
  background-position: center;
  height: 200px;
  display: flex;
  align-items: center;
}

.bannertitle{
  width: 100%;
  height: 80px;
    position: relative;
}

.bannertitle::before {
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

.bannertitle1{
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

.bannertitle2{
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

.loginbtn{
  border-radius: 20px;
  width: 100%;
  color: white!important;
}

.loginbtn:hover{
background: #e34e41!important;
}

#lgbg{
  background: url(/public/image/idbg-01.jpg);
  background-size: cover;
  background-position: top;
  margin-top: -10px;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .my-16 {
    margin-top: 64px !important;
  }
}

@media (max-width: 768px){
  .my-16 {
    margin-top: 32px !important;
    margin-bottom: 32px !important;
  }
}
</style>
