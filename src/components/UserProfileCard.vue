<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="user.image" width="300" height="300" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ user.name }}</h5>
          <p class="card-text">{{ user.email }}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ user.commentsLength }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ user.favoritedRestaurantsLength }}</strong> 收藏的餐廳
            </li>
            <li>
              <strong>{{ user.followingsLength }}</strong> followings (追蹤者)
            </li>
            <li>
              <strong>{{ user.followersLength }}</strong> followers (追隨者)
            </li>
          </ul>
          <p>
            <template v-if="isCurrentUser">
              <a href="/users/2/edit"
                ><button type="submit" class="btn btn-primary">edit</button></a
              >
            </template>
            <template v-else>
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
            </template>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
    isCurrentUser: {
      type: Boolean,
      require: true,
    },
  },
  data() {
    return { user: this.initialUser }
  },
  methods: {
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
