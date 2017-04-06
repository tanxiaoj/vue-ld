<template>
	<div class="header">
        <div class="title">
            <i class="return" @click="history"></i>
            <i class="publish"></i>
            <ul class="tab">
                <li class="active" @click="tabFn">推荐</li>
                <li @click="tabFn">关注</li>
            </ul>
        </div>
	</div>
</template>

<script>
    const INTRODUCE = 0;
    const ATTEND = 1;
    
	export default {
        name : "header",
        methods : {
            history (){
                this.$router.go(-1);
            },
            tabFn (){

            }
        }
	}

</script>

<style lang="less" scoped>

@import '../assets/css/base.less';

.title {
    height: 0.352rem;
    line-height: 0.392rem;
    border-bottom: 1px solid #dedede;
    position: relative;
    background-color: #fff;
    padding-left: 0.12rem;
    padding-right: 0.12rem;
    font-size: 0.144rem;
    color: #32393f;
    i{
        display: block;
        width: 0.144rem;
        height: 0.144rem;
        margin-top: 0.112rem;
        background: url("@{images1}back.png") no-repeat;
        background-size: 0.088rem 0.144rem;
    }
    .return {
        float: left;
    }
    .publish{
        float: right;
        background: url("@{images1}edit.png");
        background-size:0.144rem 0.144rem ;
    }
    .tab{
        position: absolute;
        left: 0.94rem;
        top: 0.08rem;
        line-height: 0.224rem;
        font-size: 0.144rem;
        color: #32393f;  
        li{
            height: 0.26rem;
            width: 0.56rem;
            float: left;
            text-align: center;
            color: #32393f;
            &.active{
                border-bottom: 0.016rem solid #067ada;
            }
        }   
    }
}

</style>