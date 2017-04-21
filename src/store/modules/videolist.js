import api from '../api.js'
import * as type from '../mutation-types.js'

const state = {
	videoList : []
}

const mutations = {
	[type.GET_VIDEO_LIST](state ,payload) {
		var postData = {"page": payload.page,"pageSize": payload.pageSize,"cityCode": payload.cityCode}; 
		   
		postData = (function(obj){ // 转成post需要的字符串.  
		    var str = "";  
		   
		    for(var prop in obj){  
		        str += prop + "=" + obj[prop] + "&"  
		    }  
		    return str;  

		})(postData);  

		var xhr = new XMLHttpRequest();  
		   
		xhr.open("POST", api.video_list, false);  
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");  
		xhr.onreadystatechange = function(){  
		    var XMLHttpReq = xhr;  
		    if (XMLHttpReq.readyState == 4) {  
		        if (XMLHttpReq.status == 200) {  
		            var res = JSON.parse(XMLHttpReq.responseText);  

		            state.videoList = res.retContent;

		            console.log(state.videoList)

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
