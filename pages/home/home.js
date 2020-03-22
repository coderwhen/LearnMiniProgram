// pages/home/home.js
Page({

  showToast() {

    //显示toast
    wx.showToast({
      title: '加载中', //显示内容
      duration: 2000, //时间
      icon: 'none' || 'success' || 'loading',
      mask: true, //是否显示遮罩层
      //image: '',//显示自己的图标
      success(res) {
        console.log('toast success')
      },
      fail() {
        console.log('toast fail')
      },
      complete() {
        console.log('toast complate')
      }
    })

    setTimeout(() => {
      //隐藏toast
      wx.hideToast()
      console.log('asd')
    }, 1000)
  },
  showModal() {
    wx.showModal({
      title: '提示',
      content: '是否退出',
      cancelText: '退出', //取消的文字
      cancelColor: 'red', //取消的颜色
      confirmText: '确定', //确定的文字
      confirmColor: '#f00', //确定的颜色
      showCancel: true, //是否显示取消
      success(res) {
        if (res.cancel) {
          console.log('点击了取消')
        }
        if (res.confirm) {
          console.log('点击了确定')
        }
      },
      fail(err) {
        console.log('showModel fail')
      },
      complete() {
        console.log('showModel complete')
      }
    })
  },
  showLoading() {


    //显示loading
    wx.showLoading({
      title: '加载中',
      mask: true
    })


    setTimeout(() => {
      //隐藏loading
      wx.hideLoading()
    }, 2000)
  },

  showAction() {
    let itemList = ['选项1', '选项2']
    wx.showActionSheet({
      itemList,
      itemColor: '#f00', //选项的颜色
      success(res) {
        console.log('点击的是' + itemList[res.tapIndex])
      }
    })
  }
})