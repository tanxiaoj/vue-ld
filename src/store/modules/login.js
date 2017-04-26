import api from '../../api/api.js'
import * as type from '../mutation-types.js'

const state = {
	status : "",
	loginMes : {}
}

const mutations = {
	[type.LOGIN](state ,payload) {
		var postData = {"telphone": payload.telphone,"password": payload.password,"loginType": payload.loginType,"ipAddr":payload.ipAddr}; 

			postData = (function(obj){ // 转成post需要的字符串.  
			    var str = "";  
			   
			    for(var prop in obj){  
			        str += prop + "=" + obj[prop] + "&"  
			    }  
			    return str;  

			})(postData);  

			var xhr = new XMLHttpRequest();  
			   
			xhr.open("POST", api.login, false);  
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");  
			xhr.onreadystatechange = function(){  
			    var XMLHttpReq = xhr;  
			    if (XMLHttpReq.readyState == 4) {  
			        if (XMLHttpReq.status == 200) {  
			            var res = JSON.parse(XMLHttpReq.responseText);  
			            console.log(res)
			            
			            state.status = res.status ;

			            if(res.status == 200){ 
			            	state.loginMes = res.data ;
			            	sessionStorage.setItem('loginMes',JSON.stringify(res.data));	
			            }
			        }  
			    }  
			};  
			xhr.send(postData);   
	}
}

const actions = {
	login (context,payload) {
		context.commit('LOGIN',payload)
	}
}

const getters = {
	status (state){
		return state.status
	},
	loginMes (state){

		if(state.loginMes.sessionToken) {
			return state.loginMes
		}
		else{

			let data = JSON.parse(sessionStorage.getItem('loginMes'))

			if(data){
				return data 
			}else {
				return "未登录"
			}
		}
	},
	sex (state,getters){
		if(getters.loginMes !='未登录'){
			if(getters.loginMes.userData.sex==1){
				return "女"
			}else {
				return "男"
			}
		}
	},
	weight (state,getters){
		if(getters.loginMes !='未登录'){
			return (getters.loginMes.userData.weight)
		}
	},
	pos (state,getters){
		if(getters.loginMes !='未登录'){
			switch (getters.loginMes.pos){
				case "0" :return "前锋";break;
				case "1" :return "小前锋";break;
				case "2" :return "中锋";break;
				case "3" :return "小后卫";break;
				case "4" :return "后卫";break;
				case "undefined" :return "未设置";break;
			}
		}
	}
}

export default {
  state,
  mutations,
  actions ,
  getters ,
};
