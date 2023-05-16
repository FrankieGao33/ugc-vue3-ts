const {commonReq} = require('../commonReq');

const getDocCloudFun = async(event, context) => {
	const {dataBase, params} = event;
	return await commonReq(dataBase).doc(params._id).get();
};
module.exports = {
	getDocCloudFun
}