import s from './base.js'
import * as type from '../mutation-types.js'

const state = {
	api : s.state.api,
	topicList : []
}

const mutations = {
	[type.GET_TOPIC_LIST](state ,payload) {
		var postData = {
			"page": payload.page,
			"pageSize": payload.pageSize,
			"userId": payload.userId
		}; 
		   
		postData = (function(obj){ // 转成post需要的字符串.  
		    var str = "";  
		   
		    for(var prop in obj){  
		        str += prop + "=" + obj[prop] + "&"  
		    }  
		    return str;  

		})(postData);  

		var xhr = new XMLHttpRequest();  
		   
		xhr.open("POST", state.api+"/invitation/selectSplendidInvitations", false);  
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");  
		xhr.onreadystatechange = function(){  
		    var XMLHttpReq = xhr;  
		    if (XMLHttpReq.readyState == 4) {  
		        if (XMLHttpReq.status == 200) {  
		            var res = JSON.parse(XMLHttpReq.responseText);  

		            for(var i=0;i<res.retContent.list.length;i++){
		            	state.topicList.push(res.retContent.list[i])
		            }
		        }  
		    }  
		};  
		xhr.send(postData);  
	}
}

const actions = {
	getTopic (context,payload){
		context.commit("GET_TOPIC_LIST",payload)
	}
}

const getters = {
	topicList (state){
		return state.topicList
	}
}

export default {
  state,
  getters ,
  mutations,
  actions ,
};
