//app.js
App({
  onLaunch: function () {
   
  },
  onShow() {
    wx.getUserInfo({
      success(res) {
        console.log(res)
      }
    })
  },
  globalData: {
    userInfo: null
  }
})