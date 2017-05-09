<template>
    <div class="topicList">
        <div class="loading" v-if="loading">
            <loading></loading>
        </div>
        <div v-if="showContent">
            <headTop :head-name="headName" :bg-color="bgColor" :show-return="showReturn"></headTop>
            <div class="cancel" @click="toIssue(0)">取消</div>
            <input type="text" placeholder="输入您想搜索的话题标签" class="glass" v-model="seachVal">
            <div class="line"></div>
            <ul class="contain">
                <template v-for="(data,index) in list">
                    <li @click="toIssue(1,index)" ref="topVal">{{data.topicName}}</li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapActions ,mapGetters } from 'vuex'
    import headTop from '../components/head.vue'
    import loading from '../components/loading.vue'

    export default {
        name :"topicList",
        data (){
            return {
                headName : "话题搜索",
                bgColor : "#fff" ,
                showReturn :false,
                seachVal :"",
                loading :false ,
                showContent : false
            }
        },
        mounted (){
            this.load();
        },
        computed :{
            ...mapGetters({
                list : "topNamelist"
            })
        },
        watch :{
            '$route': 'load',
            seachVal (val){
                this.load();
            },
            list (val,oldVal){
                if(val && val!=""){
                    this.loading = false ;
                    this.showContent = true;  
                }
            }
        },
        methods :{
            ...mapActions(["topName_list","issue_temp_data"]),
            load (){
                let data = {
                    topicName:this.seachVal,
                    page :1,
                    rows :99
                }

                this.showContent = false;
                this.loading = true ;

                this.$store.dispatch("topName_list",data)
            },
            toIssue (type,index){
                if( type == 1){
                    let data = {
                        title : this.$store.state.issue.issueData.title,
                        content :this.$store.state.issue.issueData.content,
                        imgs :this.$store.state.issue.issueData.title.imgs,
                        topic:this.$refs.topVal[index].innerHTML                    
                    }
                    this.$store.dispatch("issue_temp_data",data)

                    this.$router.push('./issue')
                }else{
                    this.$router.push('./issue')
                }
            }
        },
        components :{
            headTop,
            loading
        }
    }
</script>

<style lang="less" scoped>
    @import '../assets/css/base.less';
    .cancel{
        position: absolute;
        font-size: 0.12rem;
        color: #067ada;
        left: 0.096rem;   
        top: 0.144rem;     
    }
    .glass{
        display: block;
        width: 2.704rem;
        height: 0.432rem;
        line-height: 0.432rem;
        color: #c7c7cc;
        font-size: 0.112rem;
        padding-left: 0.296rem;
        outline: medium;
        background: url("@{images1}glass.png") no-repeat 0.128rem center;
        background-color: #fff;
        -webkit-background-size: 0.12rem 0.12rem;
        background-size: 0.12rem 0.12rem;        
    }
    .line{
        width: 100%;
        height: 0.06rem;
        background-color: #eff3f6;
    }
    .contain{
        li{
            height: 0.32rem;
            line-height: 0.32rem;
            font-size: 0.128rem;
            color: #333;
            padding-left: 0.128rem;
        }
    }
</style>