const {commonReq} = require('../commonReq');

const getCloudFun = async(event, context) => {
	const {dataBase} = event;
	return await commonReq(dataBase).get();
};
module.exports = {
	getCloudFun
}