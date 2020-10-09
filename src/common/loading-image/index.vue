<template>
	<el-image fit="contain" v-bind="$attrs" :preview-src-list="previewSrcList">
		<div slot="placeholder" class="img_slot">
			<i class="el-icon-loading"></i>
		</div>
	</el-image>
</template>

<script>
export default {
	name: "loadingImage",
	computed: {
        /**
         *  图片预览的数组：传入srcList
         *
         *  不传srcList默认开启src路径的预览
         */
		previewSrcList() {
			const srcList = this.$attrs.srcList;

			return srcList && srcList.length ? srcList : [this.$attrs.src];
		},
	},
};
</script>

