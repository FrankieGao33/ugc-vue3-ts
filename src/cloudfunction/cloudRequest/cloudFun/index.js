// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: 'ugc-2g2150rl47388aea' })

const commonReq = (collection) => {
	const db = cloud.database();
	return db.collection(collection);
};

//添加函数，传递添加相关参数params
const addCloudFun = async(event, context) => {
	const {collection, params} = event;
	const result =  await commonReq(collection).add({
			data: params,
		});
	return result;
};

//删除函数，传递_id
const deleteIdCloudFun = async(event, context) => {
	const {collection, params} = event;
	const result =  await commonReq(collection).doc(params._id).remove();
	return result;
};

//删除函数，传递删除相关参数params
const deleteParamsCloudFun = async(event, context) => {
	const {collection, params} = event;
	const result =  await commonReq(collection).where(params).remove();
	return result;
};

//查询函数，获取集合中所有数据
const getCloudFun = async(event, context) => {
	const {collection} = event;
	const result = await commonReq(collection).get();
	return result;
};

//查询函数，通过传_id,获取对应数据
const getIdCloudFun = async(event, context) => {
	const {collection, params} = event;
	const result = await commonReq(collection).doc(params._id).get();
	return result;
};

//查询函数，通过传递查询条件params,获取对应数据
const getParamsCloudFun = async (event, context) => {
	const {collection, params} = event;
	const result = await commonReq(collection).where(params).get();
	return result;
};

//聚合查询，传递当前集合collection和聚合集合aggregateBase，其他参数根据实际情况传递
const aggregateCloudFun = async (event, context) => {
	const {collection, aggregateBase} = event;
	const result = await commonReq(collection).aggregate()
		.lookup({
			from: aggregateBase,
			localField: 'book',
			foreignField: 'title',
			as: 'books',
		}).end();
	return result;
};

module.exports = {
	addCloudFun,
	deleteIdCloudFun,
	deleteParamsCloudFun,
	getCloudFun,
	getIdCloudFun,
	getParamsCloudFun,
	aggregateCloudFun
}