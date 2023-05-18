const {addCloudFun, 
	getCloudFun, 
	getDocCloudFun, 
	getParamsCloudFun, 
	aggregateCloudFun
	} = require('./cloudFun/index');


// 云函数入口函数
exports.main = async (event, context) => {
    try {
		console.log('event =>', event);
        return await handleCloudFun(event, context);
    } catch (error) {
        console.error("catch error =>", error);
        error.success = false;
        return error;
    }
};

const handleCloudFun = async (event, context) => {
    // seperate the request methods
    switch (event.method) {
        case "getCloudFun":
			return await getCloudFun(event, context);
        case "addCloudFun":
			return await addCloudFun(event, context);
		case "getDocCloudFun":
			return await getDocCloudFun(event, context);
		case "getParamsCloudFun":
			return await getParamsCloudFun(event, context);
		case "aggregateCloudFun":
			return await aggregateCloudFun(event, context);
        default:
            return throwError(405, "请求Method错误");
    }
};