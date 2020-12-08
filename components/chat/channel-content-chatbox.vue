<template>
  <div class="chatbox">
    <icon-sticker />
    <icon-image />
    <Editable
      v-model="text"
      class="chatbox__input px-3 mb-1"
      data-placeholder="Nhập tin nhắn..."
    />
    <icon-send />
  </div>
</template>
<script>
import IconSticker from '@/components/svg/icon-sticker'
import IconImage from '@/components/svg/icon-image'
import IconSend from '@/components/svg/icon-send'
import Editable from '../Editable'

export default {
  name: 'ChannelContentChatbox',
  components: {
    Editable,
    IconSend,
    IconImage,
    IconSticker
  },
  data () {
    return {
      text: ''
    }
  }
}
</script>

<style scoped>
  .chatbox {
    display: flex;
    align-items: flex-end;
  }

  .chatbox__input {
    flex: auto;
    border-radius: 15px;
    background: var(--background-gray);
    border: none;
    min-height: 30px;
    width: calc(100% - 108px); /* 108px vi co 3 cai nut) */
    user-select: text;
    white-space: pre-wrap;
    overflow-wrap: break-word;
  }
  .chatbox__input:empty:before {
    content: attr(data-placeholder);
  }
  .chatbox__input:focus {
    border: 0;
    outline: 0;
  }
</style>
