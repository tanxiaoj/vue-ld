<template>
	<div id="videoList">
		<template v-for="list in lists">
			<div>{{list.createDatetime}}</div>
		</template>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	import * as type from '../../store/mutation-types.js'

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
			lists () {
				return this.$store.state.videolist.videoList 
			}
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
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	
</style>