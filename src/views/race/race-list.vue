<template>
	<div class="race-list">
		<headTop :head-name="headName"></headTop>

	    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" @top-status-change="handleTopChange" @bottom-status-change="handleBottomChange" ref="loadmore">
			<template v-for="list in lists">
				<race :list="list"></race>
			</template>
		    <div slot="top" class="mint-loadmore-top">
			    <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
			    <span v-show="topStatus === 'loading'">Loading...</span>
		    </div>	      
		    <div slot="bottom" class="mint-loadmore-bottom">
			    <span v-show="bottomStatus !== 'loading'" :class="{ 'rotate': bottomStatus === 'drop' }">↑</span>
			    <span v-show="bottomStatus === 'loading'">Loading...</span>
		    </div>	  
        </mt-loadmore>

	</div>
</template>

<script>
	import { mapActions ,mapGetters} from 'vuex'
	import * as type from '../../store/mutation-types.js'
	import race from '../../components/race.vue'
	import headTop from '../../components/head.vue'
	import { Loadmore } from 'mint-ui'
	export default {
		name : "raceList",
		data (){
			return {
				headName : "合作赛事",
				page : 0,
				pageSize : 9,
				topStatus : "",
				bottomStatus : ""
			}
		},
		created(){
			this.load();
		},
		computed : mapGetters({
			lists : "raceList"
		}),
		methods : {
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
		    ...mapActions ([
		    	["get_race_list"]
		    ]),
			load() {
				var _this = this ;

				_this.page ++ ;

				var postData = {
					"page": _this.page,
					"pageSize": _this.pageSize,
					"cityCode":""
				}; 

				this.$store.dispatch('get_race_list',postData)
				   
			}
		},
		components : {
			race,
			headTop ,
			"mt-loadmore" :Loadmore
		}
	}
</script>

<style scoped>
.mint-loadmore{
	color: #333;
	font-size: 15px;
}
</style>