import * as type from '../mutation-types.js'

const state = {
	issueData :{
		title :"",
		content :"",
		imgs :"",
		topic:""
	} ,
	issueStatus : ""
}

const mutations = {
	[type.ISSUE_TOPIC](state ,status) {
		state.issueStatus = status ;
	},
	[type.ISSUE_TEMP_DATA](state ,data){
		state.issueData = data ;
	}
}

export default {
  state,
  mutations,
};
