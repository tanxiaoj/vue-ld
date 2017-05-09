<template>
	<div class="team-list">
        <div class="loading" v-if="loading">
            <loading></loading>
        </div>

        <div v-if="showContent">
            <headTop :head-name="headName"></headTop>
            <div class="creatTeam" href="javascript:;">创建球队</div>
            <div class="team-seach">
                <a href="javascript:;">
                    <input type="text" placeholder="搜索球队">
                </a>
            </div>

            <div id="content">      
    	        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" @top-status-change="handleTopChange" @bottom-status-change="handleBottomChange" ref="loadmore">
    	            <ul class="teamList" id="add">
    		            <template v-for="list in lists">
    		                <li><a href="javascript:;"><img :src="list.teamLogoUrl"><span>{{list.teamFullname}}</span><i>{{list.playerCount}}人</i></a></li>
    		            </template>
    	            </ul>
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
        </div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	import * as type from '../../store/mutation-types.js'
	import { Loadmore } from 'mint-ui'
    import headTop from '../../components/head.vue'
    import loading from '../../components/loading.vue'

	export default {
		name : 'teamList',
		data(){
			return {
                headName:"",
				page : 0,
				pageSize : 8,
				topStatus : "",
				bottomStatus : "",
                loading :false ,
                showContent : false
			}
		},
		mounted(){
			this.load();
		},
		computed :{
			lists () {
				return this.$store.state.teamlist.teamList
			}
		},
        watch :{
            '$route': 'load',
            lists (val,oldVal){
                if(val && val!=""){
                    this.loading = false ;
                    this.showContent = true;  
                }
            }           
        },
		methods : {
			...mapActions([
				["get_team_list"]
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

				var postData = {
					"page": _this.page,
					"pageSize": _this.pageSize,
					"cityCode":""
				}; 
				this.$store.dispatch('get_team_list', postData)
			}
		},
		components : {
			"mt-loadmore" :Loadmore ,
            loading ,
            headTop
		}
	}
</script>

<style scoped>
.mint-loadmore{
	color: #333;
	font-size: 15px;
}

.creatTeam {
    font-size: 0.128rem;
    color: #067bda;
    right: 0.12rem;
    top: 0.128rem;
    font-size: 15px;
    position: absolute;
}
.team-seach {
    width: 100%;
    height: 0.48rem;
    overflow: hidden;
    background-color: #fff;
}
.team-seach input {
    display: block;
    height: 0.256rem;
    width: 2.84rem;
    font-size: 0.12rem;
    color: #8e8e93;
    margin: 0.104rem auto;
    text-align: center;
    border-radius: 15px;
    border: 1px solid #dedede;
    /* background: url(../images/seach-icon_03.png) no-repeat 0.98rem center; */
    -webkit-background-size: 0.115rem 0.115rem;
    background-size: 0.115rem 0.115rem;
}
#content {
    position: absolute;
    z-index: 1;
    top: 110px;
    bottom: 0px;
    left: 0;
    width: 100%;
    background: #fff;
    overflow: hidden;
}
.teamList {
    overflow: hidden;
    background-color: #fff;
    font-size: 0.112rem;
}
.teamList li {
    font-size: 0.128rem;
    color: #333;
    height: 0.544rem;
    line-height: 0.544rem;
    width: 2.4rem;
    padding-left: 0.04rem;
    margin-left: 0.56rem;
    position: relative;
    border-bottom: 1px solid #dedede;
}
.teamList li a {
    height: 0.544rem;
    display: block;
}
.teamList li img {
    position: absolute;
    left: -0.48rem;
    top: 0.08rem;
    width: 0.36rem;
    height: 0.36rem;
    border-radius: 50%;
    overflow: hidden;
}
.teamList li span {
    float: left;
}
.teamList li i {
    float: right;
    font-size: 0.112rem;
    color: #adb5b9;
    height: 0.12rem;
    /* width: 0.224rem; */
    text-align: right;
    line-height: 0.12rem;
    padding-left: 0.2rem;
    /* background: url(../images/team-l_03.png) no-repeat; */
    -webkit-background-size: 0.12rem 0.12rem;
    background-size: 0.12rem 0.12rem;
    margin: 0.2rem 0.28rem 0 0;
}
</style>