<template>
	<div class="video">
        <div class="container">
            <img src="" alt="">
        </div>
	</div>
</template>

<script>
    import myVideo from 'vue-video'

	export default {
		name : "video",
		data (){
            return {
 
            }
		},
		mounted (){

		},
		props : {
			videoDetail : {
				type: Object 
			}
		},
        components: {
            myVideo
        }
	}

</script>

<style lang="less" scoped>
    html {
        font-size: 20px;
    }
    .video{
        width: 100%;
        height: 200px;
        font-size: 15px;
        overflow: hidden;
        .container{
            width: 100%;
            height: 200px;
        }
    }
</style>