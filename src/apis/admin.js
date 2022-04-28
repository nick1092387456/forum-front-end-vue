import { apiHelper } from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  categories: {
    get() {
      return apiHelper.get('/admin/categories', {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
    },
    create({ name }) {
      return apiHelper.post(
        '/admin/categories',
        { name },
        {
          headers: { Authorization: `Bearer ${getToken()}` },
        }
      )
    },
    deleteCategory(id) {
      return apiHelper.delete(`/admin/categories/${id}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
    },
    updateCategory(id, name) {
      return apiHelper.put(
        `/admin/categories/${id}`,
        { name },
        {
          headers: { Authorization: `Bearer ${getToken()}` },
        }
      )
    },
  },
  restaurants: {
    getDetail({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
    },
    create({ formData }) {
      return apiHelper.post('/admin/restaurants', formData, {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
    },
    update({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData, {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
    },
  },
  getAdminRestaurants() {
    return apiHelper.get('/admin/restaurants', {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
  deleteRestaurant({ restaurantId }) {
    return apiHelper.delete(`/admin/restaurants/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
  },
}
