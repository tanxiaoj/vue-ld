<template>
	<div class="zone">
		<div class="loading" v-if="loading">
			<loading></loading>
	    </div>
	    <div v-if="showContent" class="content">

			<headTop :select-type="selectType" :history-url="historyUrl" :desc="desc" @select="selectTab"></headTop>
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
			<div class="topic">
		        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" @top-status-change="handleTopChange" @bottom-status-change="handleBottomChange" ref="loadmore">
					<ul>
						<template v-for="data in topicLists">
							<topic :topic-data="data"></topic>
						</template>
					</ul>
				    <div slot="top" class="mint-loadmore-top">
					    <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">刷新当前列表</span>
					    <span v-show="topStatus === 'loading'">Loading...</span>
				    </div>	      
				    <div slot="bottom" class="mint-loadmore-bottom">
					    <span v-show="bottomStatus !== 'loading'" :class="{ 'rotate': bottomStatus === 'drop' }">数据加载中...</span>
					    <span v-show="bottomStatus === 'loading'">Loading...</span>
				    </div>	 
				</mt-loadmore>
			</div>

		</div>
	</div>
</template>

<script>
	import slide from '../../components/slide/slide.vue'
	import headTop from '../../components/headZone.vue'
	import topic from '../../components/topic.vue'
	import { mapActions ,mapGetters} from 'vuex'
	import { InfiniteScroll ,Loadmore} from 'mint-ui'
	import * as type from '../../store/mutation-types.js'
	import loading from '../../components/loading.vue'

    const INTRODUCE = 0;
    const ATTEND = 1;

	export default {
		name :"zone",
		data (){
			return {
				swipeObj : {
					speed : 3000,
					h : 110
				},
				selectType :INTRODUCE,
				desc :{
					introduce : "推荐",
					attend : "关注"
				},
				historyUrl :'./',
				page : 0,
				topStatus : "",
				bottomStatus : "" ,
				userId :this.$store.getters.loginMes=="未登录"?"":this.$store.getters.loginMes.userData.userId,
				loading: false,
				showContent : false ,
				dataStatus :[]  // 存储接口请求状态
			}
		},
		mounted (){
			this.load()
		},
		computed : mapGetters({
			zoneAdLists : "zoneAdList",
			activeLists : "activeList",
			topicLists : "topicList"
		}),
		watch: {
		    // 如果路由有变化，会再次执行该方法
		    '$route': 'load' ,
		    zoneAdLists (val,oldVal){
		    	if(val && val !=""){
		    		this.dataStatus.push(true)
		    	}
		    },
		    activeLists (val,oldVal){
		    	if(val && val !=""){
		    		this.dataStatus.push(true)
		    	}
		    },
		    topicLists (val,oldVal){
		    	if(val && val !=""){
		    		this.dataStatus.push(true)
		    	}
		    },
		    dataStatus (val,oldVal) {
		    	var _this = this ;
				_this.loading = false ;
				_this.showContent = true;

		    	val.map(function(v, i) {
		    		if(!v){
						_this.loading = true ;
						_this.showContent = false;		    			
		    		}
		    	})
		    }
		},
		methods :{
			...mapActions([
				["get_zoneAd_list"],
				["active_user_list"],
				["get_topic_list"]
			]),
			loadBottom() {
			  // ...// load more data
			  this.load();
			  this.allLoaded = true;// if all data are loaded
			  this.$refs.loadmore.onBottomLoaded();
			},
			loadTop() {
			  // ...// 加载更多数据
			  this.$refs.loadmore.onTopLoaded();
			},
		    handleTopChange(status) {
		       this.topStatus = status;
		    },
		    handleBottomChange(status) {
		    	this.bottomStatus = status;
		    },
			load() {
				var _this = this ;

				_this.page ++ ;

		        this.showContent = false;
		        this.loading = true ;

				this.$store.dispatch("get_zoneAd_list") ;
				this.$store.dispatch("active_user_list",{
					userId :this.userId
				})
				this.$store.dispatch("get_topic_list",{
					page : _this.page,
					pageSize:2 ,
					userId :this.userId
				})
			},
			selectTab(type){
				this.selectType = type ;
			}
		},
		components :{
			slide,
			headTop,
			topic ,
			loading,
			"mt-loadmore" :Loadmore ,
		}
	}
</script>

<style lang="less">
	.mint-loadmore{
		color: #333;
		font-size: 15px;
	}
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