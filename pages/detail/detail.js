Page({
  onUnload: function () {
    const pages = getCurrentPages()
    const home = pages[pages.length - 2]

    home.setData({
      name: '呵呵呵'
    })
  }
})