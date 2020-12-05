<template>
  <div class="header px-md-2 pl-3 my-auto">
    <b-navbar toggleable="lg" type="light" variant="white" class="p-0">
      <b-navbar-brand to="/chat">
        <Logo />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="'/'">
            Home
          </b-nav-item>
          <b-nav-item :to="'/link/facebook'">
            Link Facebook
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <search />

          <!--
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">
              EN
            </b-dropdown-item>
            <b-dropdown-item href="#">
              ES
            </b-dropdown-item>
            <b-dropdown-item href="#">
              RU
            </b-dropdown-item>
            <b-dropdown-item href="#">
              FA
            </b-dropdown-item>
          </b-nav-item-dropdown>
-->
          <b-nav-item-dropdown v-if="loggedIn" right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              {{ $auth.user.name }}
            </template>
            <b-dropdown-item href="#">
              Profile
            </b-dropdown-item>
            <b-dropdown-item @click="logout">
              Đăng xuất
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Logo from '@/components/svg/logo'
import Search from '@/components/layout/search'

export default {
  name: 'Header',
  components: { Logo, Search },
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
        border-bottom: 1px solid var(--border-gray);
    }
</style>
