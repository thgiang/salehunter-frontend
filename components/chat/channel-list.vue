<template>
  <div class="channels">
    <div
      v-for="channel in $store.state.chat.channelList"
      :key="channel.id"
      class="channel py-2"
      :class="{'selected': channel.id === 2}"
    >
      <div class="channel__avatar pr-2">
        <img :src="channel.avatar">
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
  </div>
</template>

<script>
export default {
  name: 'ChannelList',

  mounted () {
    this.$store.dispatch('chat/getChannelList')
  }

}
</script>

<style scoped lang="scss">
    .channel.selected {
        margin-left: -0.5rem;
        padding-left: 0.5rem;
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
