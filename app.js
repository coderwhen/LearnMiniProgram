//app.js

import {http} from './network/http.js' 


App({
  onLaunch: function () {
    http({
      url: '/home/getgoodslist',
      data: {
        page: 0
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  globalData: {
    userInfo: null
  }
})