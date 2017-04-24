import * as type from '../mutation-types.js'

const state = {
	videoList : []
}

const mutations = {
	[type.GET_VIDEO_LIST](state ,data) {
		state.videoList = data ;
	}
}

export default {
  state,
  mutations,
};
