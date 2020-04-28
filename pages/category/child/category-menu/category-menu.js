Component({
  /**
   * 组件的属性列表
   */
  properties: {
    menulist: {
      type: Array,
      value:[]
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e) {
      const currentIndex = e.currentTarget.dataset.index
      this.setData({
        currentIndex
      })
      this.triggerEvent('tapmenu', { currentIndex }, {})
    } 
  }
})
