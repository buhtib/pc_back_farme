<template>
	<div id="app">
		<router-view :key="$route.fullpath"></router-view>
	</div>
</template>

<script>
export default {
    name: "app"
};
</script>

<style lang="scss">
//阿里iconfont
@import url("//at.alicdn.com/t/font_2058857_4iezc76bzzo.css");
@import "./styles/commonBase.scss";
@import "./styles/reset.scss";

#app {
	height: 100%;
	width: 100%;
	font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
		"Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
