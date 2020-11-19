<template>
  <div class="user-info pr-3">
    <div class="user-info__name">
      <div class="d-inline-block">
        <name-to-avatar :name="$auth.user.name" width="28px" height="28px" />
      </div>
      <strong>{{ $auth.user.name }}</strong>
    </div>

    <div class="user-info__buttons">
      <div class="user-info__button mx-1 user-info__setting">
        <div class="cursor-pointer" @click="() => { showUserMenu = !showUserMenu}">
          <icon-with-border
            width="40px"
            height="40px"
            background="var(--background-bold-gray)"
            color="var(--nearly-black)"
            icon="fa fa-caret-down"
            font-size="1.3rem"
          />
        </div>
        <div v-show="showUserMenu" class="dropdown-content">
          <div class="user-info__menu-item" @click="logout()">
            <icon-with-border
              width="30px"
              height="30px"
              background="var(--background-bold-gray)"
              color="var(--nearly-black)"
              icon="fa fa-sign-out-alt"
              font-size="1rem"
              class="mr-2"
            />
            <strong>Đăng xuất</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconWithBorder from '../icon-with-border'
import NameToAvatar from '../name-to-avatar'
export default {
  name: 'UserInfo',
  components: { NameToAvatar, IconWithBorder },
  data () {
    return {
      showUserMenu: false
    }
  },
  methods: {
    logout () {
      if (this.$auth.loggedIn) {
        this.$auth.logout().then((r) => {
          window.location.reload()
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.user-info__button {
  position: relative;
}
.dropdown-content {
  position: absolute;
  right: 0;
  width: 200px;
  margin-top: 5px;
}
  .user-info__menu-item {
    display: flex;
    align-items: center;
    min-width: 120px;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
  }
  .user-info__menu-item:hover {
    background: var(--background-gray);
  }

  .user-info {
    justify-content: flex-end;
    display: flex;
    align-items: center;
    height: 100%;
    .user-info__name {
      align-items: center;
      img {
        border: 1px solid var(--border-gray);
        border-radius: 50%;
        height: 28px;
      }
    }
    .user-info__buttons {
      .user-info__button a {
        color: var(--nearly-black)
      }
    }
  }
</style>
