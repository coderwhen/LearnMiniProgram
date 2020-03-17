// pages/input/input.js
Page({
  handleInput(event) {
    console.log('正在输入', event)
  },
  handleBlur(event) {
    console.log('输入框失焦', event)
  },
  handleFocus(event) {
    console.log('输入框聚焦', event)
  }
})