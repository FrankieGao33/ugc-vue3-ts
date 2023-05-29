export interface IContentInfo {
	id: string
	userId: string
	userName: string
	type: 'video' | 'image'
	imageUrls?: string[]
	videoUrl?: string
	description: string
	avatorUrl?: string
	likeCount: number
	commentCount: number
	favoriteCount: number
	isMine: boolean
}