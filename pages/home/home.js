// pages/home/home.js
Page({
  handleTabChange(e) {
    console.log(e.detail)
  },
  handleChildComp() {
    let com = this.selectComponent('#tab')
    console.log(com.data.currentIndex)
  }
})