import s from './base.js'
import * as type from '../mutation-types.js'

const state = {
	api : s.state.api,
	adList : []
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
	}
}

const getters = {
	adList (state){
		return state.adList
	}
}

export default {
  state,
  mutations,
  getters ,
};
