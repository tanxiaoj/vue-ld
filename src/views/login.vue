<template>
	<div class="login">
	    <div class="login-bg">
	    	<a href="javascript:;" @click="history" class="arr-return">
	    	</a>
	    </div>
    	<ul class="login-form">
    		<li>
    			<i></i><input type="text" id="phone" v-model="phoneNumber" placeholder='请输入手机号' maxlength="11">
    		</li>
    		<li>
    			<i></i><input type="password" id="pwd" v-model="password" placeholder='请输入密码'>
				<div class="login-l">
	    			<a href="forget-password.html">忘记密码</a>
	    			<a href="register.html">立即注册</a>
	    		</div>
    		</li>
    	</ul>
    	<input type="submit" value="登录" @click="login">
	</div>
</template>

<script>
    import { Toast } from 'mint-ui'
    import { mapMutations,mapGetters,mapActions } from 'vuex'
    import * as type from '../store/mutation-types.js'   
	export default {
		name : "login",
		data () {
			return {
				phoneNumber : "",
                password : "" 
			}
		},
        computed : mapGetters({
            statusData : "status",
            loginMes : "loginMes"
        }),
		methods : {
			history (){
				this.$router.go(-1);
			},
            // ...mapMutations([
            //     [type.LOGIN]
            // ]),
            ...mapActions([
                "login"
            ]),
            login (){
                // this.$store.commit('LOGIN',{
                //     telphone : this.phoneNumber,
                //     password : this.password,
                //     loginType : "H5",
                //     ipAddr :""
                // })
                this.$store.dispatch('login',{
                    telphone : this.phoneNumber,
                    password : this.password,
                    loginType : "H5",
                    ipAddr :""                    
                })

                if(this.statusData == 200){
                    Toast({message: '登录成功',position: 'middle',duration: 3000})
                    this.$router.push('/');
                }
                else if(this.statusData == 2){
                    Toast({message: '用户不存在',position: 'middle',duration: 3000})
                }else if(this.statusData == 3){
                    Toast({message: '密码错误',position: 'middle',duration: 3000})
                }else if(this.statusData == 4){
                    Toast({message: '该账号被禁用',position: 'middle',duration: 3000})
                }else if(this.statusData == 500){
                    Toast({message: '服务器异常',position: 'middle',duration: 3000})
                }else{
                    Toast({message: '账号或密码错误',position: 'middle',duration: 3000})
                }
            }
		},
		components: {
			// headTop
		}
	}
</script>

<style scoped>
.login-bg {
    width: 100%;
    height: 2.488rem;
    background: url(.././assets/images/bg.png) no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    overflow: hidden;
}
.login-bg .arr-return {
    width: 0.096rem;
    height: 0.184rem;
    position: absolute;
    left: 0.12rem;
    top: 0.08rem;
    background: url(.././assets/images/arr_l_03.png) no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
}
.login-form li {
    width: 2.752rem;
    height: 0.464rem;
    margin: 0 auto;
    position: relative;
    border-bottom: 1px solid #dedeed;
}
.login-form li:nth-child(1) i {
    width: 0.144rem;
    height: 0.216rem;
    float: left;
    margin: 0.144rem 0 0 0;
    background: url(.././assets/images/login-icon_03.png) no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
}
.login-form li:nth-child(2) i {
    width: 0.176rem;
    height: 0.176rem;
    float: left;
    margin: 0.17rem 0 0 0;
    background: url(.././assets/images/login-icon_07.png) no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
}
.login-form li input[type='text'], .login-form li input[type='password'] {
    width: 80%;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 18px;
    color: #666;
    float: left;
    padding-left: 0.096rem;
    margin-top: 0.064rem;
}
.login-form li .login-l {
    position: absolute;
    right: 0;
    top: 0.04rem;
}
.login-form li .login-l a {
    display: block;
    font-size: 16px;
    color: #067ada;
    height: 0.44rem;
    line-height: 0.44rem;
}
.login input[type='submit'] {
    width: 2.76rem;
    height: 0.4rem;
    line-height: 0.4rem;
    color: white;
    font-size: 18px;
    margin: 0 0.12rem;
    background-color: #067ada;
    border-radius: 25px;
}
</style>