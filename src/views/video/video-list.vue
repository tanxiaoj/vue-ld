<template>
	<div id="videoList">
		<template v-for="list in lists">
			<vid :video-detail="list"></vid>
		</template>
	</div>
</template>

<script>
	import { mapActions,mapGetters } from 'vuex'
	import * as type from '../../store/mutation-types.js'
	import vid from '../../components/video.vue'
	export default {
		name :"videoList",
		data () {
			return {
				
			}
		},
		mounted () {
			this.load()
		},
		computed :{
			...mapGetters({
				"lists" :"videoList"
			})
		},
		methods : {
			...mapActions([
				["get_video_list"]
			]),
			load () {
				this.$store.dispatch('get_video_list',{
					page : 1,
					pageSize : 9 ,
					cityCode : ""
				})
			}
		},
		components :{
			vid
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	
</style>