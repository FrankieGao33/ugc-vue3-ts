<template>
	<view>
		<userBasicInfo
			:avatarUrl="avatarUrl"
			:iconSize="iconSize"
			:isEditable="isEditable"
			:userName="userName"
			:backgroundImage="backgroundImage"
		/>

		<tabs :items="tabItems">
			<template #content="contentProps">
				<tabsPanel :list="contentProps.list" :tabType="contentProps.tabType" :column="3" />
			</template>
		</tabs>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { TabsType } from "../../common/emun";
	import { ITabOption } from "../../common/interface";

	import tabs from "@/components/me/tabs/tabs.vue";
	import tabsPanel from "@/components/me/tabs/tabsPanel.vue";
	import userBasicInfo from '@/components/me/userBasicInfo/userBasicInfo.vue';

	const tabItems : ITabOption[] = [
		{ label: "作品", value: TabsType.Posts, isShow: true },
		{ label: "收藏", value: TabsType.Collects, isShow: true, },
		{ label: "喜欢", value: TabsType.Likes, isShow: true },
		{ label: "待审核", value: TabsType.Audit, isShow: true },
		{ label: "已审核", value: TabsType.Reviewed, isShow: true }
	]

	const avatarUrl = ref<string>("");
	const iconSize = ref<string>("");
	const isEditable = ref<boolean>();
	const userName = ref<string>("");
	const backgroundImage = ref<string>("");

	iconSize.value = "180";
	isEditable.value = false;
	avatarUrl.value = "https://pica.zhimg.com/v2-ac4a5884ba09c3aa6b0213528fe008da_r.jpg";
	backgroundImage.value = "https://ts1.cn.mm.bing.net/th/id/R-C.ddbe60882fb529b0252f393577ead646?rik=%2f7YBpw2SPJ9k0Q&riu=http%3a%2f%2fres.dps.cn%2fres%2fbgimg%2f16514%2f28.jpg&ehk=JVlxG8xOcZ7i%2boVLKEEBdrrRYjTNi%2fMaQKcqdHSRh0I%3d&risl=&pid=ImgRaw&r=0";
	userName.value = "阿斯旺";
</script>

<style lang="scss">


</style>