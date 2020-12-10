<template>
  <div>
    <div class="fanpage-list d-flex flex-column">
      <perfect-scrollbar>
        <div
          v-for="page in pages"
          :key="page.id"
          class="fanpage cursor-pointer mx-auto py-2"
          :class="{'active': $store.state.chat.currentPage._id === page._id}"
          @click="selectPage(page)"
        >
          <div class="fanpage-avatar-bounder">
            <img class="fanpage-avatar" :src="'http://graph.facebook.com/'+page.fbPageId+'/picture?type=square'">
          </div>
          <div class="new-message-count">
            {{ parseInt(page.fbPageId) % 29 + 1 }}
          </div>
        </div>
      </perfect-scrollbar>
    </div>
    <div class="fanpages-setting pt-2 cursor-pointer">
      <i class="fas fa-cog" style="font-size: 1.5rem" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FanpageList',
  data () {
    return {
      settings: {
        suppressScrollY: false,
        suppressScrollX: false,
        wheelPropagation: false
      },
      pages: []
    }
  },
  mounted () {
    this.getPages()
  },
  methods: {
    selectPage (page) {
      this.$store.dispatch('chat/changeCurrentPage', page)
    },
    async getPages () {
      if (this.$store.state.chat.pages.length === 0) {
        await this.$store.dispatch('chat/getPages')
      }
      this.pages = this.$store.state.chat.pages
    }
  }
}
</script>

<style scoped>
/* container */
.fanpage-list {
  width: 60px;
  height: calc(100vh - var(--header-height) - 40px);
  overflow: hidden;
}

.fanpages {
  flex: auto;
  display: flex;
  flex-direction: column;
}

.fanpages-setting {
  border-top: 1px solid var(--border-gray);
  display: block;
  width: 100%;
  text-align: center;
  flex: 0 0 45px;
}

.fanpage {
  display: block;
  position: relative;
  width: 50px;
}

.fanpage.active .fanpage-avatar, .fanpage:hover .fanpage-avatar {
  border: 2px solid var(--danger);
}

.fanpage-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}

.new-message-count {
  position: absolute;
  right: 5px;
  top: 3px;
  width: 20px;
  height: 20px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
  background: #d52a1a;
  color: #FFF;
  text-align: center;
  display: block;
}
</style>
