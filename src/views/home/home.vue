<template>
	<div class="home" @click="act">
		<slide></slide>
	    <div class="nav border-1px">
		    <ul class="content">
		        <li class="nav-item">
		        	<router-link to="/team">球队</router-link>
		      	</li>
		      	<li class="nav-item">
		        	<router-link to="/race">赛事</router-link>
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
	import { mapState } from '../../store/store.js'
	export default {
		name : "home",
		data (){
			return {
				userId: this.$store.state.userId
			}
		},
		methods : {
			act : function(){
				console.log(this.userId)
			}
		},
		components: {
			slide
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
	.home
		.nav
			width:100%
			height: 80px
			background:#f7f7f7
			box-shadow:0px 5px 20px 0px rgba(0,0,0,0.1)
		    .content
			    width: 355px
			    height: 80px
			    display:flex	
			    margin: 0 auto
			@media only screen and (max-width:320px)
				width:302px
			    .nav-item
				    width: 88px
				    height: 80px
				    flex:1
				    text-align: center
				& > a 
					display:block
					height:100%
</style>