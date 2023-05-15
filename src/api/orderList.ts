export const getOrderList = () => {
	let callProduct;
	wx.cloud.init();
	callProduct = wx.cloud.callFunction({
		name: 'getCloudFun',
		data: {
			url: 'orderList'
		}
	})
  return callProduct;
}
export const addOrder = (reqData: object) => {
	let callProduct;
	wx.cloud.init();
	callProduct = wx.cloud.callFunction({
		name: 'addCloudFun',
		data: {
			url: 'orderList',
			params: reqData
		}
	})
	return callProduct;
}