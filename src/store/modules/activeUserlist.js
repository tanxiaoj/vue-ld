import * as type from '../mutation-types.js'

const state = {
	activeList :[]
}

const mutations = {
	[type.ACTIVE_USER_LIST](state ,data) {
		state.activeList = data ;
	}
}

export default {
  state,
  mutations,
};
