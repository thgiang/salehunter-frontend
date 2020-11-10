<template>
  <div class="container px-0">
    <div class="row no-gutters">
      <div class="col-md-12">
        <div id="login-fb-screen" class="header-screen">
          <div class="header">
            <h3>Login</h3>
          </div>
          <div class="form" style="text-align: center">
            <div v-if="isLoading">
              <img src="~assets/images/loading.svg">
            </div>
            <div v-if="!isLoading">
              <p>Liên kết tài khoản với Facebook để sử dụng</p>
              <div>
                <button class="loginBtn loginBtn--facebook" @click="login">
                  Đăng nhập với Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  components: {

  },
  data () {
    return {
      isLoading: true
    }
  },

  mounted () {
  },

  methods: {
    login () {
      window.FB.login((response) => {
        if (response.authResponse) {
          const accessToken = window.FB.getAuthResponse().accessToken

          this.$toast.success('Liên kết với Facebook thành công!')

          console.log('fb: ' + accessToken)

          window.FB.api('/me', async (response) => {
            console.log('Successful login for: ' + response.name)

            this.isLoading = true

            const login = await this.$axios.post(process.env.apiWhUrl + 'login', {
              id: response.id,
              name: response.name,
              accessToken,
              token: this.$auth.user.token
            })

            if (login.data.success === true) {
              this.$store.state.localStorage.wh_token = login.data.token

              this.$store.state.localStorage.fb_token = accessToken

              this.$store.state.localStorage.logoutFB = false

              this.$router.push('/pages')
            } else {
              console.log(login.data)
              this.$toast.error(login.data.message)
            }

            this.isLoading = false
          })
        } else {
          this.$toast.error('User cancelled login or did not fully authorize.')
          console.log('User cancelled login or did not fully authorize.')
        }
      }, { scope: 'public_profile,email,manage_pages,publish_pages,pages_messaging' })
    }
  }
}
</script>

<style>
  body {
    background: #f3f2f8;
  }
</style>
