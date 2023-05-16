import {callFunction} from './wxCloudCall'

export const getOrderList = () => {
	const requestData:object = {
		dataBase: "orderList",
		method: "getCloudFun"
	};
	return callFunction(requestData);
}
export const getOneOrder = (id: string) => {
	const requestData:object = {
		dataBase: "orderList",
		method: "getDocCloudFun",
		params: {
			_id: id
		}
	};
	return callFunction(requestData);
}
export const addOrder = (reqData: object) => {
	const requestData:object = {
		dataBase: "orderList",
		method: "addCloudFun",
		params: reqData
	};
	return callFunction(requestData);
}