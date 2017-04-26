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

export default {
  state,
  mutations,
};
