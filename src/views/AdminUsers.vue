<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.name }}</td>
          <td>
            <button
              v-show="!user.isAdmin"
              @click.stop.prevent="toggleAdmin(user.id)"
              type="button"
              class="btn btn-link"
            >
              set as admin
            </button>
            <button
              v-if="user.id !== currentUser.id"
              v-show="user.isAdmin"
              @click.stop.prevent="toggleAdmin(user.id)"
              type="button"
              class="btn btn-link"
            >
              set as user
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '../components/AdminNav.vue'

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
    },
  ],
}

const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true,
  },
  isAuthenticated: true,
}

export default {
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
      currentUser: {
        id: -1,
        name: '',
        email: '',
        image: '',
        isAdmin: false,
      },
      isAuthenticated: false,
    }
  },
  created() {
    this.fetchUsers()
    this.fetchUser()
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users.map((user) => ({
        ...user,
      }))
    },
    fetchUser() {
      this.currentUser = {
        ...this.currentUser,
        ...dummyUser.currentUser,
      }
      this.isAuthenticated = dummyUser.isAuthenticated
    },
    toggleAdmin(userId) {
      this.users = this.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin,
          }
        } else {
          return user
        }
      })
    },
  },
}
</script>
