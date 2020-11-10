window.fbAsyncInit = function () {
  // eslint-disable-next-line no-undef
  FB.init({
    appId: process.env.FB_APP_ID,
    autoLogAppEvents: process.env.FB_APP_SECRET,
    xfbml: true,
    version: process.env.FB_VERSION,
    cookie: false,
    status: true
  })
}

const fjs = document.getElementsByTagName('script')[0]
if (!document.getElementById('facebook-js-sdk')) {
  const js = document.createElement('script')
  js.id = 'facebook-js-sdk'
  js.src = 'https://connect.facebook.net/en_US/sdk.js'
  fjs.parentNode.insertBefore(js, fjs)
}
