const baseUrl = 'http://192.168.1.105:8000/api'

// export function http(options) {
//   return new Promise((r, e) => {
//     wx.request({
//       url: baseUrl + options.url,
//       method: options.method || 'get',
//       data: options.data || {},
//       success: r,
//       fail: e
//     })
//   })
// }



export function http(options) {
  return new Promise((r, e) => {
    wx.request({
      url: baseUrl + options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: function(res) {
        r(res.data)
      },
      fail: function(err) {
        e(err)
      }
    })
  })
}
