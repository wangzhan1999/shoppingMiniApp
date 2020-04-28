Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {
      avatar: '/asstes/img/common/myhead.jpg',
      username: "Here's the name"
    },
    offersAndCollections: {
      field: ['收藏夹','关注店铺','足迹','红包卡券'],
      fieldData: [4,70,120,2]
    },
    orderInfo: {
      icon: ['/asstes/img/profile/obligation.png',
             '/asstes/img/profile/pending.png',
             '/asstes/img/profile/intransit.png',
             '/asstes/img/profile/evaluate.png',
             '/asstes/img/profile/aftersale.png'],
      field: ['待付款', '待发货', '待收货', '评价', '退款/售后']
    } 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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