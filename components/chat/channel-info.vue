<template>
  <div id="channel-info" class="d-flex align-items-center w-100 py-2">
    <div class="channel-info__user d-flex align-items-center pl-3">
      <div class="channel-info__avatar pr-2">
        <img
          src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-1/cp0/p60x60/121145435_2692479717635717_1162425011590618119_n.jpg?_nc_cat=108&ccb=2&_nc_sid=7206a8&_nc_ohc=GMDiKOByW2YAX-AvuwN&_nc_ht=scontent.fhan2-3.fna&tp=27&oh=9f335afbf8c1211f17162241b20681c1&oe=5FCC2616"
        >
      </div>
      <div class="channel-info__name">
        <strong class="d-block">{{ currentChannelName }}</strong>
        <small class="text-gray">Đang hoạt động trên Messenger</small>
      </div>
    </div>

    <div class="channel-info__buttons pl-2 pr-3">
      <div class="channel-info__button selected text-center mr-3">
        <i class="far fa-file-alt" />
        <span class="channel-info__button-text">
          Thông tin
        </span>
      </div>
      <div class="channel-info__button text-center mr-3">
        <i class="fas fa-shipping-fast" />
        <span class="channel-info__button-text">
          Chốt đơn
        </span>
      </div>
      <div class="channel-info__button text-center">
        <i class="fa fa-bug" />
        <span class="channel-info__button-text">
          Báo xấu
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChannelInfo',
  computed: {
    currentChannelName () {
      return this.$store.state.chat.currentChannel.name
    }
  },
  watch: {
    currentChannelName () {
      this.$forceUpdate()
    }
  }
}
</script>

<style scoped lang="scss">
  #channel-info {
    justify-content: space-between;
  }

  .channel-info__buttons {
    cursor: pointer;
    color: var(--text-gray);
    display: flex;
    .channel-info__button.selected, .channel-info__button:hover {
      color: var(--blue-color);
      .channel-info__button-text {
        color: #000;
      }
    }
    .channel-info__button-text {
      font-size: 1rem;
      color: var(--text-gray)
    }
  }
  .channel-info__avatar img {
    border-radius: 50%;
    height: 40px;
    width: 40px;
  }
</style>
