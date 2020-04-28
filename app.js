App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
  },
  onShow: function (options) {},
  onHide: function () {},
  addToCart(product) {
    const oldProduct = this.globalData.cartList.find(item => item.iid === product.iid)
    if(oldProduct) {
      oldProduct.num += 1
    }else{
      this.globalData.cartList.push(product)
    }
    // 购物车回调函数
    if(this.addCartCallBack) {
      this.addCartCallBack()
    }
  },
  aaa(){},
  globalData:{
    cartList: []
  }
})
