// @ts-nocheck
export function base64ToArrayBuffer(base64 : string) {
	// contentType : string
	// contentType = contentType || base64.match(/^data\:([^\;]+)\;base64,/mi)[1] || ''; // e.g. 'data:image/jpeg;base64,...' => 'image/jpeg'
	// base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
	const [, format, bodyData] = /data:image\/(\w+);base64,(.*)/.exec(base64) || [];
	if (!format) {
		new Error('ERROR_BASE64SRC_PARSE')
	}
	if(uni.base64ToArrayBuffer) {
		return uni.base64ToArrayBuffer(bodyData)
	} else {
		
	}
	
	// try {
	// 	const binary = atob(base64);
	// 	const len = binary.length;
	// 	const buffer = new ArrayBuffer(len);
	// 	let view = new Uint8Array(buffer);
	// 	for (let i = 0; i < len; i++) {
	// 		view[i] = binary.charCodeAt(i);
	// 	}
	// 	return buffer;
	// } catch (e) {
	// 	return uni.base64ToArrayBuffer(bodyData)

	// }

}