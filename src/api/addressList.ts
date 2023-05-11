export const getAddressList = () => {
	let callProduct;
	wx.cloud.init();
	callProduct = wx.cloud.callFunction({
		name: 'getCloudFun',
		data: {
			cloudName: 'addressList'
		}
	})
  return callProduct;
}