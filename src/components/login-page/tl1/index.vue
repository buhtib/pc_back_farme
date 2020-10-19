<template>
    <div class="login-tl1" direction="vertical">
        <div class="effect-c">
            <span
                v-for="(item,index) in 40"
                :style="{
                    left: (item * 2.5) + '%',
                animationDelay: 1 + (Math.random() * 8) + 's'}"
				:class="`animate__animated animate__fadeOutUp animate__infinite animate__tl1 animate__tl1-${randomS(1, 4)}x`"
			></span>
			<span
				v-for="(item,index) in 20"
				:style="{left: randomS(1, 101) + '%',
                top: randomS(1, 101) + '%',
                animationDelay: 1 + (Math.random() * 6) + 's'}"
				:class="`animate__animated animate__fadeOutUp animate__infinite animate__tl1 animate__tl1-${randomS(1, 4)}x`"
			></span>
		</div>
	</div>
</template>

<script>
export default {
    name: "loginTl1",
    methods: {
        //生成范文数
        randomS(n, m) {
            return Math.floor(Math.random() * (m - n) + n);
        },
    },
};
</script>

<style lang='scss' scoped>
.login-tl1 {
    position: relative;
    left: 0;
    top: 0;
    background: url("../../../assets/img/login/tl1.jpg") no-repeat 0 0;
    background-size: 100%;

    .effect-c {
        position: relative;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        overflow: hidden;

        .animate__tl1 {
            display: inline-block;
            position: absolute;
            left: 1px;
            bottom: 0;
            height: 100%;
            width: 100%;
        }

        .animate__tl1-1x {
			width: 14px;
			height: 14px;
			background: url(../../../assets/img/login/point_1.png) no-repeat;
			background-size: 100% 100%;
		}
		.animate__tl1-2x {
			width: 12px;
			height: 12px;
			background: url(../../../assets/img/login/point_1.png) no-repeat;
			background-size: 100% 100%;
		}
		.animate__tl1-3x {
			width: 10px;
			height: 10px;
			background: url(../../../assets/img/login/point_1.png) no-repeat;
			background-size: 100% 100%;
		}
    }
}
</style>
