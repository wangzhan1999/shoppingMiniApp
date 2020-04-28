// pages/cart/cart-list/cart-list.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goods: {
      type: Object,
      value: {}
    },
    index: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    goods: app.globalData.cartList.find(item => item.iid === this.properties.goods.iid)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    checked(e) {
      const goods = this.data.goods
      goods.statu = !goods.statu
      const index = e.currentTarget.dataset.index
      app.changeGoodsState(index, goods)
      this.triggerEvent('oncheked')
    },
    addition(e) {
      const goods = this.data.goods
      if (goods.num < 30){
        goods.num += 1
      }else{
        wx.showToast({
          icon: "none",
          title: '最多只能购买30个哟~'
        })
      }
      
      const index = e.currentTarget.dataset.index
      app.changeGoodsState(index, goods)
      this.triggerEvent('addition')
    },
    subtraction(e) {
      const goods = this.data.goods
      const index = e.currentTarget.dataset.index
      if (goods.num > 1){
        goods.num -= 1
      } else if (goods.num <= 1){
        // this.triggerEvent('deleteGoods', index)
        goods.num = 1
      }
      app.changeGoodsState(index, goods)
      this.triggerEvent('subtraction')
    }
  }
})
