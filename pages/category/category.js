import {
  getCategory, 
  getSubcategory, 
  getCategoryDetail
} from '../../netWork/category.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList: [],
    categoryData: {},
    currentIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getCategory()
  },
  tapmenu(e) {
    const currentIndex = e.detail.currentIndex;
    this.setData({
      currentIndex
    })
    this._getSubcategory(currentIndex)
  },
  _getCategory() {
    getCategory().then(res => {
      const menuList = res.data.data.category.list
      const categoryData = {}
      for (let i = 0; i <= menuList.length; i++) {
        categoryData[i] = {
          subcategories: [],
          categoryDetail: []
        }
      }
      this.setData({
        menuList,
        categoryData
      })
      this._getSubcategory(0)
      console.log(this.data.categoryData)
    })
  },
  _getSubcategory(currentIndex) {
    const maitkey = this.data.menuList[currentIndex].maitKey
    getSubcategory(maitkey).then(res => {
      const tempCategoryData = this.data.categoryData
      tempCategoryData[currentIndex].subcategories = res.data.data.list
      this.setData({
        categoryData: tempCategoryData
      })
    })
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