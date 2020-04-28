import { getMultiData, getGoodsList } from '../../netWork/home.js'
const types = ['pop', 'new', 'sell']

Page({
  data: {
    swiperList: [],
    reCommend: [],
    titles: ['流行', '新款', '精选'],
    currentType: "pop",
    goodsList: {
      'pop': { page: 0, list: [] },
      'new': { page: 0, list: [] },
      'sell': { page: 0, list: [] }
    },
    showbackbtn: false,
    tabcontrolFix: false,
    tabcontrolFixVal: 0
  },
  // --------------------事件监听相关
  tabControlClick(e) {
    const index = e.detail.i
    this.setData({
      currentType: types[index]
    })
  },
  backtop(e) {
    wx.pageScrollTo({
      scrollTop: 0,
    })
  },
  imgload(){
    wx.createSelectorQuery().select('#tabcontrol').boundingClientRect(rect => {
      this.data.tabcontrolFixVal = rect.top
    }).exec()
  },
  todetail(id) {
    let iid = id.detail
    wx.navigateTo({
      url: '/pages/detail/detail?iid='+iid
    })
  },
  // this.selectComponent('组件的class or id')可以获取到某个组件，以及组件所有属性
  /**
   * 生命周期函数--监听页面加载
   */
  // ---------------------网络请求相关
  _getMultidata() {
    getMultiData().then(res => {
      const swiperList = res.data.data.banner.list
      const reCommend = res.data.data.recommend.list
      this.setData({
        swiperList,
        reCommend
      })
    }).catch(err => console.log(err))
  },
  _getGoods(type) {
    let page = this.data.goodsList[type].page + 1
    getGoodsList(type, page).then(res => {
      let list = res.data.data.list
      let goodsKey = `goodsList.${type}.list`
      let oldlist = this.data.goodsList[type].list
      oldlist.push(...list)
      let goodspage = `goodsList.${type}.page`
      if (list) {
        this.setData({
          [goodsKey]: oldlist,
          [goodspage]: page
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载完成
   */
  onLoad: function (options) {
    this._getMultidata()
    this._getGoods('pop')
    this._getGoods('new')
    this._getGoods('sell')
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },
  onPageScroll: function(e) {
    if(e.scrollTop > 750){
      this.setData({
        showbackbtn: true
      })
    } else if (e.scrollTop < 750){
      this.setData({
        showbackbtn: false
      })
    }
    const flag = e.scrollTop >= this.data.tabcontrolFixVal;
    if(flag != this.data.tabcontrolFix) {
      this.setData({
        tabcontrolFix: flag
      })
    }
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
    this._getGoods(this.data.currentType)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})