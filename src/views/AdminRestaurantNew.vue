<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm @after-submit="handleAfterSubmit" />
  </div>
</template>
<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm'

export default {
  components: {
    AdminRestaurantForm,
  },
  methods: {
    handleAfterSubmit(formData) {
      //這裡使用for of 配合 解構賦值 console出表單的內容。
      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    },
  },
}
</script>
