import Vuex from 'vuex'
import api from './api.js'
import * as type from './mutation-types.js'
import axios from 'axios'

let qs = require('qs');


export default {
	get_team_list (context ,payload){
		var postData = {"page": payload.page,"pageSize": payload.pageSize,"cityCode": payload.cityCode}; 
	
		axios.post(api.team_list, qs.stringify(postData))
		.then(function (response) {
		    console.log(response.data);
		    var res = response.data ;
		    	
            let list = [];

            for(var i=0;i<res.retContent.length;i++){

            	list.push(res.retContent[i])
            }

            context.commit("GET_TEAM_LIST",list)
		})
		.catch(function (response) {
		    console.log(response);
		});				
	}
}