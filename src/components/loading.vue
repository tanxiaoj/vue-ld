<template>
	<div class="loading" v-if="loading">
    
	</div>
</template>

<script>

	export default {
		name : "loading",
		data (){
			return {
                loading: false
			}
		},
		mounted (){

		},
		props : {

		},
		methods : {

		}
	}

</script>

<style lang="less" scoped>
    @import '../assets/css/base.less';
    .loading{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        background: url("@{images1}loadPage.gif") no-repeat center;
        background-color: #fff;
        background-size: 120px 90px;
    }
</style>