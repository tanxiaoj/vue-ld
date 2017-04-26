import api from '../api/api.js'
import * as type from './mutation-types.js'
import axios from 'axios'

let qs = require('qs');


export default {
	get_team_list ({commit} ,payload){
		var postData = {"page": payload.page,"pageSize": payload.pageSize,"cityCode": payload.cityCode}; 
	
		axios.post(api.team_list, qs.stringify(postData))
		.then(function (response) {
		    console.log(response.data);
		    var res = response.data ;
		    	
            let list = [];

            for(var i=0;i<res.retContent.length;i++){

            	list.push(res.retContent[i])
            }

            commit("GET_TEAM_LIST",list)
		})
		.catch(function (response) {
		    console.log(response);
		});				
	},
	get_ad_list ( {commit} ){
		axios.post(api.adlist)
		.then(function (response) {
		    console.log(response.data);
		    var res = response.data ;
		    	
            let data = [];

            data = res.retContent ;

            commit("GET_AD_LIST",data)
		})
		.catch(function (response) {
		    console.log(response);
		});				
	},
	get_zoneAd_list ( {commit} ){
		axios.post(api.adCircleList)
		.then(function (response) {
		    console.log(response.data);
		    var res = response.data ;
		    	
            let data = [];

            data = res.retContent ;

            commit("GET_ZONEAD_LIST",data)
		})
		.catch(function (response) {
		    console.log(response);
		});				
	},
	active_user_list ( {commit} , data){
		var postData = {"page": data.page,"pageSize": data.pageSize,"cityCode": data.cityCode}; 
	
		axios.post( api.activeUserlist, qs.stringify(postData))
		.then(function (response) {
		    console.log(response.data);
		    var res = response.data ;
		    	
            let list = [];

            list = res.retContent ;

            commit("ACTIVE_USER_LIST",list)
		})
		.catch(function (response) {
		    console.log(response);
		});				
	},
	get_topic_list ( {commit} ,data){
		var postData = {"page": data.page,"pageSize": data.pageSize,"cityCode": data.cityCode}; 
	
		axios.post( api.topic_list, qs.stringify(postData))
		.then(function (response) {
		    console.log(response.data);
		    var res = response.data ;
		    	
            let list = [];

            for(var i=0;i<res.retContent.list.length;i++){
            	list.push(res.retContent.list[i])
            }

            commit("GET_TOPIC_LIST",list)
		})
		.catch(function (response) {
		    console.log(response);
		});				
	},
	get_video_list ( {commit} ,data){
		var postData = {"page": data.page,"pageSize": data.pageSize,"cityCode": data.cityCode}; 
	
		axios.post( api.video_list, qs.stringify(postData))
		.then(function (response) {
		    console.log(response.data);
		    var res = response.data ;
		    	
            let list = [];

            list = res.retContent;

            commit("GET_VIDEO_LIST",list)
		})
		.catch(function (response) {
		    console.log(response);
		});				
	},
	get_race_list ( {commit} ,data){
		var postData = {"page": data.page,"pageSize": data.pageSize,"cityCode": data.cityCode}; 
	
		axios.post( api.race_list, qs.stringify(postData))
		.then(function (response) {
		    console.log(response.data);
		    var res = response.data ;
		    	
            let list = [];

            for(var i=0;i<res.retContent.length;i++){
            	list.push(res.retContent[i])
            }

            commit("GET_RACE_LIST",list)
		})
		.catch(function (response) {
		    console.log(response);
		});				
	},
	store_user ( {commit} ,user){
		var postData = {
			userId :user.userId,
			headIcon : user.headIcon,
			telphone : user.telphone,
			userName : user.userName,
			realName : user.realName,
			sex :user.sex,
			age:user.age,
			certCode:user.certCode,
			height:user.height,
			weight:user.weight,
			sessionToken:user.sessionToken,
			adeptPlace : user.adeptPlace,
		}; 
	
		axios.post( api.storeUser, qs.stringify(postData))
		.then(function (response) {
		    console.log(response.data);
		    var res = response.data ;
		    	
		    var status = res.retCode;

            commit("STORE_USER_DATA",status)
		})
		.catch(function (response) {
		    console.log(response);
		});				
	}

}