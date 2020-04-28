import request from './netWork.js'

export function getDetail(iid) {
  return request({
    url: '/detail',
    data: { iid }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.highNowPrice;
  }
}
export class Shop {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.cSells = shopInfo.cSells
    this.cGoods = shopInfo.cGoods
    this.score = shopInfo.score
  }
}
export class ParamInfo {
  constructor(itemParams) {
    this.infokey = itemParams.info.key
    this.infos = itemParams.info.set
    this.sizekey = itemParams.rule.key
    this.sizes = itemParams.rule.tables[0]
    this.sizedesc = itemParams.rule.disclaimer
  }
}