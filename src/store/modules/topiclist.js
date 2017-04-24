import api from '../api.js'
import * as type from '../mutation-types.js'

const state = {
	topicList : []
}

const mutations = {
	[type.GET_TOPIC_LIST](state ,data) {

		for(let i=0;i<data.length;i++){

			state.topicList.push(data[i])
		
		}
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
};
