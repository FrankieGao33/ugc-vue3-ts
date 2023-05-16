export const callFunction = (requestData:object) =>{
	wx.cloud.init();
	return wx.cloud.callFunction({
		name: "cloudRequest",
		data: requestData
	});
};