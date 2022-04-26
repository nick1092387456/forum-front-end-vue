<template>
  <div class="container py-5">
    <Navbar />
    <NavTabs />
    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import NavTabs from '../components/NavTabs.vue'
import NewestRestaurants from '../components/NewestRestaurants'
import NewestComments from '../components/NewestComments'
import restaurantFeedAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'

export default {
  components: {
    Navbar,
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    }
  },
  created() {
    this.fetchFeeds()
  },
  methods: {
    async fetchFeeds() {
      try {
        const response = await restaurantFeedAPI.getFeeds()
        const { restaurants, comments } = response.data
        this.restaurants = restaurants
        this.comments = comments.filter(
          (comment) => comment.Restaurant && comment.text
        )
      } catch (err) {
        Toast.fire({ icon: 'error', title: '無法取得餐廳提要資料，請稍後在試' })
        console.log(err)
      }
    },
  },
}
</script>
