<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">商家管理</h1>
      </v-col>
      <v-col cols="12">
        <v-btn color="green" @click="openDialog(null)">新增商家</v-btn>
      </v-col>
      <v-col cols="12">
        <v-data-table-server
          v-model:items-per-page="tableItemsPerPage"
          v-model:sort-by="tableSortBy"
          v-model:page="tablePage"
          :items="tableItems"
          :headers="tableHeaders"
          :loading="tableLoading"
          :items-length="tableItemsLength"
          :search="tableSearch"
          @update:items-per-page="tableLoadItems(false)"
          @update:sort-by="tableLoadItems(false)"
          @update:page="tableLoadItems(false)"
          hover
        >
          <template #top>
            <v-text-field
              label="搜尋"
              v-model="tableSearch"
              append-icon="mdi-magnify"
              @click-append="tableLoadItems(true)"
              @keydown.enter="tableLoadItems(true)"
            ></v-text-field>
          </template>
          <!-- 顯示圖片1 -->
          <template #item.image1="{ value }">
            <v-img :src="value || 'default-image-path.png'" height="50px" contain></v-img>
          </template>
          <!-- 顯示圖片2 -->
          <template #item.image2="{ value }">
            <v-img :src="value || 'default-image-path.png'" height="50px" contain></v-img>
          </template>
          <!-- 顯示圖片3 -->
          <template #item.image3="{ value }">
            <v-img :src="value || 'default-image-path.png'" height="50px" contain></v-img>
          </template>
          <!-- 編輯和刪除操作 -->
          <template #item.action="{ item }">
            <v-btn icon="mdi-pencil" variant="text" color="blue" @click="openDialog(item)"></v-btn>
            <v-btn variant="text" color="red" icon="mdi-delete" @click="deleteProduct(item._id)"></v-btn>
          </template>
        </v-data-table-server>
      </v-col>
    </v-row>
  </v-container>

  <v-dialog v-model="dialog.open" persistent width="500">
    <v-form @submit.prevent="submit" :disabled="isSubmitting">
      <v-card>
        <v-card-title>{{ dialog.id ? '編輯商品' : '新增商品' }}</v-card-title>
        <v-card-text>
          <v-text-field
            label="名稱"
            v-model="name.value.value"
            :error-messages="name.errorMessage.value"
          ></v-text-field>
          <v-select
            label="分類"
            :items="categories"
            v-model="category.value.value"
            :error-messages="category.errorMessage.value"
          ></v-select>
          <!-- 服務項目 -->
          <v-textarea
            label="服務項目"
            v-model="service.value.value"
            :error-messages="service.errorMessage.value"
          ></v-textarea>
          <v-textarea
            label="說明"
            v-model="description.value.value"
            :error-messages="description.errorMessage.value"
          ></v-textarea>
          <vue-file-agent
            v-model="fileRecords1"
            v-model:raw-model-value="rawFileRecords1"
            accept="image/jpeg,image/png"
            deletable
            max-size="5MB"
            help-text="選擇檔案或拖曳到這裡"
            :error-text="{ type: '檔案格式不支援', size: '檔案大小不能超過 5MB' }"
            ref="fileAgent1"
          ></vue-file-agent>
          <vue-file-agent
            v-model="fileRecords2"
            v-model:raw-model-value="rawFileRecords2"
            accept="image/jpeg,image/png"
            deletable
            max-size="5MB"
            help-text="選擇檔案或拖曳到這裡"
            :error-text="{ type: '檔案格式不支援', size: '檔案大小不能超過 5MB' }"
            ref="fileAgent2"
          ></vue-file-agent>
          <vue-file-agent
            v-model="fileRecords3"
            v-model:raw-model-value="rawFileRecords3"
            accept="image/jpeg,image/png"
            deletable
            max-size="5MB"
            help-text="選擇檔案或拖曳到這裡"
            :error-text="{ type: '檔案格式不支援', size: '檔案大小不能超過 5MB' }"
            ref="fileAgent3"
          ></vue-file-agent>
        </v-card-text>
        <v-card-actions>
          <v-btn color="red" :loading="isSubmitting" @click="closeDialog">取消</v-btn>
          <v-btn color="green" type="submit" :loading="isSubmitting">送出</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue'
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { definePage } from 'vue-router/auto'
definePage({
  meta: {
    title: '創業趣 | 管理',
    login: true,
    admin: true
  }
})

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()

const dialog = ref({
  open: false,
  id: ''
})

const openDialog = (item) => {
  if (item) {
    dialog.value.id = item._id
    name.value.value = item.name
    service.value.value = item.service
    description.value.value = item.description
    category.value.value = item.category
  } else {
    dialog.value.id = ''
  }
  dialog.value.open = true
}

const closeDialog = () => {
  dialog.value.open = false
  resetForm()
  fileRecords1.value = []
  fileRecords2.value = []
  fileRecords3.value = []
}

const categories = ['找設計', '找餐具', '找家具', '找設備', '找原料', '其他服務']

const schema = yup.object({
  name: yup.string().required('商家名稱必填'),
  service: yup.string().required('服務項目必填'),
  description: yup.string().required('商家說明必填'),
  category: yup.string().required('商家分類必填').test('isCategory', '商家分類錯誤', value => {
    return categories.includes(value)
  })
})

const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    service: '',
    description: '',
    category: ''
  }
})

const name = useField('name')
const service = useField('service')
const description = useField('description')
const category = useField('category')

const fileRecords1 = ref([])
const fileRecords2 = ref([])
const fileRecords3 = ref([])

const submit = handleSubmit(async (values) => {
  if (fileRecords1.value[0]?.error || fileRecords2.value[0]?.error || fileRecords3.value[0]?.error) return
  if (dialog.value.id.length === 0 && fileRecords1.value.length < 1 && fileRecords2.value.length < 1 && fileRecords3.value.length < 1) return

  try {
    const fd = new FormData()
    fd.append('name', values.name)
    fd.append('service', values.service)
    fd.append('description', values.description)
    fd.append('category', values.category)

    if (fileRecords1.value.length > 0) {
      fd.append('image1', fileRecords1.value[0].file)
    }

    if (fileRecords2.value.length > 0) {
      fd.append('image2', fileRecords2.value[0].file)
    }

    if (fileRecords3.value.length > 0) {
      fd.append('image3', fileRecords3.value[0].file)
    }

    if (dialog.value.id === '') {
      await apiAuth.post('/product', fd)
    } else {
      await apiAuth.patch('/product/' + dialog.value.id, fd)
    }

    createSnackbar({
      text: dialog.value.id === '' ? '新增成功' : '編輯成功',
      snackbarProps: {
        color: 'green'
      }
    })
    closeDialog()
    tableLoadItems(true)
  } catch (error) {
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤',
      snackbarProps: {
        color: 'red'
      }
    })
  }
})

const tableItemsPerPage = ref(10)
const tableSortBy = ref([{ key: 'createdAt', order: 'desc' }])
const tablePage = ref(1)
const tableItems = ref([])
const tableHeaders = [
  { title: '主圖', align: 'center', sortable: false, key: 'image1' },
  { title: '名稱', align: 'center', sortable: true, key: 'name' },
  { title: '分類', align: 'center', sortable: true, key: 'category' },
  { title: '主視覺', align: 'center', sortable: false, key: 'image2' },
  { title: '服務項目-圖', align: 'center', sortable: false, key: 'image3' },
  { title: '編輯', align: 'center', sortable: false, key: 'action' }
]
const tableLoading = ref(false)
const tableItemsLength = ref(0)
const tableSearch = ref('')

const tableLoadItems = async (resetPage) => {
  tableLoading.value = true
  try {
    const { data } = await apiAuth.get('/product/all', {
      params: {
        page: tablePage.value,
        itemsPerPage: tableItemsPerPage.value,
        sortBy: tableSortBy.value[0]?.key || 'createdAt',
        sortOrder: tableSortBy.value[0]?.order || 'desc',
        search: tableSearch.value
      }
    })
    tableItems.value.splice(0, tableItems.value.length, ...data.result.data)
    tableItemsLength.value = data.result.total
  } catch (error) {
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤',
      snackbarProps: {
        color: 'red'
      }
    })
  }
  tableLoading.value = false
}
tableLoadItems(true)

const deleteProduct = async (id) => {
  try {
    await apiAuth.delete('/product/' + id)
    createSnackbar({
      text: '刪除成功',
      snackbarProps: { color: 'green' }
    })
    tableLoadItems(true)
  } catch (error) {
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤',
      snackbarProps: { color: 'red' }
    })
  }
}
</script>

<route lang="yaml">
  meta:
    layout: admin
  </route>
