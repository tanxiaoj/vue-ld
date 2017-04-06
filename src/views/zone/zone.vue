<template>
	<div class="zone">
		<headTop></headTop>
		<slide :ad-list="zoneAdLists" :swipe-data="swipeObj"></slide>
		<!-- 活跃用户 -->
		<div class="active_user">
			<div class="title">活跃用户</div>
			<ul class="list">
				<template v-for="list in activeLists">
					<li>
						<div class="img">
							<img :src="list.headIcon" alt="">
						</div>
						<h4>{{list.userName}}</h4>
					</li>
				</template>
			</ul>
			<div class="more"></div>
		</div>
	</div>
</template>

<script>
	import slide from '../../components/slide/slide.vue'
	import headTop from '../../components/headZone.vue'
	import { mapActions ,mapGetters} from 'vuex'
	import * as type from '../../store/mutation-types.js'
	export default {
		name :"zone",
		data (){
			return {
				swipeObj : {
					speed : 3000,
					h : 110
				},
				userId :this.$store.getters.loginMes.userData.userId
			}
		},
		mounted (){
			this.load()
		},
		computed : mapGetters({
			zoneAdLists : "zoneAdList",
			activeLists : "activeList"
		}),
		methods :{
			...mapActions([
				["zoneAds"],
				["activeList"]
			]),
			load() {
				this.$store.dispatch("zoneAds")
				this.$store.dispatch("activeList",{
					userId :this.userId
				})
			}
		},
		components :{
			slide,
			headTop
		}
	}
</script>

<style lang="less">
	.active_user{
		background-color: #fff;
		.title{
			padding: 0.128rem 0 0.032rem 0.096rem;
		    font-size: 0.12rem;
		    line-height: 0.152rem;
		    color: #999;
		}
		.list{
			overflow: hidden;
		    padding: 0 0.12rem 0.16rem 0.12rem;
		    border-bottom: 1px solid #efefef;
		    li{
				float: left;
			    margin-top: 0.096rem;
			    width: 0.48rem;
			    overflow: hidden;
			    text-align: center;
			    margin-right: 0.28rem;
			    &:nth-last-child(1){
			    	margin-right: 0;
			    }
			    .img{
					width: 0.48rem;
				    height: 0.48rem;
					border-radius: 50%;
				    overflow: hidden;
				    img{
				    	display: block;
				    	width: 100%;
				    	height: 100%;
				    }
			    }
			    h4{
				    font-size: 0.112rem;
				    color: #333;
				    line-height: 0.112rem;
				    margin: 0.08rem 0 0.056rem 0;
				    white-space: nowrap;			    	
			    }
		    }
		}
	}
</style>