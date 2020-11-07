<template>
  <div class="chat">
    <div class="chat__channel-list p-2">
      channel list
    </div>
    <div class="chat__body">
      <div class="chat__content p-2">
        Content
      </div>
      <div class="chat__action p-2">
        Action
      </div>
    </div>
  </div>
</template>
<script>
export default {
}

</script>
<style lang="scss" scoped>
.chat {
  height: calc(100vh - var(--header-height));
  background: #FFF;
  display: flex;
  .chat__channel-list {
    flex: 0 1 420px;
    border-right: 1px solid var(--border-gray)
  }
  .chat__body {
    flex: auto;
    display: flex;
    .chat__content {
      flex: auto;
      border-right: 1px solid var(--border-gray)
    }
    .chat__action {
      flex: 0 1 300px;
    }
  }
}
</style>
