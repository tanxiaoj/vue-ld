import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	api : "http://api.51ledong.com:8081",
	// api : "http://115.182.45.39:8080",
	userId : "111",
	// teamlist : {}
}

// var postData = {"page":"1","pageSize":"13","cityCode":""}; 
   
// postData = (function(obj){ // 转成post需要的字符串.  
//     var str = "";  
   
//     for(var prop in obj){  
//         str += prop + "=" + obj[prop] + "&"  
//     }  
//     return str;  

// })(postData);  

// var xhr = new XMLHttpRequest();  
   
// xhr.open("POST", state.api+"/ledong-p2c-webapps-wwwp/team/getAllTeam", false);  
// xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");  
// xhr.onreadystatechange = function(){  
//     var XMLHttpReq = xhr;  
//     if (XMLHttpReq.readyState == 4) {  
//         if (XMLHttpReq.status == 200) {  
//             var res = JSON.parse(XMLHttpReq.responseText);  

//             state.teamlist = res.retContent;

//             console.log(state.teamlist)

//         }  
//     }  
// };  
// xhr.send(postData);  

export default new Vuex.Store({
	state 
});