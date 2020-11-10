<template>
  <div>
    <Header />
    <Nuxt class="main-body" />
    <div id="fb-root"></div>
  </div>
</template>

<style>

</style>
<script>
import Header from '~/components/layout/header'
export default {
  components: { Header }
}
</script>
