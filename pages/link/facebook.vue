<template>
  <div class="container">
    <div class="card shadow my-3">
      <div class="card-body p-4">
        <div v-if="isLoading">
          Đang liên kết với Facebook...
        </div>
        <div v-if="!isLoading">
          <div class="fanpage-list">
            <template v-if="pages.length === 0">
              <empty title="Ohh... Danh sách Fanpage đang trống" description="Bạn vui lòng liên kết Facebook Fanpage để bắt đầu sử dụng" />
            </template>
            <template v-else>
              <div class="row">
                <div class="col-md-12">
                  <h3 class="mt-0 pt-0 pb-2">
                    Danh sách Fanpage đã kết nối
                  </h3>
                </div>
                <div v-for="(page) in pages" :key="page.fbPageId" class="col-md-4 mb-2">
                  <div class="fanpage-card card">
                    <div class="card-body p-2">
                      <div class="fanpage-actions">
                        <i class="far fa-trash-alt cursor-pointer" @click="deletePage(page.fbPageId)" />
                      </div>
                      <div class="d-flex">
                        <div class="fanpage-card__avatar mr-2">
                          <img :src="'https://graph.facebook.com/'+page.fbPageId+'/picture'">
                        </div>
                        <div class="d-flex flex-column fanpage-card__info">
                          <div :title="page.fb_page_name" class="fanpage-card__name">
                            {{ page.fbPageName }}
                          </div>
                          <small class="fanpage-card__description">
                            {{ page.updatedAt }}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
          <hr>
          <div class="text-center">
            <button
              class="btn btn-primary"
              @click="login"
            >
              <i class="fab fa-facebook" /> Liên kết Facebook Fanpage
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Empty from '@/components/shared/empty'
export default {
  components: {
    Empty

  },
  data () {
    return {
      pages: [],
      isLoading: true
    }
  },

  mounted () {
    this.getPages()
  },
  methods: {
    async deletePage (fbPageId) {
      const response = await this.$axios.get('/page/delete', {
        params: {
          fbPageId
        }
      }).catch((e) => {
        console.log(e)
      })
      if (response && response.data.success) {
        this.getPages()
      }
    },
    async getPages () {
      this.pages = this.$store.state.chat.pages
      if (this.pages.length === 0) {
        await this.$store.dispatch('chat/getPages')
        this.pages = this.$store.state.chat.pages
      }

      this.isLoading = false
    },
    login () {
      window.FB.login(async (response) => {
        if (response.authResponse) {
          const accessToken = window.FB.getAuthResponse().accessToken

          this.isLoading = true

          const response = await this.$axios.get('pages/add', {
            params: {
              access_token: accessToken
            }
          })
          if (response && response.data.success) {
            this.pages = response.data.data
          }

          this.isLoading = false
        } else {
          alert('Bạn đã hủy thao tác liên kết hoặc quá trình liên kết chưa thành công. Vui lòng thực hiện lại và cho phép ứng dụng tất cả các quyền được yêu cầu.')
        }
      }, { scope: 'public_profile,email,pages_show_list,pages_manage_posts,pages_messaging,pages_manage_metadata,pages_manage_engagement' })
      /*, pages_manage_metadata,pages_manage_engagement,pages_read_engagement,pages_read_user_content */
    }
  }
}
</script>

<style lang="scss">
.fanpage-actions {
  position: absolute;
  right: 6px;
  top: 3px;position: absolute;
  right: 6px;
  top: 3px;
  color: #999;
  :hover {
    color: #444
  }
}

.fanpage-card__info {
  overflow: hidden;
  .fanpage-card__name {
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.fanpage-card__avatar {
  flex: 0 0 50px;
  width: 50px;
  height: 50px;
  border: 1px solid #EEE;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 50px;
    height: 50px;
  }
}
</style>
