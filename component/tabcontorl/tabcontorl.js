// component/tabcontorl/tabcontorl.js
Component({
  properties: {
    tabs: {
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    tabItemClick(event) {
      let index = event.currentTarget.dataset.index
      if(this.data.currentIndex!=index){
        this.setData({
          currentIndex: index
        })
        this.triggerEvent('tabChange',this.properties.tabs[index])
      }
    }
  }
})