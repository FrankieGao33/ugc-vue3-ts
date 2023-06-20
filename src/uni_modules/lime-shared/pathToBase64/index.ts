// @ts-nocheck

// #ifdef APP-PLUS
import {getLocalFilePath} from '../getLocalFilePath'
// #endif

/**
 * 路径转base64
 * @param {Object} string
 */		
export function pathToBase64(path: string):Promise<string> {
	if (/^data:/.test(path)) return path
	return new Promise((resolve, reject) => {
		// #ifdef H5
		let image = new Image();
		image.setAttribute("crossOrigin", 'Anonymous');
		image.onload = function() {
			let canvas = document.createElement('canvas');
			canvas.width = this.naturalWidth;
			canvas.height = this.naturalHeight;
			canvas.getContext('2d').drawImage(image, 0, 0);
			let result = canvas.toDataURL('image/png')
			resolve(result);
			canvas.height = canvas.width = 0
		}
		image.src = path + '?v=' + Math.random()
		image.onerror = (error) => {
			reject(error);
		};
		// #endif

		// #ifdef MP
		if (uni.canIUse('getFileSystemManager')) {
			uni.getFileSystemManager().readFile({
				filePath: path,
				encoding: 'base64',
				success: (res) => {
					resolve('data:image/png;base64,' + res.data)
				},
				fail: (error) => {
					console.error({error, path})
					reject(error)
				}
			})
		}
		// #endif

		// #ifdef APP-PLUS
		plus.io.resolveLocalFileSystemURL(getLocalFilePath(path), (entry) => {
			entry.file((file: any) => {
				const fileReader = new plus.io.FileReader()
				fileReader.onload = (data) => {
					resolve(data.target.result)
				}
				fileReader.onerror = (error) => {
					console.error({error, path})
					reject(error)
				}
				fileReader.readAsDataURL(file)
			}, reject)
		}, reject)
		// #endif
	})
}
