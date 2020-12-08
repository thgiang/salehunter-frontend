<template>
  <div class="chat">
    <div class="chat__left d-flex">
      <div style="flex: 0 0 60px; border-right: 1px solid var(--border-gray)">
        <fanpage-list />
      </div>
      <div style="flex: auto">
        <channel-list />
      </div>
    </div>
    <div class="chat__right">
      <channel-info class="chat__channel-info" />
      <div class="chat__main">
        <div class="chat__content">
          <channel-content />
        </div>
        <div class="chat__action">
          <channel-action />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ChannelList from '~/components/chat/channel-list'
import ChannelInfo from '~/components/chat/channel-info'
import ChannelContent from '~/components/chat/channel-content'
import ChannelAction from '~/components/chat/channel-action'
export default {
  components: { ChannelAction, ChannelContent, ChannelInfo, ChannelList }
}
</script>
<style lang="scss" scoped>
.chat {
  height: 100vh;
  overflow: hidden;
  background: #FFF;
  display: flex;
  .chat__left {
    flex: 0 1 25%;
    max-width: var(--sidebar-max-width);
    min-width: var(--sidebar-min-width);
    border-right: 1px solid var(--border-gray)
  }
  .chat__right {
    flex: auto;
    display: flex;
    flex-direction: column;
    .chat__channel-info {
      height: var(--header-height);
      display: flex;
      box-shadow: 0 3px 2px -2px var(--border-gray);
    }
    .chat__main {
      display: flex;
      flex-grow: 1;
      .chat__content {
        flex: auto;
        border-right: 1px solid var(--border-gray)
      }
      .chat__action {
        height: calc(100vh - var(--header-height) - var(--header-height));
        overflow: hidden;
        flex: 0 1 25%;
        max-width: var(--sidebar-max-width);
        min-width: var(--sidebar-min-width);
      }
    }
  }
}
</style>
