import s from './base.js'
import * as type from '../mutation-types.js'

const state = {
	api : s.state.api,
	teamList : []
}
const mutations = {
	[type.GET_TEAM_LIST](state ,payload) {
		var postData = {"page": payload.page,"pageSize": payload.pageSize,"cityCode": payload.cityCode}; 
		   
		postData = (function(obj){ // 转成post需要的字符串.  
		    var str = "";  
		   
		    for(var prop in obj){  
		        str += prop + "=" + obj[prop] + "&"  
		    }  
		    return str;  

		})(postData);  

		var xhr = new XMLHttpRequest();  
		   
		xhr.open("POST", state.api+"/team/getAllTeam", false);  
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");  
		xhr.onreadystatechange = function(){  
		    var XMLHttpReq = xhr;  
		    if (XMLHttpReq.readyState == 4) {  
		        if (XMLHttpReq.status == 200) {  
		            var res = JSON.parse(XMLHttpReq.responseText);  
		            console.log(res)
		             
		            if(res.retMessage == "emptydatas"){
		            	return ;
		            }

		            for(var i=0;i<res.retContent.length;i++){
		            	state.teamList.push(res.retContent[i])
		            }

		            console.log(state.teamList)
		            // console.log(state.teamlist)

		        }  
		    }  
		};  
		xhr.send(postData);  
	}
}

export default {
  state,
  mutations,
};
