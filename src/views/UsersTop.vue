<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <UserTopCard v-for="user in users" :key="user.id" :initial-user="user" />
    </div>
  </div>
</template>
<script>
import NavTabs from '../components/NavTabs'
import UserTopCard from '../components/UserTopCard'

const dummyData = {
  users: [
    {
      id: 1,
      name: 'root',
      email: 'root@example.com',
      password: '$2a$10$4CP0TARxPqzDP4EoM45pyezwbK0Ea14oda2SSFLaIL.flfmvv7r3O',
      isAdmin: true,
      image: null,
      createdAt: '2022-02-16T09:38:00.000Z',
      updatedAt: '2022-02-16T09:38:00.000Z',
      Followers: [],
      FollowerCount: 0,
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
    UserTopCard,
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
  },
}
</script>
