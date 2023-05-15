export const getProductList = (id:string) => {
	let callProduct;
	wx.cloud.init();
	callProduct = wx.cloud.callFunction({
		name: 'getDocCloudFun',
		data: {
			url: 'productList',
			params: {
				_id: id
			}
		}
	})
  return callProduct;
}