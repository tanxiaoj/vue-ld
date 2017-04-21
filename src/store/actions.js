import Vuex from 'vuex'
import api from './api.js'
import * as type from './mutation-types.js'

let qs = require('qs');

// const actions = {
// 	getTeamlist (context,payload){

// 		var postData = {"page": payload.page,"pageSize": payload.pageSize,"cityCode": payload.cityCode}; 
	
// 		axios.post(state.api+"/team/getAllTeam", qs.stringify(postData))
// 		.then(function (response) {
// 		    console.log(response.data);
// 		    var res = response.data ;
		    	
//             let list = [];

//             for(var i=0;i<res.retContent.length;i++){

//             	list.push(res.retContent[i])
//             }

//             context.commit("GET_TEAM_LIST",list)
// 		})
// 		.catch(function (response) {
// 		    console.log(response);
// 		});		

// 	}
// }

// export const get_team_list = ({ dispatch }, page, size, cityCode) => {

// 		var postData = {"page": page,"pageSize": size,"cityCode": cityCode}; 
	
// 		axios.post(api.team_list, qs.stringify(postData))
// 		.then(function (response) {
// 		    console.log(response.data);
// 		    var res = response.data ;
		    	
//             let list = [];

//             for(var i=0;i<res.retContent.length;i++){

//             	list.push(res.retContent[i])
//             }

//             dispatch("GET_TEAM_LIST",list)
// 		})
// 		.catch(function (response) {
// 		    console.log(response);
// 		});		

// }
const actions = {
	get_team_list : ({ commit }, count) => {
    	commit('type.GET_TEAM_LIST', count)
	}
}

export default {
	actions
}