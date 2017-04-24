import * as type from '../mutation-types.js'

const state = {
	teamList : []
}
const mutations = {
	[type.GET_TEAM_LIST](state ,data) {
		for(let i=0;i<data.length;i++){

			state.teamList.push(data[i])
		
		}
	}
}
export default {
  state,
  mutations,
};
