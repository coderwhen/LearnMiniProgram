// component/my-prop-com/my-prop-com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,       //数据类型
      value: 'asdasdas',      //默认值
      observer(newValue, oldValue) {   //数据监听
        console.log(newValue, oldValue)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})