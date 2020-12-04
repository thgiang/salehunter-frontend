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
                    Danh sách Fanpage đã kết nốih
                  </h3>
                </div>
                <div v-for="(page) in pages" :key="page.fbPageId" class="col-md-4 mb-2">
                  <div class="fanpage-card card">
                    <div class="card-body p-2">
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

  auth: false,
  components: {
    Empty

  },
  data () {
    return {
      pages: [],
      isLoading: false
    }
  },

  mounted () {
    this.getPages()
  },

  methods: {
    async getPages () {
      const response = await this.$axios.get('pages')
      if (response && response.data.success) {
        this.pages = response.data.data
      }
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

          // window.FB.api('/me', (response) => {
          //   console.log('Successful link for: ' + response.name)
          // })
        } else {
          alert('User cancelled link or did not fully authorize.')
          console.log('User cancelled link or did not fully authorize.')
        }
      }, { scope: 'public_profile,email,pages_show_list,pages_messaging' })
    }
  }
}
</script>

<style lang="scss">
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
