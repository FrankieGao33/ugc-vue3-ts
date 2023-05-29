import { TabsType } from "../emun";

export interface IContentInfo {
	id: string;
	userId: string;
	userName: string;
	type: 'video' | 'image';
	imageUrls?: string[];
	videoUrl?: string;
	description: string;
	avatorUrl?: string;
	likeCount: number;
	commentCount: number;
	favoriteCount: number;
	isMine: boolean;
	postUrl ?: string;
}

export interface ITabOption {
	label : string;
	value : TabsType;
	isShow : boolean;
}