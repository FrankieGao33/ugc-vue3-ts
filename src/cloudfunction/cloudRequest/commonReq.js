// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: 'ugc-2g2150rl47388aea' })

const commonReq = (dataBase) => {
	const db = cloud.database();
	return db.collection(dataBase);
};
module.exports = {
	commonReq
}