import { callFunction } from './wxCloudCall'

const getOrderList = () => {
  const requestData: object = {
    collection: 'orderList',
    method: 'getCloudFun',
  }
  return callFunction(requestData)
}
const getOneOrder = (id: string | number) => {
  const requestData: object = {
    collection: 'orderList',
    method: 'getIdCloudFun',
    params: {
      _id: id,
    },
  }
  return callFunction(requestData)
}
const addOrder = (reqData: object) => {
  const requestData: object = {
    collection: 'orderList',
    method: 'addCloudFun',
    params: reqData,
  }
  return callFunction(requestData)
}
const deleteOrderById = (id: string | number) => {
  const requestData: object = {
    collection: 'orderList',
    method: 'deleteIdCloudFun',
    params: {
      _id: id,
    },
  }
  return callFunction(requestData)
}
const deleteOrderByParams = (reqData: object) => {
  const requestData: object = {
    collection: 'orderList',
    method: 'deleteParamsCloudFun',
    params: reqData,
  }
  return callFunction(requestData)
}
const getAggregateInfo = () => {
  const requestData: object = {
    collection: 'orderList',
    aggregateBase: 'bookList',
    method: 'aggregateCloudFun',
  }
  const resp = callFunction(requestData)
  if (resp) {
    return resp
  } else {
    throwError(400, '服务器错误')
  }
  // return callFunction(requestData);
}

const throwError = (errCode = 400, errMsg = '服务器错误') => {
  const err: object = new Error(errMsg)
  err.success = false
  err.errCode = errCode
  err.errMsg = errMsg
  throw err
}

export default {
  getOrderList,
  getAggregateInfo,
  getOneOrder,
  addOrder,
  deleteOrderById,
  deleteOrderByParams,
}
