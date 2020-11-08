<template>
  <span class="icon-with-border" :style="style">
    <i :class="icon" />
  </span>
</template>

<script>
export default {
  name: 'IconWithBorder',
  props: {
    icon: {
      type: String,
      default: 'fas fa-sign-out-alt'
    },
    background: {
      type: String,
      default: 'var(--background-bold-gray)'
    },
    color: {
      type: String,
      default: 'var(--nearly-black)'
    },
    width: {
      type: String,
      default: '40px'
    },
    height: {
      type: String,
      default: '40px'
    },
    fontSize: {
      type: String,
      default: '1.3rem'
    },
    customStyle: {
      type: String,
      default: ''
    }
  },
  computed: {
    style () {
      return 'width: ' + this.width + '; height: ' + this.height + '; color: ' + this.color + '; background: ' + this.background + '; font-size: ' + this.fontSize + '; ' + this.customStyle
    }
  }
}
</script>

<style scoped>
.icon-with-border {
  display: flex;
  align-items: center;
  border-radius: 50%;
  justify-content: center;
}
</style>
