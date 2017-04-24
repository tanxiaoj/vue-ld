import * as type from '../mutation-types.js'

const state = {
	activeList :[]
}

const mutations = {
	[type.ACTIVE_USER_LIST](state ,data) {
		state.activeList = data ;
	}
}

const getters = {
	activeList (state){
		if(state.activeList.length > 4){
			return state.activeList.slice(0,4)
		}else {
			return state.activeList
		}
	}
}

export default {
  state,
  mutations,
  getters ,
};
