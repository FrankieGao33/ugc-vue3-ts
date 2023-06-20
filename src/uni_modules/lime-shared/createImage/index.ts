// @ts-nocheck
class Image {
	currentSrc: string | null = null
	naturalHeight: number = 0
	naturalWidth: number = 0
	width: number = 0
	height: number = 0
	tagName: string = 'IMG'
	path: string = ''
	crossOrigin: string = ''
	referrerPolicy: string = ''
	onload: () => void
	onerror: () => void
	complete: boolean = false
	constructor() {}
	set src(src: string) {
		src = src.replace(/^@\//,'/')
		this.currentSrc = src
		uni.getImageInfo({
			src,
			success: (res) => {
				this.complete = true
				this.path = res.path
				this.naturalWidth = this.width = res.width
				this.naturalHeight = this.height = res.height
				this.onload()
			},
			fail: () => {
				this.onerror()
			}
		})
	}
	get src() {
		return this.currentSrc
	}
}
interface UniImage extends WechatMiniprogram.Image {
	complete?: boolean
	naturalHeight?: number
	naturalWidth?: number
}
/** 创建用于 canvas 的 img */
export function createImage(canvas: WechatMiniprogram.Canvas): HTMLImageElement | UniImage {
	if(canvas && canvas.createImage) {
		return canvas.createImage()
	} else if(canvas && !('toBlob' in  canvas)){
		return new Image()
	} else if(typeof window != 'undefined' && window.Image) {
		return new window.Image()
	}
	return new Image()
}