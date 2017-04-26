import * as type from '../mutation-types.js'

const state = {
	raceList : []
}

const mutations = {
	[type.GET_RACE_LIST](state ,data) {
		for (var i=0;i<data.length;i++){
			state.raceList.push(data[i])
		}
	}
}


export default {
  state,
  mutations,
};
