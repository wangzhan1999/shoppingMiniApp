import request from './netWork.js'

function getMultiData() {
  return request({
    url: '/home/multidata'
  })
}

function getGoodsList(type, page) {
  return request({
    url: '/home/data',
    data: {
      type,
      page
    }
  })
}
export { getMultiData, getGoodsList }