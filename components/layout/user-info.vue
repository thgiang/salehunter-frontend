<template>
  <div class="user-info pr-3">
    <div class="user-info__name">
      <div class="d-inline-block">
        <name-to-avatar name="Trần Anh Vũ" width="28px" height="28px" />
      </div>
      <strong>Bố Gấu</strong>
    </div>

    <div class="user-info__buttons">
      <div class="user-info__button mx-1 user-info__setting">
        <a-dropdown :trigger="['click']" placement="bottomRight">
          <a class="ant-dropdown-link" @click="e => e.preventDefault()">
            <icon-with-border
              width="40px"
              height="40px"
              background="var(--background-bold-gray)"
              color="var(--nearly-black)"
              icon="fa fa-caret-down"
              font-size="1.3rem"
            />

          </a>
          <div slot="overlay" class="dropdown-content">
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
        </a-dropdown>
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
