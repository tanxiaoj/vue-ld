import * as type from '../mutation-types.js'

const state = {
	userUpdataCode : ""
}

const mutations = {
	[type.STORE_USER_DATA](state ,status) {
		state.userUpdataCode = status ;
	}
}

export default {
	state,
	mutations,
};
