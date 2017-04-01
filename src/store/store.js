import Vue from 'vue';
import Vuex from 'vuex';
import base from './modules/base.js'
import videolist from './modules/videolist'
import teamlist from './modules/teamlist'
import racelist from './modules/racelist'
import adSwipe from './modules/adSwipe'
import login from './modules/login'
import loginout from './modules/loginout'
import storeUser from './modules/storeUser'


Vue.use(Vuex);

Vue.config.debug = true;

export default new Vuex.Store({
	modules : {
		base ,
		videolist ,
		teamlist ,
		racelist ,
		adSwipe ,
		login,
		loginout ,
		storeUser
	},
	strict: true,
	strict: process.env.NODE_ENV !== 'production'
});