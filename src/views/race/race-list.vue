<template>
	<div class="race-list">
		<headTop :head-name="headName"></headTop>
		<template v-for="list in lists">
			<race :list="list"></race>
		</template>
	</div>
</template>

<script>
	import race from '../../components/race.vue'
	import headTop from '../../components/head.vue'
	export default {
		name : "raceList",
		data (){
			return {
				headName : "合作赛事",
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
				   
				xhr.open("POST", this.$store.state.api+"/match/getMatchListForCustomer", false);  
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
			race,
			headTop
		}
	}
</script>

<style scoped>
	
</style>