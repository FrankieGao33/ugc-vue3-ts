export const getOrderList = () => {
	let callProduct;
	wx.cloud.init();
	callProduct = wx.cloud.callFunction({
		name: 'getCloudFun',
		data: {
			cloudName: 'orderList'
		}
	})
  return callProduct;
}
