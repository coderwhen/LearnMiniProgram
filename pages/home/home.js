// pages/home/home.js
Page({
  data: {
    counter: 0
  },
  addHandle(event) {
    console.log('我是子组件传递的参数', event.detail)
    this.setData({
      counter: this.data.counter + 1
    })
  }
})