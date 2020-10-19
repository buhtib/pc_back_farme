<template>
	<div class="index">

		<zDatePicker :time.sync="time1" />
		<zDateRange :time.sync="time2" />

	</div>
</template>

<script>
import { demo } from "@/service";

export default {
	name: "index",
	data() {
		return {
			input: "",
			time1: "",
			time2: [],
			a: {
				b: "",
				c: "",
			},
		};
	},
	mounted() {
		demo;
	},
};
</script>

<style lang='scss' scoped>
.index {
	height: 400px;
}
</style>
