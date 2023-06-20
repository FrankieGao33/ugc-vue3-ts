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

export interface IMessageOption {
    id?: string;
    title: string;
	description: string;
    icon?: string;
    type: string;
    isShowMore?: boolean;
}

export interface ISystemMessageOption {
	id?: string;
	title: string;
	datetime: string;
	description: string;
}

export interface IAllMessageOption {
	id?: string;
	avatar: string;
	title: string;
	description: string;
	image: string;
    type: string;
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
}

export interface FileInfo {
	tempFilePatt:string
	siz:number	
	duration?:number
	height?:number
	width?:number
	thumbTempFilePath?:string
	fileType:string
}

export interface DragFileInfo{
	content:FileInfo,
	index:number,
	oindex:number,
	id:string,
	[field:string]:unknown
}
