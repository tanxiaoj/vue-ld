<template>
	<div class="home">
		<slide :ad-list="adLists" :swipe-data="swipeObj"></slide>
		<div class="logBtn" @click="toLogin"></div>
	    <div class="nav border-1px">
		    <ul class="content">
		        <li class="nav-item">
		        	<router-link to="/teamList">球队</router-link>
		      	</li>
		      	<li class="nav-item">
		        	<router-link to="/raceList">赛事</router-link>
		      	</li>
		      	<li class="nav-item">
		        	<router-link to="/videoList">视频</router-link>
		      	</li>
		      	<li class="nav-item">
		        	<router-link to="/zone">圈子</router-link>
		      	</li>
		    </ul>
	    </div>		
	    <router-view></router-view>
	</div>
</template>

<script>
	import slide from '../../components/slide/slide.vue'
	import { mapActions ,mapGetters} from 'vuex'
	import * as type from '../../store/mutation-types.js'
	export default {
		name : "home",
		data (){
			return {
				userId: this.$store.state.userId,
				swipeObj : {
					speed : 3000,
					h : 220
				}
			}
		},
		mounted () {
			this.load()
		},
		computed : mapGetters({
			adLists : "adList"
		}),
		methods : {
		    ...mapActions ([
		    	["get_ad_list"]
		    ]),
			load (){
				this.$store.dispatch('get_ad_list')
			},
			toLogin (){
				this.$router.push('./myPage')
			}
		},
		components: {
			slide
		}
	}
</script>

<style lang="less" scoped>

@import '../../assets/css/base.less';

.nav{
	width:100%;
	height: 80px;
	font-size: 15px;
	background:#f7f7f7;
	box-shadow:0px 5px 20px 0px rgba(0,0,0,0.1);
	.content{
	    width: 355px;
	    height: 80px;
	    display:flex;	
	    margin: 0 auto;
		.nav-item{
		    width: 88px;
		    height: 80px;
		    flex:1;
		    text-align: center;
		}
		.nav-item a{ 
			display:block;
			height:100%;
		}
	}
	@media only screen and (max-width:320px) {
		.content{
			width:302px;
		}
	}
}


.logBtn {
    position: absolute;
    right: 0.064rem;
    top: 0.064rem;
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    background: url("@{images}ic_user1@3x.png") no-repeat center center;
    -webkit-background-size: 0.152rem 0.152rem;
    background-size: 0.152rem 0.152rem;
}
</style>
