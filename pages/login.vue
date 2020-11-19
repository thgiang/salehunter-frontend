<template>
  <div class="login-section">
    <div class="container">
      <div class="row">
        <div class="col-sm-7">
          <h1>SaleHunter - Thợ săn sale</h1>
          <!--<p>MockAPI is a free tool that helps you create draft API. We have flexible Validator and smart Generator that help you create API very quickly. Response data look like real ;)<br><br>
            When do we need to use MockAPI?<br>
            When you want to create a demo API set before coding it in practice. The mobile team can call this draft API during the Back-end team writing actual
            API.</p>
            -->
          <p>
            SaleHunter là công cụ hỗ trợ người bán hàng trên Fanpage Facebook một cách toàn diện với các tính năng xuyên suốt từ khi bắt đầu tới khi kết thúc 1 đơn hàng.<br><br>
            - Chat, trả lời comment của nhiều Fanpage trên 1 màn hình duy nhất<br>
            - Gán nhãn, tạo ghi chú, tra cứu lịch sử mua hoặc bom của khách<br>
            - Tích hợp các đơn vị vận chuyển để tạo và theo dõi trạng thái đơn hàng<br>
            - Thống kê doanh thu, và các công cụ sau bán hàng khác<br>
          </p>
        </div>
        <div class="col-sm-5">
          <form class="login-form p-4 bg-white text-dark">
            <div class="form-group">
              <label for="email">Địa chỉ email</label>
              <input
                id="email"
                v-model="email"
                type="email"
                name="email"
                class="form-control"
                placeholder="Your email"
                @keyup.enter="login"
              >
            </div>
            <div class="form-group">
              <label for="password">Mật khẩu</label>
              <input
                id="password"
                v-model="password"
                name="password"
                type="password"
                class="form-control"
                placeholder="Password"
                @keyup.enter="login"
              >
            </div>
            <button ref="login" type="button" class="btn btn-success col-12 mb-2" @click="login()">
              Login
            </button>
            <span class="text-danger">{{ notice }}</span>
            <!--
            <nuxt-link to="/">Create a new account</nuxt-link>
            <nuxt-link to="/" class="float-right">Forgot password?</nuxt-link>
            -->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  auth: false,
  middleware: ['isLoggedIn'],
  data () {
    return {
      notice: '',
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$refs.login.textContent = 'Đang đăng nhập'
      const that = this
      this.$auth.loginWith('laravelJWT', {
        data: {
          email: this.email,
          password: this.password
        }
      }).then(function (response) {
        console.log(response)
        if (that.$auth.loggedIn) {
          that.$axios.setHeader('Authorization', response.access_token)
          window.location.reload()
        } else {
          that.$refs.login.textContent = 'Đăng nhập'
          that.notice = 'Đăng nhập không thành công'
        }
      }).catch(function () {
        that.$refs.login.textContent = 'Đăng nhập'
        that.notice = 'Đăng nhập không thành công.'
      })
    }
  }
}
</script>
<style scoped>
  .login-section {
    color: hsla(0, 0%, 100%, 0.6);
    background: #2b3137 url('~assets/images/simple-codelines.svg') center 10%;
    background-size: cover;
    padding: 120px 0;
  }
  h1 {
    font-size: 50px;
    color: #FFF;
  }
  .login-form {
    border-radius: 5px;
  }
</style>
