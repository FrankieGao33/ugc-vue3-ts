export const getAddressList = () => {
	let callProduct;
	wx.cloud.init();
	callProduct = wx.cloud.callFunction({
		name: 'getCloudFun',
		data: {
			url: 'addressList'
		}
	})
  return callProduct;
}