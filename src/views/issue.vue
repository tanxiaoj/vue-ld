<template>
    <div class="issue">
        <headTop :head-name="headName" :show-return="showReturn"></headTop>
        <div class="issue-input">
            <input type="text" placeholder="标题(选填)" maxlength="20">
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
               showReturn :false 
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
    .issue-input{
        width: 100%;
        height: 0.36rem;
        line-height: 0.36rem;
        margin: 0.08rem 0;
        font-size: 0.112rem;
        background-color: #fff;
    }
</style>