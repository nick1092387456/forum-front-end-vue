<template>
  <div class="container py-5">
    <Navbar />
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
import Navbar from '../components/Navbar'
import NavTabs from '../components/NavTabs.vue'
import usersTopAPI from '../apis/users'
import { Toast } from '../utils/helpers'

export default {
  components: {
    Navbar,
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
    async fetchUsers() {
      try {
        const { data } = await usersTopAPI.getTopUsers()
        const { users } = data
        this.users = users
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '抓取最歡迎使用者的資料失敗，請稍後再試',
        })
        console.log(error)
      }
    },
    async addFollow(userId) {
      try {
        const { data } = await usersTopAPI.addFollow({ userId })
        if (data.status !== 'success') throw new Error(data.message)
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
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '新增追蹤失敗，請稍後再試',
        })
        console.log(error)
      }
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
