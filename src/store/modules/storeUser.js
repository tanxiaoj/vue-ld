import s from './base.js'
import * as type from '../mutation-types.js'

const state = {
	api : s.state.api,
	userUpdataCode : ""
}

const mutations = {
	[type.STORE_USER_DATA](state ,user) {
		var postData = {
			userId :user.userId,
			headIcon : user.headIcon,
			telphone : user.telphone,
			userName : user.userName,
			realName : user.realName,
			sex :user.sex,
			age:user.age,
			certCode:user.certCode,
			height:user.height,
			weight:user.weight,
			sessionToken:user.sessionToken,
			adeptPlace : user.adeptPlace,
		}; 

		postData = (function(obj){ // 转成post需要的字符串.  
		    var str = "";  
		   
		    for(var prop in obj){  
		        str += prop + "=" + obj[prop] + "&"  
		    }  
		    return str;  

		})(postData);  

		var xhr = new XMLHttpRequest();  
		   
		xhr.open("POST", state.api+"/appConsumer/updateCustomer", false);  
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");  
		xhr.onreadystatechange = function(){  
		    var XMLHttpReq = xhr;  
		    if (XMLHttpReq.readyState == 4) {  
		        if (XMLHttpReq.status == 200) {  
		            var res = JSON.parse(XMLHttpReq.responseText);  
		            console.log(res)
		            state.userUpdataCode = res.retCode;
		        }  
		    }  
		};  
		xhr.send(postData);   
	}
}

const actions = {
	storeUser (context,payload) {
		context.commit('STORE_USER_DATA',payload)
	}
}

const getters = {
	userUpdataCode (state){
		return state.userUpdataCode 
	}
}

export default {
	state,
	getters ,
	mutations,
	actions ,
};
