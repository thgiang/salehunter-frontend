<template>
  <div>
    <perfect-scrollbar>
      <div
        v-for="channel in $store.state.chat.channels"
        :key="channel._id"
        class="channel py-2 mx-1 px-2"
        :class="{'selected': channel._id === $store.state.chat.currentChannel._id}"
        @click="selectChannel(channel)"
      >
        <div class="channel__avatar pr-2">
          <name-to-avatar :name="channel.fbFrom.name" width="40px" height="40px" font-size="1.2em" />
        </div>
        <div class="channel__info">
          <div class="channel__name">
            {{ channel.fbFrom.name }}
          </div>
          <div class="channel__last-message text-gray">
            {{ (channel.lastMessage) ? channel.lastMessage.text : '' }} · {{ moment(channel.updatedAt).fromNow() }}
          </div>
        </div>
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script>
import moment from 'moment'
import NameToAvatar from '../name-to-avatar.vue'
export default {
  name: 'ChannelList',
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
