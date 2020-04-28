// pages/cart/cart.js
const app = getApp()
Page({
  data: {
    cartList: [],
    totalPrice: 0,
    totalCounter: 0,
    isCheckedAll: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      cartList: app.globalData.cartList
    })
    app.addCartCallBack = () => {
      this.setData({
        cartList: app.globalData.cartList,
        isCheckedAll: false
      })
    }
    app.changeGoodsState = (index, goods) => {
      this.setData({
        [`cartList[${index}]`]: goods
      })
    }
    this.changeData()
  },
  onCheckedAll() {
    if(this.data.isCheckedAll){
      this.data.cartList.forEach(item => item.statu = false)
      this.setData({
        cartList: this.data.cartList,
        isCheckedAll: false
      })
    }else{
      this.data.cartList.forEach(item => item.statu = true)
      this.setData({
        cartList: this.data.cartList,
        isCheckedAll: true
      })
    }
    this.changeData()
  },
  onBuy(){
    const residuelist = this.data.cartList.filter(item => item.statu == false)
    const checkedlist = this.data.cartList.filter(item => item.statu == true)
    if (this.data.cartList.length > 0 && checkedlist.length > 0){
      wx.showModal({
        title: '温馨提示',
        content: '您确认提交订单吗',
        confirmColor: '#ff5777',
        cancelColor: '#ccc',
        success: res => {
          if (res.confirm) {
            this.setData({
              cartList: residuelist,
              isCheckedAll: false
            })
            app.globalData.cartList = residuelist
            this.changeData()
            wx.showToast({
              title: '提交成功',
              image: '/asstes/img/common/okicon.png',
              mask: true
            })
          } else if (res.cancel) console.log('取消操作')
        }
      })
    }else{
      wx.showToast({
        icon: 'none',
        title: '您还没有选择商品哦~',
      })
    }
    
  },
  changeData() {
    let totalPrice = 0
    let totalCounter = 0
    for (let item of this.data.cartList) {
      if(item.statu){
        totalCounter++
        totalPrice += (item.price * item.num).toFixed(2)
      }
    }
    this.setData({
      totalPrice,
      totalCounter
    })
    this.titleChange()
  },
  oncheked() {
    const newArr = this.data.cartList.filter(item => item.statu == false)
    console.log(typeof newArr)
    if (newArr.length <= 0){
      this.setData({
        isCheckedAll: true
      })
      console.log('1')
    }else{
      this.setData({
        isCheckedAll: false
      })
      console.log('0')
    }
    this.changeData()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  titleChange() {
    wx.setNavigationBarTitle({
      title: `购物车(${this.data.cartList.length})`,
    })
  },
  onShow: function () {
    this.titleChange()
    this.changeData()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})