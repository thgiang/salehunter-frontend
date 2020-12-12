<template>
  <perfect-scrollbar class="mt-2">
    <div
      v-for="channel in $store.state.chat.channels"
      :key="channel._id"
      class="channel py-2 mx-1 px-2"
      :class="{'selected': channel._id === $store.state.chat.currentChannel._id}"
      @click="selectChannel(channel)"
    >
      <div class="channel__avatar pr-2">
        <img
          :src="'https://graph.facebook.com/'+channel.fbFrom.fbId+'/picture?access_token='+$store.state.chat.currentPage.fbAccessToken"
        >
      </div>
      <div class="channel__info">
        <div class="channel__name">
          {{ channel.fbFrom.name }}
        </div>
        <div class="channel__last-message text-gray">
          <div class="channel__last-message--text">
            {{ (channel.lastMessage) ? channel.lastMessage.text : '' }} à thế à à à à á à thế à ừ đây là một bài hát vui dài dài
          </div>
          <div class="channel__last-message--time">
            · {{ moment(channel.updatedAt).fromNow() }}
          </div>
        </div>
      </div>
    </div>
  </perfect-scrollbar>
</template>

<script>
import moment from 'moment'
import NameToAvatar from '../name-to-avatar.vue'

export default {
  name: 'ChannelList',
  // eslint-disable-next-line vue/no-unused-components
  components: { NameToAvatar },
  data () {
    return {
      moment
    }
  },
  methods: {
    selectChannel (channel) {
      this.$store.commit('chat/setCurrentChannel', channel)
    }
  }

}
</script>

<style scoped lang="scss">
.channel__last-message {
  display: flex;
}
.channel__last-message--text {
  flex: auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.channel__last-message--time {
  white-space: nowrap;
}

.ps {
  height: calc(100vh - var(--header-height));
  width: 100%;
}

.channel.selected {
  background: var(--background-gray);
  border-radius: 10px;
}

.channel {
  display: flex;
  cursor: pointer;

  .channel__info {
    flex: auto;
    overflow: hidden;
  }

  .channel__avatar {
    flex: 0 0 60px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }

  .channel__name {
    color: black;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
