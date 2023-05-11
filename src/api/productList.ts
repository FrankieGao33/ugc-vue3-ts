export const getProductList = () => {
	let callProduct;
	wx.cloud.init();
	callProduct = wx.cloud.callFunction({
		name: 'getCloudFun',
		data: {
			cloudName: 'productList',
			_id: 't7i42d64owerxitke5qnlv500jhq4zc2'
		}
	})
  return callProduct;
}