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