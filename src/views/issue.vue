<template>
    <div class="issue">
        <headTop :head-name="headName" :show-return="showReturn" :bg-color="bgColor"></headTop>
        <div class="issueFn" :class="btnClass" @click="issueTopic">发布</div>
        <div class="cancel" @click="toZone">取消</div>
        <div class="issue-input">
            <input type="text" v-model="title_text" placeholder="标题(选填)" maxlength="20">
            <span>{{title_sy}}</span>
        </div>
        <div class="issue-area clearfix">
            <textarea name="" id="" v-model="contain_text" placeholder="畅所欲言吧..." maxlength="700"></textarea>
            <div class="issue_photo">
                <ul class="clearfix">
                    <li class="def"></li>
                </ul>
            </div>
            <span>{{contain_sy}}</span>
        </div>
        <div class="issue-tag clearfix">
            <span :class="isTag" @click="toTopicName">{{tag==""?"#添加话题标签":tag}}</span>
        </div>
    </div>
</template>

<script>
    const TITLE_COUNT = 20 ;  // 标题总字数
    const CONTAIN_COUNT = 700 ;

    import headTop from '../components/head.vue'
    import { mapGetters , mapActions } from 'vuex'
    import { Toast } from 'mint-ui'
	export default {
        name :"issue",
        data (){
            return {
               headName :"发布内容",
               showReturn :false ,
               bgColor :"#fff" ,
               title_text : this.$store.state.issue.issueData.title ,
               contain_text : this.$store.state.issue.issueData.content,
               tag :this.$store.state.issue.issueData.topic
            }
        },
        computed : {
            ...mapGetters({
                token : "loginMes",
                status : "issueStatus",
                temp_data : "issueData"
            }),
            title_sy (){
                return TITLE_COUNT - this.title_text.length ;
            },
            contain_sy (){
                return CONTAIN_COUNT - this.contain_text.length ;
            },
            isTag (){
                if(this.tag == ""){
                    return {
                        current : false 
                    }
                }else {
                    return {
                        current : true 
                    }                   
                }
            },
            btnClass (){
                if(this.contain_text!=""){
                    return {
                        current : true 
                    }
                }else{
                    return {
                        current : false 
                    }                   
                }
            }
        },
        methods : {
            ...mapActions(["issue_topic","issue_temp_data"]),
            issueTopic() {
                let data = {
                    Title:this.title_text ,
                    content:this.contain_text,
                    topicName:"国足能赢伊朗吗？",
                    topicId:1490338551981008,
                    imgs:"http://img.51ledong.com:8024/ledong-p2c-webapps-common/static/images/1493693571910da9e84a5a8604fc8a4e5961b6e7f8238.png",
                    sessionToken: this.token.sessionToken               
                };  

                if(this.btnClass.current){
                    this.$store.dispatch("issue_topic",data);

                    if(this.status == 200){
                        Toast({message: '发帖成功',position: 'middle',duration: 3000})
                        setTimeout(() => {
                            this.$router.push('/zone')
                        }, 1000)                 
                    }else{
                        Toast({message: '发帖失败',position: 'middle',duration: 3000})
                    }
                }else{
                    Toast({message: '发帖内容或图片不能为空',position: 'middle',duration: 3000})
                }

            },
            toTopicName() {
                let data = {
                    title :this.title_text,
                    content :this.contain_text,
                    imgs :"",
                    topic:""                    
                }
                this.$store.dispatch("issue_temp_data",data)
                this.$router.push('/topicList')
            },
            toZone (){
                this.$router.push('./zone')
            }
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
        &.current{
                background-color: #067ada;
            }
        }
        .cancel{
            position: absolute;
            font-size: 0.12rem;
            color: #067ada;
            left: 0.096rem;    
            top: 0.12rem;   
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
            span{
                width: 0.24rem;
                height: 0.36rem;
                line-height: 0.36rem;
                color: #f25051;
                position: absolute;
                right: 10px;
                bottom: 10px;
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
                &.current{
                    color: #fff;
                    border: none;
                    background-color: #067ada;
                }
            }
        }
    }
</style>