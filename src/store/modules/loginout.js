import api from '../api.js'
import log from './login.js'
import * as type from '../mutation-types.js'

const state = {
	status : "",
}

const mutations = {
	[type.LOGINOUT](state ,user) {
		var postData = {
			sessionToken : user.sessionToken
		}; 

			postData = (function(obj){ // 转成post需要的字符串.  
			    var str = "";  
			   
			    for(var prop in obj){  
			        str += prop + "=" + obj[prop] + "&"  
			    }  
			    return str;  

			})(postData);  

			var xhr = new XMLHttpRequest();  
			   
			xhr.open("POST", api.loginout, false);  
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");  
			xhr.onreadystatechange = function(){  
			    var XMLHttpReq = xhr;  
			    if (XMLHttpReq.readyState == 4) {  
			        if (XMLHttpReq.status == 200) {  
			            var res = JSON.parse(XMLHttpReq.responseText);  
			            console.log(res)
			            state.status = res.status;
			            if(res.status == 200){
			            	//退出登录成功 清空stroge , state=>loginMes
			            	sessionStorage.removeItem('loginMes');
			            	log.state.loginMes = {} ;
			            }
			        }  
			    }  
			};  
			xhr.send(postData);   
	}
}

const actions = {
	loginout (context,payload) {
		context.commit('LOGINOUT',payload)
	}
}

const getters = {
	loginoutStatus (state){
		return state.status
	}
}

export default {
  state,
  mutations,
  actions ,
  getters ,
};
