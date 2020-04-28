// components/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    },
    currentIndex: {
      type: Number
    }
  },
  observers: {
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
    itemclick(e) {
      let index = e.currentTarget.dataset.currentindex
      this.triggerEvent('tabbarclick', index)
    },
  },
  options: {
  }
})
