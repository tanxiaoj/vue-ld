
export default {
	raceList :state => {
		return state.racelist.raceList
	},
	adList :state => {
		return state.adSwipe.adList
	},
	zoneAdList :state => {
		return state.adSwipe.zoneAdList
	},
	topicList :state => {
		return state.topiclist.topicList
	},
	userUpdataCode :state => {
		return state.storeUser.userUpdataCode 
	},
	videoList :state => {
		return state.videolist.videoList
	},
	activeList : state => {

		let list = state.activeUserlist.activeList ;
		
		if(list.length > 4){
			return list.slice(0,4)
		}else {
			return list
		}
	},
	issueStatus : state => {
		return state.issue.issueStatus ;
	},
	issueData : state => {
		return state.issue.issueData ;
	},
	topNamelist : state => {
		return state.topNamelist.topNamelist ;
	}
}