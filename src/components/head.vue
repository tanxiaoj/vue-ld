<template>
	<div class="header">
        <div class="title" :style="{backgroundColor:bgColor}">
            <a href="javascript:;" @click="history" v-show="showReturn"></a>
            <span>{{headName}}</span>
        </div>
	</div>
</template>

<script>

	export default {
        name : "header",
        props : {
            headName : {
                type : String ,
                default() {
                    return "" ;
                }
            },
            showReturn :{
                type :Boolean ,
                default() {
                    return true ;
                }
            },
            bgColor :{
                type :String,
                default() {
                    return "#e8ecf0"
                }
            }
        },
        methods : {
            history (){
                this.$router.go(-1);
            }
        }
	}

</script>

<style lang="less" scoped>
@import '../assets/css/base.less';

.title {
    height: 0.392rem;
    line-height: 0.392rem;
    font-size: 0.144rem;
    color: #333;
    border-bottom: 1px solid #dedede;
    background-color: #fff;
    position: relative;
    text-align: center;
    // background-color: #e8ecf0;
    overflow: hidden;
}
.title a {
    position: absolute;
    width: 0.072rem;
    height: 0.12rem;
    background: url("@{images1}ic_top_back.png") no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    left: 0.12rem;
    top: 0.128rem;
}
</style>