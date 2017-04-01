<template>
	<div class="slide" :style="{height:swipeData.h+'px'}">
		<mt-swipe :auto="swipeData.speed">
			<template v-for="ad in adList">
			  	<mt-swipe-item>
			  		<img :src="ad.adImageUrl" alt="">
			  	</mt-swipe-item>
			</template>
		</mt-swipe>
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'mint-ui';

	export default {
		name : "slide",
		props : {
            adList : {
                type : Array 
            },
            swipeData : {
            	type :Object
            }
		},
		components :{
			"mt-swipe" :Swipe,
			"mt-swipe-item" : SwipeItem
		}
	}

</script>

<style scope>
.mint-swipe-indicators .mint-swipe-indicator {
	opacity: 0.8;
	background-color: #fff;
}
.mint-swipe-item img{
	width: 100%;
	height: 100%;
}
</style>