import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js'
import getters from './getters.js'
import videolist from './modules/videolist'
import teamlist from './modules/teamlist'
import racelist from './modules/racelist'
import adSwipe from './modules/adSwipe'
import login from './modules/login'
import loginout from './modules/loginout'
import storeUser from './modules/storeUser'
import activeUserlist from './modules/activeUserlist'
import topiclist from './modules/topiclist'
import issue from './modules/issue'
import topNamelist from './modules/topNamelist'


Vue.use(Vuex);

Vue.config.debug = true;

export default new Vuex.Store({
	modules : {
		videolist ,
		teamlist ,
		racelist ,
		adSwipe ,
		login,
		loginout ,
		storeUser ,
		activeUserlist ,
		topiclist,
		issue ,
		topNamelist
	},
	actions ,
	getters ,
	strict: true,
	strict: process.env.NODE_ENV !== 'production'
});