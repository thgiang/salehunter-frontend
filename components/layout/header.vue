<template>
  <div class="header">
    <div class="header-left">
      <div class="logo p-2 pl-3">
        <nuxt-link to="/chat">
          <Logo />
        </nuxt-link>
      </div>
      <div class="search pt-2 pr-2">
        <search v-if="this.$auth.loggedIn" />
      </div>
    </div>
    <div class="header-right">
      <user-info v-if="this.$auth.loggedIn" />
    </div>
    <div style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAOBAMAAAD3WtBsAAAAFVBMVEUAAAAAAAAAAAAAAAAAAAAAAAD29va1cB7UAAAAB3RSTlMCCwQHGBAaZf6MKAAAABpJREFUCNdjSGNIY3BhCGUQBEJjIFQCQigAACyJAjLNW4w5AAAAAElFTkSuQmCC)" />
  </div>
</template>

<script>
import UserInfo from '@/components/layout/user-info'
import Logo from '@/components/svg/logo'
import Search from '@/components/layout/search'

export default {
  name: 'Header',
  components: { UserInfo, Logo, Search },
  computed: {
    loggedIn () {
      return this.$auth.loggedIn
    }
  },
  watch: {
    loggedIn () {
      this.$forceUpdate()
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
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: var(--header-height);
        background: #FFF;
        z-index: 10;
        box-shadow: 0 4px 2px -2px var(--border-gray);
        display: flex;
    }
    .header-left {
      flex: 0 0 25%;
      max-width: 420px;
      min-width: 350px;
      display: flex;
      .logo {
        flex: 0 0 72px;
      }
      .search {
        flex: auto;
      }
    }
    .header-right {
      flex: auto;
    }
    .logo {
        img {
            height: 100%;
        }
    }
</style>
