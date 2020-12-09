<template>
  <div>
    <perfect-scrollbar>
      <div
        v-for="channel in $store.state.chat.channels"
        :key="channel.id"
        class="channel py-2 mx-1 px-2"
        :class="{'selected': channel.id === $store.state.chat.currentChannel.id}"
        @click="selectChannel(channel)"
      >
        <div class="channel__avatar pr-2">
          <!--<img :src="channel.avatar">-->
          <name-to-avatar :name="channel.name" width="40px" height="40px" font-size="1.2em" />
        </div>
        <div class="channel__info">
          <div class="channel__name">
            {{ channel.name }}
          </div>
          <div class="channel__last-message text-gray">
            {{ channel.last_message }} · {{ channel.last_message_time }}
          </div>
        </div>
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script>
import NameToAvatar from '../name-to-avatar.vue'

export default {
  name: 'ChannelList',
  components: { NameToAvatar },
  computed: {
    currentPage () {
      return this.$store.state.chat.currentPage
    }
  },
  watch: {
    currentPage () {
      this.$store.dispatch('chat/getChannels')
    }
  },
  mounted () {
    this.$store.dispatch('chat/getChannels')
  },
  methods: {
    selectChannel (channel) {
      this.$store.commit('chat/setCurrentChannel', channel)
    }
  }

}
</script>

<style scoped lang="scss">
.ps {
  height: calc(100vh - var(--header-height));
}

.channel.selected {
  background: var(--background-gray);
  border-radius: 10px;
}

.channel {
  display: flex;
  cursor: pointer;

  .channel__avatar {
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
