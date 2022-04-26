<template>
  <div class="container py-5">
    <Navbar />
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div
      class="card mb-3"
      style="max-width: 540px; margin: auto"
      v-for="restaurant in restaurants"
      :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="restaurant.image" />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              class="btn btn-primary mr-2"
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
            >
              Show
            </router-link>

            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger mr-2"
              @click.stop.prevent="deleteFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
import NavTabs from '../components/NavTabs.vue'

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: 'Dr. Buddy Bode',
      tel: '462.762.0280',
      address: '325 Schamberger Park',
      opening_hours: '08:00',
      description: 'Dolor est incidunt quo.\nPossimus voluptas aliquam ',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=93.1208181231111',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: true,
      FavoriteCount: 1,
    },
    {
      id: 49,
      name: 'Emory Grady PhD',
      tel: '1-759-047-3423 x3238',
      address: '940 Fahey Corner',
      opening_hours: '08:00',
      description: 'molestiae',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=82.48999336737828',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: 'Mitchell Ratke',
      tel: '768.798.8795 x0551',
      address: '7639 Keebler Bridge',
      opening_hours: '08:00',
      description: 'Maxime aperiam dicta eaque et beatae.\nQuos et quo ',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=98.8236779980993',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: 'Lucy Osinski',
      tel: '924-876-6350',
      address: '29609 Klein Flat',
      opening_hours: '08:00',
      description: 'consectetur',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=22.092318112553567',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: 'Estella Kerluke',
      tel: '019-905-5277 x557',
      address: '27824 Malachi Tunnel',
      opening_hours: '08:00',
      description: 'distinctio',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=26.932849900804644',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: 'Mia McClure',
      tel: '(653) 912-3604',
      address: '7011 Mattie Spur',
      opening_hours: '08:00',
      description: 'Rem perferendis expedita tempore laborum. Voluptas',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=47.490709321839894',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: 'Ivy Rau',
      tel: '(476) 990-3301 x379',
      address: '9636 Camron Lodge',
      opening_hours: '08:00',
      description: 'Sequi tempore sit.\nQuam sed incidunt quo.\nIn verit',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=58.93797171216866',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: 'Louvenia Langosh',
      tel: '625.397.1255',
      address: '74313 Litzy Highway',
      opening_hours: '08:00',
      description: 'possimus',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=34.080334252177735',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: 'Bertrand Pollich',
      tel: '079.088.4576',
      address: '3566 Lorenza Forges',
      opening_hours: '08:00',
      description: 'velit',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=63.00004019470591',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: 'Ceasar Hackett',
      tel: '124-152-2410 x216',
      address: '135 Heidenreich Parks',
      opening_hours: '08:00',
      description: 'Veniam est quo laudantium perferendis voluptatem d',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=73.84270749465081',
      viewCounts: 0,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
}

export default {
  components: {
    Navbar,
    NavTabs,
  },
  data() {
    return {
      restaurants: [],
    }
  },
  created() {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants() {
      const { restaurants } = dummyData
      this.restaurants = restaurants
    },
    addFavorite(restaurantId) {
      this.restaurants = this.restaurants
        .map((restaurant) => {
          if (restaurant.id !== restaurantId) return restaurant
          return {
            ...restaurant,
            FavoriteCount: restaurant.FavoriteCount + 1,
            isFavorited: true,
          }
        })
        .sort((x, y) => y.FavoriteCount - x.FavoriteCount)
    },
    deleteFavorite(restaurantId) {
      this.restaurants = this.restaurants
        .map((restaurant) => {
          if (restaurant.id !== restaurantId) return restaurant
          return {
            ...restaurant,
            FavoriteCount: restaurant.FavoriteCount - 1,
            isFavorited: false,
          }
        })
        .sort((x, y) => y.FavoriteCount - x.FavoriteCount)
    },
  },
}
</script>
