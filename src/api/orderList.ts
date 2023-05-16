export const getOrderList = (id: string) => {
	let callProduct;
	wx.cloud.init();
	callProduct = wx.cloud.callFunction({
		name: "cloudRequest",
		data: {
			dataBase: "orderList",
			method: "getDocCloudFun",
			params: {
				_id: id
			}
		}
	})
  return callProduct;
}
export const addOrder = (reqData: object) => {
	let callProduct;
	wx.cloud.init();
	callProduct = wx.cloud.callFunction({
		name: "cloudRequest",
		data: {
			dataBase: "orderList",
			method: "addCloudFun",
			params: reqData
		}
	})
	return callProduct;
}