// components/tabControl/tabControl.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: [],
      observer: function(newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
      }
    }, 
  },
  // externalClasses: ['这里填写外部可控的样式类名'],
  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabContralTap(e) {
      let i = e.target.dataset.currentindex
      this.setData({
        currentIndex: i
      }) 
      this.triggerEvent('itemclick', { i, title: this.properties.titles[i]}, {})
    }
  }
})
