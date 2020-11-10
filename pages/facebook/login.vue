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
              Loading...
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

  auth: false,
  components: {

  },
  data () {
    return {
      isLoading: false
    }
  },

  mounted () {
  },

  methods: {
    login () {
      window.FB.login((response) => {
        if (response.authResponse) {
          const accessToken = window.FB.getAuthResponse().accessToken

          alert('Liên kết với Facebook thành công!')

          console.log('fb: ' + accessToken)

          window.FB.api('/me', (response) => {
            console.log('Successful login for: ' + response.name)
          })
        } else {
          alert('User cancelled login or did not fully authorize.')
          console.log('User cancelled login or did not fully authorize.')
        }
      }, { scope: 'public_profile,email,pages_show_list,pages_messaging' })
    }
  }
}
</script>

<style>
  body {
    background: #f3f2f8;
  }
</style>
