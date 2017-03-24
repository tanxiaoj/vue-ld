<template>
	<div class="team-list">
        <div class="title">
            <a href="index.html"></a>
            <a class="creatTeam" href="javascript:;">创建球队</a>
        </div>   

        <div class="team-seach">
            <a href="team-seach.html">
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
</template>

<script>
	import { mapState } from '../../store/store.js'
	import { Loadmore } from 'mint-ui'

	export default {
		name : 'teamList',
		data(){
			return {
				lists : [],
				page : 0,
				pageSize : 9,
				topStatus : "",
				bottomStatus : ""
			}
		},
		created(){
			this.load();
		},
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
			load() {
				var _this = this ;

				_this.page ++ ;

				var postData = {
					"page": _this.page,
					"pageSize": _this.pageSize,
					"cityCode":""
				}; 
				   
				postData = (function(obj){ // 转成post需要的字符串.  
				    var str = "";  
				   
				    for(var prop in obj){  
				        str += prop + "=" + obj[prop] + "&"  
				    }  
				    return str;  

				})(postData);  

				var xhr = new XMLHttpRequest();  
				   
				xhr.open("POST", this.$store.state.api+"/team/getAllTeam", false);  
				xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");  
				xhr.onreadystatechange = function(){  
				    var XMLHttpReq = xhr;  
				    if (XMLHttpReq.readyState == 4) {  
				        if (XMLHttpReq.status == 200) {  
				            var res = JSON.parse(XMLHttpReq.responseText);  
				            console.log(res)
				             
				            if(res.retMessage == "emptydatas"){
				            	return ;
				            }

				            for(var i=0;i<res.retContent.length;i++){
				            	_this.lists.push(res.retContent[i])
				            }

				            console.log(_this.lists)
				            // console.log(state.teamlist)

				        }  
				    }  
				};  
				xhr.send(postData);  
			}
		},
		components : {
			"mt-loadmore" :Loadmore
		}
	}
</script>

<style scoped>
.mint-loadmore{
	color: #333;
	font-size: 15px;
}
.title {
    height: 0.392rem;
    line-height: 0.392rem;
    font-size: 0.144rem;
    color: #333;
    border-bottom: 1px solid #dedede;
    background-color: #fff;
    position: relative;
    text-align: center;
    background-color: #e8ecf0;
    overflow: hidden;
}
.title>a {
    position: absolute;
}
.title>a:nth-child(1) {
    width: 0.072rem;
    height: 0.12rem;
    /* background: url(../images/ic_top_back.png) no-repeat; */
    -webkit-background-size: cover;
    background-size: cover;
    left: 0.12rem;
    top: 0.128rem;
}
.title>a:nth-last-child(1) {
    font-size: 0.128rem;
    color: #067bda;
    right: 0.12rem;
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