<template>
  <v-col cols="12" sm="12" class="rgbnimg">
    <v-row justify="center">
    <v-col cols="12" sm="10">
      <div class="bannertitle" data-aos="fade-in">
    <h1 class="bannertitle1">註冊</h1>
    <h1 class="bannertitle2">REGISTER</h1>
  </div>
    </v-col>
  </v-row>
  </v-col>
  <div id="rsbg">
  <v-container>
    <v-row justify="center">
    <v-col cols="10" md="4" class="registercard my-16" data-aos="fade-up">
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">註冊</h1>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <v-form @submit.prevent="submit" :disabled="isSubmitting">
          <v-text-field
            label="帳號"
            minlength="4" maxlength="20" counter
            v-model="account.value.value"
            :error-messages="account.errorMessage.value"
          ></v-text-field>
          <v-text-field
            label="信箱" type="email"
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
          ></v-text-field>
          <v-text-field
            label="密碼" type="password"
            minlength="4" maxlength="20" counter
            v-model="password.value.value"
            :error-messages="password.errorMessage.value"
          ></v-text-field>
          <v-text-field
            label="確認密碼" type="password"
            minlength="4" maxlength="20" counter
            v-model="passwordConfirm.value.value"
            :error-messages="passwordConfirm.errorMessage.value"
          ></v-text-field>
          <div class="text-center">
            <v-btn class="loginbtn" type="submit" color="#ffbc05" :loading="isSubmitting">註冊</v-btn>
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
import validator from 'validator'
import { useApi } from '@/composables/axios'
import { useRouter } from 'vue-router'
import { definePage } from 'vue-router/auto'
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
    title: '購物網 | 註冊',
    login: false,
    admin: false
  }
})

const { api } = useApi()
const router = useRouter()
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
  email: yup
    .string()
    .required('使用者信箱必填')
    .test(
      'isEmail', '使用者信箱格式錯誤',
      (value) => {
        return validator.isEmail(value)
      }
    ),
  password: yup
    .string()
    .required('使用者密碼必填')
    .min(4, '使用者密碼長度不符')
    .max(20, '使用者密碼長度不符'),
  passwordConfirm: yup
    .string()
    // .oneOf(陣列, 錯誤訊息) 只允許符合陣列內其中一個值
    // .ref('password')     代表這個 schema 的 password 的欄位值
    .oneOf([yup.ref('password')], '密碼不一致')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})
const account = useField('account')
const email = useField('email')
const password = useField('password')
const passwordConfirm = useField('passwordConfirm')

const submit = handleSubmit(async (values) => {
  try {
    await api.post('/user', {
      account: values.account,
      email: values.email,
      password: values.password
    })
    createSnackbar({
      text: '註冊成功',
      snackbarProps: {
        color: 'green'
      }
    })
    router.push('/login')
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤',
      snackbarProps: {
        color: 'red'
      }
    })
  }
})
</script>

<style>
.registercard{
  border-radius: 20px!important;
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.2)!important;
  background: white;
  padding:40px;
}
.rgbnimg{
  background: url(/public/image/rsbg.jpg);
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

#rsbg{
  background: url(/public/image/idbg-01.jpg);
  background-size: cover;
  background-position: top;
  margin-top: -10px;
}
</style>
