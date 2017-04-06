import s from './base.js'
import * as type from '../mutation-types.js'

const state = {
	api : s.state.api,
	adList : [],
	zoneAdList : []
}

const mutations = {
	[type.GET_AD_LIST](state) { 
		var xhr = new XMLHttpRequest();  
		xhr.open("POST", state.api+"/adManage/getADList", false);  
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

		            state.adList = res.retContent ;

		            console.log(res.retContent)
		            // console.log(state.teamlist)

		        }  
		    }  
		};  
		xhr.send();   
	},
	[type.GET_ZONEAD_LIST](state) { 
		var xhr = new XMLHttpRequest();  
		xhr.open("POST", state.api+"/adManage/getCircleADList", false);  
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

		            state.zoneAdList = res.retContent ;

		            console.log(res.retContent)
		            // console.log(state.teamlist)

		        }  
		    }  
		};  
		xhr.send();   
	}
}


const actions = {
	ads (context,payload) {
		context.commit('GET_AD_LIST',payload)
	},
	zoneAds (context,payload){
		context.commit('GET_ZONEAD_LIST',payload)
	}
}

const getters = {
	adList (state){
		return state.adList
	},
	zoneAdList (state){
		return state.zoneAdList
	}
}

export default {
  state,
  mutations,
  actions ,
  getters ,
};
