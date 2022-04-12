<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: 'Kip Fadel',
    tel: '(050) 549-2350 x58395',
    address: '4243 Eve Drive',
    opening_hours: '08:00',
    description:
      'Dignissimos amet nobis blanditiis exercitationem deleniti ipsum ullam voluptates et. Dolorem labore qui et voluptas voluptate harum voluptates. Molestiae saepe nam officiis illo. Dolores est sed mollitia aperiam sed est. Eaque sed dignissimos sint eos.',
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
    Comments: [
      {
        id: 1,
        text: 'Sit error distinctio.',
        UserId: 2,
        RestaurantId: 1,
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
        User: {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password:
            '$2a$10$ksqCnkzIO9N9jw80hTY6Xes01kJ1.S/PM4aMXaesyIRgthSwDSVLe',
          isAdmin: false,
          image: null,
          createdAt: '2022-02-16T09:38:00.000Z',
          updatedAt: '2022-02-16T09:38:00.000Z',
        },
      },
      {
        id: 51,
        text: 'Illum enim facilis veritatis neque minima ex non provident voluptatem.',
        UserId: 3,
        RestaurantId: 1,
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
        User: {
          id: 3,
          name: 'user2',
          email: 'user2@example.com',
          password:
            '$2a$10$4nrzj/KPPGL8IcAKwy6yM.Rz7rAcE5kSHlZq4E0LuHaiPerE5evpG',
          isAdmin: false,
          image: null,
          createdAt: '2022-02-16T09:38:00.000Z',
          updatedAt: '2022-02-16T09:38:00.000Z',
        },
      },
      {
        id: 101,
        text: 'Dolorem dolor quasi laborum eum ut.',
        UserId: 2,
        RestaurantId: 1,
        createdAt: '2022-02-16T09:38:00.000Z',
        updatedAt: '2022-02-16T09:38:00.000Z',
        User: {
          id: 2,
          name: 'user1',
          email: 'user1@example.com',
          password:
            '$2a$10$ksqCnkzIO9N9jw80hTY6Xes01kJ1.S/PM4aMXaesyIRgthSwDSVLe',
          isAdmin: false,
          image: null,
          createdAt: '2022-02-16T09:38:00.000Z',
          updatedAt: '2022-02-16T09:38:00.000Z',
        },
      },
    ],
  },
}

export default {
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        commentsLength: 0,
        viewCounts: 0,
      },
    }
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log('restaurantId : ', restaurantId)
      const { id, name, Category, Comments, viewCounts } = dummyData.restaurant

      this.restaurant = {
        id,
        name,
        categoryName: Category ? Category.name : '未分類',
        commentsLength: Comments.length,
        viewCounts: viewCounts,
      }
    },
  },
}
</script>
