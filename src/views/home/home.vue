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
		        	<router-link to="/video">视频</router-link>
		      	</li>
		      	<li class="nav-item">
		        	<router-link to="/zone">圈子</router-link>
		      	</li>
		    </ul>
	    </ul>		
	    <router-view></router-view>
	</div>
</template>

<script>
	import slide from '../../components/slide/slide.vue'
	import { mapMutations ,mapGetters} from 'vuex'
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
		    ...mapMutations ([
		    	[type.GET_AD_LIST]
		    ]),
			load (){
				this.$store.commit('GET_AD_LIST')
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

<style scoped>
.nav{
	width:100%;
	height: 80px;
	font-size: 15px;
	background:#f7f7f7;
	box-shadow:0px 5px 20px 0px rgba(0,0,0,0.1);
}
.nav .content{
	    width: 355px;
	    height: 80px;
	    display:flex;	
	    margin: 0 auto;
}
@media only screen and (max-width:320px) {
	.nav .content{
		width:302px;
	}
}
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
.logBtn {
    position: absolute;
    right: 0.064rem;
    top: 0.064rem;
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    background: url(../.././assets/images/ic_user1@3x.png) no-repeat center center;
    background-color: rgba(0,0,0,0.2);
    -webkit-background-size: 0.152rem 0.152rem;
    background-size: 0.152rem 0.152rem;
}
</style>
