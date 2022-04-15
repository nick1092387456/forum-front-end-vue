<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <router-link :to="{ name: 'users-profile', params: { id: user.id } }">
          <img :src="user.image" width="140" height="140" />
        </router-link>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary"
          >追蹤人數：{{ user.FollowerCount }}</span
        >
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            type="button"
            class="btn btn-danger"
            @click.stop.prevent="deleteFollow(user.id)"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="addFollow(user.id)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import NavTabs from '../components/NavTabs'

const dummyData = {
  users: [
    {
      id: 1,
      name: 'root',
      email: 'root@example.com',
      password: '$2a$10$4CP0TARxPqzDP4EoM45pyezwbK0Ea14oda2SSFLaIL.flfmvv7r3O',
      isAdmin: true,
      image: 'https://i.imgur.com/58ImzMM.png',
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      Followers: [],
      FollowerCount: 1,
      isFollowed: true,
    },
    {
      id: 2,
      name: 'user1',
      email: 'user1@example.com',
      password: '$2a$10$ksqCnkzIO9N9jw80hTY6Xes01kJ1.S/PM4aMXaesyIRgthSwDSVLe',
      isAdmin: false,
      image: null,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: 'user2',
      email: 'user2@example.com',
      password: '$2a$10$4nrzj/KPPGL8IcAKwy6yM.Rz7rAcE5kSHlZq4E0LuHaiPerE5evpG',
      isAdmin: false,
      image: null,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
}
export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      users: [],
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      const { users } = dummyData
      this.users = users
    },
    addFollow(userId) {
      this.users = this.users.map((user) => {
        if (user.id !== userId) return user
        else {
          return {
            ...user,
            FollowerCount: user.FollowerCount + 1,
            isFollowed: true,
          }
        }
      })
    },
    deleteFollow(userId) {
      this.users = this.users.map((user) => {
        if (user.id !== userId) return user
        else {
          return {
            ...user,
            FollowerCount: user.FollowerCount - 1,
            isFollowed: false,
          }
        }
      })
    },
  },
}
</script>
