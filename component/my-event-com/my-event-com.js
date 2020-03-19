// component/my-event-com/my-event-com.js
Component({
  methods: {    //组件中的事件需定义到methods里面
    handleClick() {
      console.log('子组件事件')
      this.triggerEvent('addHandle',{
        name: 'coderwhen',
        age: 20
      },{})
    }
  }
})
