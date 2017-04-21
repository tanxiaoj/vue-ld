import api from '../api.js'
import * as type from '../mutation-types.js'

const state = {
	activeList :[]
}

const mutations = {
	[type.ACTIVE_USER_LIST](state ,param) {
		var postData = {
			userId :param.userId,
			status : 1
		}; 

			postData = (function(obj){ // 转成post需要的字符串.  
			    var str = "";  
			   
			    for(var prop in obj){  
			        str += prop + "=" + obj[prop] + "&"  
			    }  
			    return str;  

			})(postData);  

			var xhr = new XMLHttpRequest();  
			   
			xhr.open("POST", api.activeUserlist, false);  
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");  
			xhr.onreadystatechange = function(){  
			    var XMLHttpReq = xhr;  
			    if (XMLHttpReq.readyState == 4) {  
			        if (XMLHttpReq.status == 200) {  
			            var res = JSON.parse(XMLHttpReq.responseText);  
			            
			            state.activeList = res.retContent ;
			        }  
			    }  
			};  
			xhr.send(postData);   
	}
}

const actions = {
	activeList (context,payload) {
		context.commit('ACTIVE_USER_LIST',payload)
	}
}

const getters = {
	activeList (state){
		if(state.activeList.length > 4){
			return state.activeList.slice(0,4)
		}else {
			return state.activeList
		}
	}
}

export default {
  state,
  mutations,
  actions ,
  getters ,
};
