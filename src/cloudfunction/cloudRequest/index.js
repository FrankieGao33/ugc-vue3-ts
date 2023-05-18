const cloudMethod = require('./cloudFun/index');


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
			return await cloudMethod.getCloudFun(event, context);
        case "addCloudFun":
			return await cloudMethod.addCloudFun(event, context);
		case "deleteIdCloudFun":
			return await cloudMethod.deleteIdCloudFun(event, context);
		case "deleteParamsCloudFun":
			return await cloudMethod.deleteParamsCloudFun(event, context);
		case "getIdCloudFun":
			return await cloudMethod.getIdCloudFun(event, context);
		case "getParamsCloudFun":
			return await cloudMethod.getParamsCloudFun(event, context);
		case "aggregateCloudFun":
			return await cloudMethod.aggregateCloudFun(event, context);
        default:
            return throwError(405, "请求Method错误");
    }
};