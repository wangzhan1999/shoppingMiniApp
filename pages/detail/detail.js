import { 
  getDetail,
  getRecommend,
  Goods,
  Shop,
  ParamInfo
} from '../../netWork/detail.js'
const app = getApp();
import { formatTime , debounce} from '../../utils/util.js'
Page({
  data: {
    iid:'',
    topImgs: [],
    goods: {},
    shopInfo: {},
    titles: ['商品', '参数', '评论', '推荐'],
    currentIndex: 0,
    descInfo: {
      desc: '',
      key: '',
      detailImage: [],
      scrollTop: 0,
      scrollIntoView: '',
      backtopVal: 0
    },
    showbackbtn: false,
    paramInfo: {},
    comment: {},
    goodsList: [],
    srcollToList: ['', 'paraminfo', 'comment','goodslist'],
    paraminfoSrcollTop: Number,
    commentScrollTop: Number,
    goodslistScrollTop: Number,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let iid = options.iid
    this.setData({iid})
    this._getDetail(iid)
    getRecommend().then(res => {
      const goodsList = res.data.data.list
      this.setData({
        goodsList
      })
    })
    app.aaa = () => {
      wx.createSelectorQuery().select('#paraminfo').boundingClientRect(res => {
        this.setData({
          paraminfoSrcollTop: res.top
        })
      }).exec()
     wx.createSelectorQuery().select('#goodslist').boundingClientRect(res => {
       this.setData({
         goodslistScrollTop: res.top
       })
      }).exec()
     wx.createSelectorQuery().select('#comment').boundingClientRect(res => {
      this.setData({
        commentScrollTop: res.top
      })
      }).exec()
      console.log('1111111')
    }
  },

// ----------------网络请求相关
  _getDetail(iid){
    getDetail(iid).then(res => {
      const data = res.data.result
      const goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      const shopInfo = new Shop(data.shopInfo)
      const paramInfo = new ParamInfo(data.itemParams)
      this.setData({
        topImgs: data.itemInfo.topImages,
        goods,
        shopInfo,
        'descInfo.desc': data.detailInfo.desc,
        'descInfo.key': data.detailInfo.detailImage[0].key,
        'descInfo.detailImage': data.detailInfo.detailImage[0].list,
        paramInfo,
        comment: data.rate.list[0],
        'comment.created': formatTime(data.rate.list[0].created)
      })
    })
  },
// ----------------事件监听相关
  tabbarclick(e){
    console.log(e)
    let i = e.detail
    const list = this.data.srcollToList
    if (list[i] === list[0]){
      this.setData({
        scrollTop: 0,
        currentIndex: i
      })
    }else{
        this.setData({
          scrollIntoView: list[i],
          currentIndex: i
        })
    }
  },
  backtop(e){
    this.setData({
      scrollTop: 0 
    })
  },
  // 加入购物车
  addToCart(e){
    const product = {}
    product.image = this.data.topImgs[0]
    product.title = this.data.goods.title
    product.style = '颜色：默认颜色，尺码：默认尺码'
    product.price = this.data.goods.lowNowPrice
    product.iid = this.data.iid
    product.num = 1
    product.statu = false

    app.addToCart(product)

    wx.showToast({
      title: '加入购物车成功~',
      image: '/asstes/img/common/okicon.png',
      mask: true
    })
  },
  scroll(e){
    this.data.paraminfoSrcollTop
    this.data.commentScrollTop
    this.data.goodslistScrollTop
    if(e.detail.scrollTop >= this.data.paraminfoSrcollTop && e.detail.scrollTop < this.data.commentScrollTop){
      this.setData({
        currentIndex: 1
      })
    }else if(e.detail.scrollTop >= this.data.commentScrollTop && e.detail.scrollTop < this.data.goodslistScrollTop){
      this.setData({
        currentIndex: 2
      })
    }else if(e.detail.scrollTop >= this.data.goodslistScrollTop ){
      this.setData({
        currentIndex: 3
      })
    }else {
      this.setData({
        currentIndex: 0
      })
    }
    if (e.detail.scrollTop > 750) {
      this.setData({
        showbackbtn: true
      })
    } else if (e.detail.scrollTop < 750) {
      this.setData({
        showbackbtn: false
      })
    }
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