<template>
    <div class="myPage">
        <headTop :head-name="headName"></headTop>
        <div class="user-msg clearfix">
            <div class="login-status clearfix">
                
                <a href="javascript:;" class="status-l" :style="{backgroundImage :'url('+bgi+')'}" @click="toInfo">
                    
                </a>
                <div v-if="!loginStatus">
                    <!-- 未登录状态 -->               
                    <div class="status-false">
                        <span>未登录</span>
                        <a href="javascript:;" @click="toLogin">前往注册/登录</a>
                    </div>
                </div>
                <!-- 未登录状态 -->

                <!-- 登录状态 -->
                <div class="status-true" v-if="loginStatus">
                    <span>{{mes.userData.userName}}</span>
                    <div class="true-msg">
                        <i><em></em>{{this.$store.getters.sex }}</i><span>{{mes.userData.age}}岁</span><span>{{mes.userData.height}}/{{this.$store.getters.weight}}kg</span>
                    </div>
                    <div class="true-sl">
                        <span>关注 <i>{{mes.userData.attentionCount}}</i></span>
                        <span>粉丝 <i>{{mes.userData.fansCount}}</i></span>
                    </div>
                </div>

                <!-- 登录状态 -->
            </div>

        </div>      
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    import headTop from '../components/head.vue'
    import { mapMutations,mapGetters} from 'vuex'
    import * as type from '../store/mutation-types.js' 
    import defaultImg from '../assets/images/unlogin_03.png'  
	export default {
        name :"myPage",
        data (){
            return {
                headName :"用户中心",
            }
        },
        computed : {
            loginStatus (){
                if(this.$store.getters.loginMes == "未登录"){
                    return false ;
                }else{
                    return true ;
                }
            },
            mes (){
                if(this.loginStatus){
                    return this.$store.getters.loginMes ;
                }else {
                    return ""
                }
            },
            bgi (){
                if(this.loginStatus && this.mes.userData.headIcon){
                    return this.mes.userData.headIcon
                }else{
                    return defaultImg
                }
            }
        },
        methods : {
            toLogin() {
                this.$router.push('./login')
            },
            toInfo() {
                this.$router.push('./addInfo')
            }
        },
        components : {
            headTop
        }
	}
</script>

<style scoped>
    .user-msg {
        width: 100%;
        background-color: #067ada;
        position: relative;
    }

    .login-status .status-false {
        float: left;
        font-size: 0.144rem;
        margin: 0.24rem 0 0 0.216rem;
    }
    .login-status .status-false span {
        color: #fff;
        display: block;
        margin-bottom: 0.048rem;
    }
    .login-status .status-false a {
        font-size: 0.104rem;
        color: #b3ddff;
    }
    .login-status .status-l {
        float: left;
        width: 0.48rem;
        height: 0.48rem;
        border-radius: 50%;
        margin: 0.2rem 0 0.144rem 0.78rem;
        background: url(../assets/images/unlogin_03.png) no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
    }

    .login-status .status-true {
        float: left;
        font-size: 0.096rem;
        color: #b3ddff;
        margin: 0.288rem 0 0 0.216rem;
    }
    .login-status .status-true>span {
        color: #fff;
        display: block;
        font-size: 0.144rem;
        margin-bottom: 0.048rem;
    }
    .status-true .true-msg {
        margin-bottom: 0.1rem;
    }
    .status-true .true-msg i {
        float: left;
        width: 0.192rem;
        height: 0.096rem;
        line-height: 0.096rem;
        font-size: 0.048rem;
        color: #fff;
        background-color: #ec82c0;
        border-radius: 6px;
        margin-right: 0.016rem;
    }
    .status-true .true-msg i em {
        width: 0.064rem;
        height: 0.064rem;
        float: left;
        margin: 0.012rem 0 0 0.02rem;
        background: url(../assets/images/user-s_03.png) no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
    }
    .status-true .true-msg span {
        margin-right: 0.08rem;
    }
    .status-true .true-msg span {
        margin-right: 0.08rem;
    }
    .status-true .true-sl {
        margin-bottom: 0.16rem;
    }
    .status-true .true-sl a {
        margin-right: 0.16rem;
        color: #b3ddff;
    }
</style>