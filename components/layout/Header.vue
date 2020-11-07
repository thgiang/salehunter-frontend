<template>
  <div class="header">
    <div class="logo p-2">
      <nuxt-link to="/chat">
        <img src="@/assets/logo.png" alt="logo">
      </nuxt-link>
    </div>
    <div class="search p-2">
      Search barr
    </div>
    <div class="user-info p-2">
      User info
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
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
        box-shadow: 0 0 8px var(--shadow-color);
        display: flex;
    }
    .logo {
        flex: 1;
        img {
            height: 100%;
        }
    }
    .search {
        flex: 8
    }
    .user-info {
        flex: 3;
    }
</style>
