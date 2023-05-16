const {commonReq} = require('../commonReq');

const addCloudFun = async(event, context) => {
	const {dataBase, params} = event;
	return await commonReq(dataBase).add({
			data: params,
		});
};
module.exports = {
	addCloudFun
}