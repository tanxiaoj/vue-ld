<template>
    <div class="addInfo clearfix">
        <headTop :head-name="headName"></headTop>
        <div class="store" @click="storFn">保存</div>
        <ul class="teamLeaderMsg clearfix">
            <li>
                <span>头像</span><img :src="info.headIcon" class="headIcon">
            </li>
            <li>
                <i>*</i><span>昵称</span><input type="text" v-model="info.name" placeholder="请填写昵称">
            </li>
            <li>
                <i>*</i><span>真实姓名</span><input type="text" v-model="info.realName" placeholder="请填写真实姓名">
            </li>
            <li>
                <i>*</i><span>身份证号</span><input type="text" v-model="info.cdCard" placeholder="请填写身份证号" maxlength="20">
            </li>
            <li @click="selSex('sexFlag')">
                <i>*</i><span>性别</span><em>{{getSex}}</em>
            </li>
            <li @click="selAge('ageFlag')">
                <span>年龄</span><em>{{getAge}}岁</em>
            </li>
            <li @click="selHeight('heightFlag')">
                <span>身高</span><em>{{getHeight}}cm</em>
            </li>
            <li @click="selWeight('weightFlag')">
                <span>体重</span><em>{{getWeight}}kg</em>
            </li>
            <li @click="selPos('posFlag')">
                <span>擅长位置</span><em>{{getPos}}</em>
            </li>
            <li>
                <i>*</i><span>手机号码</span><input type="text" v-model="info.phoneNumber" placeholder="请填写手机号码" maxlength="11"><!-- placeholder="15123830921" -->    
            </li>
        </ul>
        <div class="picker-warp" v-show="selTool">
            <div class="toolbar">
                <div class="left" @click="cancel">取消</div>
                <div class="right" @click="enter">确认</div>
            </div>
            <mt-picker :slots="slotsHeight" :showToolbar="false" :itemHeight="30" :visibleItemCount="5" @change="onValuesChange"></mt-picker>
        </div>

        <ul class="mine-msg">
            <li><a href="modify-password.html">修改密码</a></li>
            <li><a href="bind-tel.html">已绑定手机号<i>{{info.bdNumber.substring(0,3)+"****"+info.bdNumber.substring(7,info.bdNumber.length)}}</i></a></li>
        </ul>

        <input type="submit" value="退出登录" class="back-login" @click="logout">
    </div>
</template>

<script>
    import { Toast ,MessageBox ,Picker } from 'mint-ui'
    import { mapMutations,mapGetters,mapActions } from 'vuex'
    import * as type from '../store/mutation-types.js'   
    import headTop from '../components/head.vue'
	export default {
		name : "addInfo",
        data (){
            return {
                headName: "个人信息" ,
                slotsHeight: [
                        {
                          flex: 1,
                          values: [],
                          className: 'slot1',
                          textAlign: 'center',
                          defaultIndex : 0
                        }
                    ],
                selTool : false,
                val : "" ,
                infoData :this.$store.getters.loginMes.userData ,
                info : {
                    headIcon :this.$store.getters.loginMes=="未登录"?"":this.$store.getters.loginMes.userData.headIcon,
                    name : this.$store.getters.loginMes=="未登录"?"":this.$store.getters.loginMes.userData.userName,
                    realName : "",
                    cdCard : "",
                    phoneNumber:this.$store.getters.loginMes=="未登录"?"":this.$store.getters.loginMes.userData.telphone,
                    bdNumber : this.$store.getters.loginMes=="未登录"?"":this.$store.getters.loginMes.userData.telphone,
                },
                selectVal :{
                    sexFlag : "未设置",
                    ageFlag : "",
                    heightFlag :"",
                    weightFlag : "",
                    posFlag : "未设置"
                },
                flag : {
                    sexFlag : "",
                    ageFlag : "",
                    heightFlag :"",
                    weightFlag : "" ,
                    posFlag : ""               
                },
                temp : "", // 暂时存储选项标志
                sex :["男","女"],
                age :["18","19","20","21","22","23","24","24","25","26"],
                height :["160","161","162","163","162","163","164","165","166","167","168","169","170","171","172","173","174"],
                weight :["48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64"],
                pos : ["前锋","小前锋","中锋","小后卫","后卫"]
            }
        },
        computed :{
            getSex (){
                if(this.flag.sexFlag == "sexFlag"){
                    return this.selectVal.sexFlag
                }else {
                    return this.$store.getters.sex?this.$store.getters.sex:"未设置"
                }
            },
            sexStatus (){
                if(this.getSex=="女"){
                    return 1
                }else if(this.getSex=="男"){
                    return 0
                }else{
                    return ""
                }
            },
            getAge (){
                if(this.flag.ageFlag == "ageFlag"){
                    return this.selectVal.ageFlag
                }else {
                    return this.infoData?this.infoData.age:""
                }
            },
            getHeight (){
                if(this.flag.heightFlag == "heightFlag"){
                    return this.selectVal.heightFlag
                }else {
                    return this.infoData?this.infoData.height:""
                }
            },
            getWeight (){
                if(this.flag.weightFlag == "weightFlag"){
                    return this.selectVal.weightFlag
                }else {
                    return this.$store.getters.weight?this.$store.getters.weight:""
                }
            },
            getPos (){
                if(this.flag.posFlag == "posFlag"){
                    return this.selectVal.posFlag
                }else {
                    return this.$store.getters.pos?this.$store.getters.pos:"未设置"
                }               
            }
        },
        methods :{
            onValuesChange(picker, values) {
                if (values[0] > values[1]) {
                    picker.setSlotValue(1, values[0]);
                }
                if(values[0]==undefined){
                    this.val = values[this.slotsHeight[0].defaultIndex]
                }else{
                    this.val = values[0] 
                }
            },
            ...mapActions([
                "store_user",
                "loginout"
            ]),
            storFn (){
                MessageBox({
                    title: '提示',
                    message: '确定执行此操作?',
                    showCancelButton: true
                });

                MessageBox.confirm('确定保存当前数据?',"友情提示").then(action => {
                    this.$store.dispatch('store_user',{
                        userId :this.$store.getters.loginMes.userData.userId,
                        headIcon : this.info.headIcon,
                        telphone : this.info.phoneNumber,
                        userName : this.info.name,
                        realName : "ld_hahaha"/*this.info.realName*/,
                        sex :this.sexStatus,
                        age:this.getAge,
                        certCode:500102211920117482/*this.info.cdCard*/,
                        height:this.getHeight,
                        weight:this.getWeight,
                        sessionToken:this.$store.getters.loginMes.sessionToken,
                        adeptPlace : ""/*this.getPos*/,                    
                    })

                    if(this.$store.getters.userUpdataCode == 0){
                        MessageBox('提示', '操作成功');
                    }else if(this.$store.getters.userUpdataCode == 5){
                        MessageBox('提示', '用户被禁用');
                        this.$router.push('./login')
                    }
                }).catch(cancel => {
                    console.log("操作取消")
                });

            },
            tempVal (flag,index,type){
                this.slotsHeight[0].values = this[type] ;//切换选项组
                this.slotsHeight[0].defaultIndex = index ; //弄人选项索引
                this.flag[flag] = flag ;
                this.temp = this.flag[flag] ;
                this.selTool = true ;
            },
            selSex (flag){
                this.tempVal(flag,0,"sex")
            },
            selAge (flag){
                this.tempVal(flag,4,"age")
            },
            selHeight (flag){ 
                this.tempVal(flag,5,"height")            
            },
            selWeight (flag){
                this.tempVal(flag,5,"weight")             
            },
            selPos (flag){
                this.tempVal(flag,2,"pos")             
            },
            cancel (){
                this.selTool = false ;
                this.temp = "" ;
            },
            enter (){
                this.selTool = false ;
                this.selectVal[this.temp] = this.val ;
                this.temp = "" ;
            },  
            logout (){
                MessageBox.confirm('确认要退出当前账号？',"友情提示").then(action => {
                    this.$store.dispatch("loginout",{
                        sessionToken:this.$store.getters.loginMes.sessionToken
                    })
                    if(this.$store.getters.loginoutStatus == 200){
                        Toast({
                          message: '退出登录成功',
                          position: 'bottom',
                          duration: 2000
                        });
                        this.$router.push('./myPage')
                    }else{
                        MessageBox('提示', 'error');
                    }
                }).catch(cancel => {
                    console.log("操作取消")
                });
            }

        },
        components :{
            headTop ,
            "mt-picker" :Picker
        }
	}
</script>

<style scoped>
/* 保存按钮 */
    .store{
        height: 0.392rem;
        line-height: 0.392rem;
        font-size: 0.128rem;
        color: #067bda;
        position: absolute;
        z-index: 99;
        right: 0.12rem;
        top: 0;
    }
/* 保存按钮 */
/* 底部弹出框样式 */
    .picker-warp{
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        background-color: #f5f5f5;
    }
    .picker-warp .toolbar{
        font-size: 0.112rem;
        padding: 0 0.112rem;
        line-height: 40px;
        overflow: hidden;
        background-color: #f2f2f2;  
    }
    .toolbar .left{
        float: left;
    }
    .toolbar .right{
        float: right;
    }
    .picker{
        background-color: #fff;
    }
/* 底部弹出框样式 */
    .addInfo{
        background-color: #f5f5f5;
        padding-bottom: 22px;
    }
    .teamLeaderMsg{
        background-color: #fff;
    }
    .teamLeaderMsg li{
        width: 2.76rem;
        height: 0.4rem;
        line-height: 0.4rem;
        margin-left: 0.12rem;
        padding-left: 0.12rem;
        font-size: 0.12rem;
        position: relative;
        color: #333;
        background:url(../assets/images/arr_r_03.png) no-repeat 2.72rem 0.128rem;
        -webkit-background-size: 0.064rem 0.12rem;
        background-size: 0.064rem 0.12rem;
        border-bottom: 1px solid #dedede;   
    }
    .teamLeaderMsg li i{
        position: absolute;
        left: 0;
        top: 0;
        color: #f04949;
        font-size: 0.12rem;
    }
    .teamLeaderMsg li span{
        float: left;
    }
    .teamLeaderMsg li input{
        float: right;
        height: 0.36rem;
        width: 1rem;
        text-align: right;
        margin-right: 0.28rem;
        color: #999;
    }
    .teamLeaderMsg li em{
        float: right;
        margin-right: 0.32rem;
        font-size: 0.12rem;
        color: #959595;
    }

    .teamLeaderMsg li:nth-child(1){
        height: 0.536rem;
        line-height: 0.536rem;
    }
    .teamLeaderMsg li:nth-child(1) img{
        width: 0.368rem;
        height: 0.368rem;
        float: right;
        border-radius: 50%;
        margin: 0.064rem 0.272rem 0 0;

    }
    .teamLeaderMsg li:nth-child(1),.teamLeaderMsg li:nth-child(2),.teamLeaderMsg li:nth-child(3),.teamLeaderMsg li:nth-last-child(1){
        background: none;
    }

    .mine-msg {
        background-color: #fff;
        border-bottom: 1px solid #dedede;
        margin-top: 0.112rem;
    }
    .mine-msg li {
        width: 2.88rem;
        height: 0.4rem;
        line-height: 0.4rem;
        margin-left: 0.12rem;
        text-align: left;
        font-size: 18px;
        border-bottom: 1px solid #dedede;
        background: url(../assets/images/arr_r_03.png) no-repeat 2.7rem center;
        -webkit-background-size: 0.064rem 0.128rem;
        background-size: 0.064rem 0.128rem;
    }
    .mine-msg li a {
        display: block;
        color: #333;
    }
    .mine-msg li:nth-last-child(1) {
        border-bottom: none;
    }
    .mine-msg li i {
        float: right;
        margin-right: 0.24rem;
        font-size: 16px;
        background-color: #fff;
    }
    .back-login {
        display: block;
        margin: 22px auto;
        width: 2.768rem;
        height: 0.36rem;
        line-height: 0.36rem;
        outline: none;
        border-radius: 25px;
        font-size: 0.152rem;
        background-color: #067ada;
        color: #ffffff;
    }
</style>