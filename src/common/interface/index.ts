import { TabsType } from "../emun";

export interface IContentInfo {
	id : string;
	userId : string;
	userName : string;
	type : 'video' | 'image';
	imageUrls ?: string[];
	videoUrl ?: string;
	description : string;
	avatorUrl ?: string;
	likeCount : number;
	commentCount : number;
	favoriteCount : number;
	isMine ?: boolean;
	isReviewed ?: boolean;
	isPass ?: boolean;
	postUrl ?: string;
}

export interface ITabOption {
	label : string;
	value : TabsType;
	isShow : boolean;
}

export interface profileInfo {
	praise: number
	attention: number
	fans: number
	gender: string
	location: string
	completion: string
	isMyself: boolean
	isFollow: boolean
}

export interface IListInfo {
	list : IContentInfo[],
	pageNumber ?: number,
	isLastPage ?: boolean
};

export interface IContentList {
	key : string,
	listInfo : IListInfo
}
