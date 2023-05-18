import {callFunction} from './wxCloudCall'

export const getOrderList = () => {
	const requestData:object = {
		collection: "orderList",
		method: "getCloudFun"
	};
	return callFunction(requestData);
}
export const getOneOrder = (id: string | number) => {
	const requestData:object = {
		collection: "orderList",
		method: "getDocCloudFun",
		params: {
			_id: id
		}
	};
	return callFunction(requestData);
}
export const addOrder = (reqData: object) => {
	const requestData:object = {
		collection: "orderList",
		method: "addCloudFun",
		params: reqData
	};
	return callFunction(requestData);
}
export const getAggregateInfo = () => {
	const requestData:object = {
		collection: "orderList",
		aggregateBase: "bookList",
		method: "aggregateCloudFun"
	};
	const resp = callFunction(requestData);
	if (resp) {
		return resp
	} else {
		throwError(400, "服务器错误");
	}
	// return callFunction(requestData);
}

const throwError = (errCode = 400, errMsg = "服务器错误") => {
    const err: object = new Error(errMsg);
    err.success = false;
    err.errCode = errCode;
    err.errMsg = errMsg;
    throw err;
}