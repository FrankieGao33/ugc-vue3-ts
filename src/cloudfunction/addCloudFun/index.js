// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: 'ugc-2g2150rl47388aea' }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
	const db = cloud.database();
	const {url, params} = event;
	const result = await db.collection(url).add({
			data: params,
		});
	
	return result.data;
}