<template>
    <div class="issue">
        <headTop :head-name="headName" :show-return="showReturn" :bg-color="bgColor"></headTop>
        <div class="issueFn">发布</div>
        <div class="issue-input">
            <input type="text" placeholder="标题(选填)" maxlength="20">
            <span>0</span>
        </div>
        <div class="issue-area clearfix">
            <textarea name="" id="" placeholder="畅所欲言吧..." maxlength="700"></textarea>
            <div class="issue_photo">
                <ul class="clearfix">
                    <li class="def"></li>
                </ul>
            </div>
        </div>
        <div class="issue-tag clearfix">
            <span>#添加话题标签</span>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/head.vue'
	export default {
        name :"issue",
        data (){
            return {
               headName :"发布内容",
               showReturn :false ,
               bgColor :"#fff"
            }
        },
        computed : {

        },
        methods : {

        },
        components : {
            headTop
        }
	}
</script>

<style lang="less" scoped>
@import '../assets/css/base.less';
.issue{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    font-size: 0.144rem;
    background-color: #eff3f6;
    .issueFn{
        position: absolute;
        color: #fff;
        width: 0.44rem;
        height: 0.24rem;
        line-height: 0.24rem;
        top: 0.06rem;
        right: 0.096rem;
        text-align: center;
        border-radius: 0.04rem;
        background-color: #91b7d6;       
    }
    .issue-input{
        width: 100%;
        height: 0.36rem;
        line-height: 0.36rem;
        margin: 0.08rem 0;
        font-size: 0.112rem;
        background-color: #fff;
        input{
            width: 2.648rem;
            height: 0.36rem;
            color: #474a4d;
            padding-left: 0.112rem;
            outline: medium;
            float: left;
        }
        span{
            width: 0.24rem;
            height: 0.36rem;
            color: #f25051;
            float: left;
        }
    }
    .issue-area{
        font-size: 0.112rem;
        background-color: #fff;
        position: relative;
        textarea{
            width: 2.776rem;
            height: 0.896rem;
            padding: 0.112rem;
            outline: medium;
            border:none;
        }
    }
    .issue_photo{
        li{
            width: 0.608rem;
            height: 0.608rem;
            float: left;
            overflow: hidden;
            margin: 0 0 0.112rem 0.112rem;
            &.def{
                background: url("@{images1}issue_def.png") no-repeat;
                -webkit-background-size: cover;
                background-size: cover;
            }
        }
    }
    .issue-tag{
        font-size: 0.096rem;
        padding: 0.144rem;
        overflow: hidden;
        span{
            color: #333;
            font-size: 0.096rem;
            border-radius: 0.12rem;
            padding: 0.045rem 0.072rem;
            border: 1px solid #c2c2c2;
            background-color: #fff;
        }
    }
}
</style>