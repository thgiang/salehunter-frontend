<template>
  <div class="text-avatar" :style="style">
    {{ displayText }}
  </div>
</template>
<script>
export default {
  name: 'NameToAvatar',
  props: {
    name: {
      type: String,
      default: 'NA'
    },
    width: {
      type: String,
      default: '50px'
    },
    height: {
      type: String,
      default: '50px'
    },
    fontSize: {
      type: String,
      default: '0.8rem'
    },
    customStyle: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      displayText: '',
      bgColor: '#069255'
    }
  },
  computed: {
    style () {
      return 'width: ' + this.width + '; height: ' + this.height + '; background-color: ' + this.bgColor + '; font-size: ' + this.fontSize + '; ' + this.customStyle
    }
  },
  mounted () {
    const bgColors = ['#1abc9c', '#e74c3c', '#c0392b', '#2c3e50', '#d35400', '#8e44ad']
    // const bgColors = ['#909090']
    const strings = this.name.split(' ').reverse()
    let av = ''
    for (let i = 0; i < Math.min(strings.length, 2); i++) {
      av = strings[i].charAt(0) + av
    }
    this.bgColor = bgColors[av.charCodeAt(av.length - 1) % bgColors.length]
    this.displayText = av
  }
}
</script>

<style scoped>
.text-avatar {
  border-radius: 50%;
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
