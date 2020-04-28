// pages/cart/child/cart-subnav/cart-subnav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isCheckedAll: {
      type: Boolean
    },
    totalCounter: {
      type: Number,
    },
    totalPrice: {
      type: Number,
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
    checkedAll(){
      this.triggerEvent('checkedAll')
    },
    buy() {
      this.triggerEvent('buy')
    }
  }
})
