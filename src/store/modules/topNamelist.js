import * as type from '../mutation-types.js'

const state = {
	topNamelist : []
}

const mutations = {
	[type.TOPNAME_LIST](state ,data) {
		state.topNamelist = data ;
	}
}

export default {
  state,
  mutations,
};
