const {commonReq} = require('../commonReq');

const getParamsCloudFun = async (event, context) => {
	const {dataBase, params} = event;
	return await commonReq(dataBase).where(params).get();
};
module.exports = {
	getParamsCloudFun
}