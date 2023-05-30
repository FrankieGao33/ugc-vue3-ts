<template>
	<view>
		<tabs :items="tabItems">
			<template #content="contentProps">
				<tabsPanel :list="contentProps.list" :tabType="contentProps.tabType" :column="3" />
			</template>
		</tabs>
	</view>
</template>

<script setup lang="ts">
	import { TabsType } from "../../common/emun";
	import { ITabOption } from "../../common/interface";

	import tabs from "@/components/me/tabs/tabs.vue";
	import tabsPanel from "@/components/me/tabs/tabsPanel.vue";

	const tabItems : ITabOption[] = [
		{ label: "作品", value: TabsType.Posts, isShow: true },
		{ label: "收藏", value: TabsType.Collects, isShow: true, },
		{ label: "喜欢", value: TabsType.Likes, isShow: true },
		{ label: "待审核", value: TabsType.Audit, isShow: true },
		{ label: "已审核", value: TabsType.Reviewed, isShow: true }
	]
</script>

<style lang="scss">

</style>