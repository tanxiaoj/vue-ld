import * as type from '../mutation-types.js'

const state = {
	adList : [],
	zoneAdList : []
}

const mutations = {
	[type.GET_AD_LIST](state,data) { 
		state.adList = data ;
	},
	[type.GET_ZONEAD_LIST](state,data) { 
		state.zoneAdList = data ;
	}
}


const getters = {
	adList (state){
		return state.adList
	},
	zoneAdList (state){
		return state.zoneAdList
	}
}

export default {
  state,
  mutations,
  getters ,
};
