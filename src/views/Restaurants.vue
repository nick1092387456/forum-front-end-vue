<template>
  <div class="container py-5">
    <Navbar />

    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination
      v-if="totalPage.length > 1"
      :current-page="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
import RestaurantCard from '../components/RestaurantCard'
import RestaurantsNavPills from '../components/RestaurantsNavPills'
import RestaurantsPagination from '../components/RestaurantsPagination'
import restaurantAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: 'Kip Fadel',
      tel: '(050) 549-2350 x58395',
      address: '4243 Eve Drive',
      opening_hours: '08:00',
      description: 'Dignissimos amet nobis blanditiis exercitationem d',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=24.962483156034175',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
      isFavorited: true,
      isLiked: true,
    },
    {
      id: 2,
      name: 'Korey Mohr',
      tel: '895-870-8172 x87682',
      address: '1430 Konopelski Shoals',
      opening_hours: '08:00',
      description: 'Porro natus neque quam dolor id iusto omnis eaque ',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=78.99861989518119',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: 'Jaylan Hamill',
      tel: '1-150-123-7572',
      address: '8244 Schoen Groves',
      opening_hours: '08:00',
      description: 'Officiis eum libero mollitia quisquam dolorem plac',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=27.225975438796567',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 4,
      name: 'Damaris Stiedemann',
      tel: '628-147-9058',
      address: '4934 Lebsack Crossroad',
      opening_hours: '08:00',
      description: 'A exercitationem blanditiis. Dicta dicta quidem pr',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=5.575195283132661',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 5,
      name: 'Dallas Runte',
      tel: '965.163.3132 x462',
      address: '3084 Narciso Throughway',
      opening_hours: '08:00',
      description: 'architecto',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=75.28958925641238',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 6,
      name: 'Rosalia Russel',
      tel: '(707) 941-9991 x2928',
      address: '2355 Britney Cliffs',
      opening_hours: '08:00',
      description: 'Harum quia reprehenderit.\nAt voluptatibus dolor.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=92.84344262598326',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: 'Dr. Keeley Gleichner',
      tel: '1-060-297-0483',
      address: '82588 Adela Junctions',
      opening_hours: '08:00',
      description: 'Dolorem est sed error hic. Distinctio consequuntur',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=89.05119526711478',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: 'Arianna Hamill',
      tel: '279-024-6014 x3901',
      address: '0749 Ethan Manor',
      opening_hours: '08:00',
      description: 'consequatur qui nihil',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=92.9473097332517',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: 'Sim Beer',
      tel: '(856) 467-7087 x7081',
      address: '766 Fahey Heights',
      opening_hours: '08:00',
      description: 'Quae ut aut veritatis ad nostrum voluptate id est ',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=40.289205627388554',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: 'Nola Parker III',
      tel: '802-604-5153',
      address: '030 Jasen Mountains',
      opening_hours: '08:00',
      description: 'Quos sunt vel eos est vero officia dolore ut. Ipsa',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=10.182982185836309',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: '中式料理',
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
    },
    {
      id: 2,
      name: '日本料理',
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
    },
    {
      id: 3,
      name: '義大利料理',
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
    },
    {
      id: 4,
      name: '墨西哥料理',
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
    },
    {
      id: 5,
      name: '素食料理',
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
    },
    {
      id: 6,
      name: '美式料理',
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
    },
    {
      id: 7,
      name: '複合式料理',
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
    },
  ],
  categoryId: '',
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
}

export default {
  components: {
    Navbar,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    }
  },

  created() {
    const { page = '', categoryId = '' } = this.$route.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
  },
  beforeRouteUpdate(to, from, next) {
    const { page = '', categoryId = '' } = to.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
    next()
  },
  methods: {
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        const response = await restaurantAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId,
        })
        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next,
        } = response.data
        this.restaurants = restaurants
        this.categories = categories
        this.categoryId = categoryId
        this.page = page
        this.totalPage = totalPage
        this.prev = prev
        this.next = next
      } catch (err) {
        Toast.fire({ icon: 'error', title: '無法取得餐廳資料，請稍後在試' })
        console.log(err)
      }
    },
  },
}
</script>
