import api from '../api/api.js'
import * as type from './mutation-types.js'
import axios from 'axios'

let qs = require('qs');


export default {
	get_team_list ({commit} ,payload){
		axios.post(api.team_list, qs.stringify(payload))
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

		axios.post( api.activeUserlist, qs.stringify(data))
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
	
		axios.post( api.topic_list, qs.stringify(data))
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
		axios.post( api.video_list, qs.stringify(data))
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

		axios.post( api.race_list, qs.stringify(data))
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
	
		axios.post( api.storeUser, qs.stringify(user))
		.then(function (response) {
		    console.log(response.data);
		    var res = response.data ;
		    	
		    var status = res.retCode;

            commit("STORE_USER_DATA",status)
		})
		.catch(function (response) {
		    console.log(response);
		});				
	},
	issue_topic ( {commit} , data ){

		axios.post( api.issueTopic, qs.stringify(data))
		.then(function (response) {
		    console.log(response.data);

		    var res = response.data ;

		    var status = res.retCode ;
		   
		    commit("ISSUE_TOPIC",status)
            
		})
		.catch(function (response) {
		    console.log(response);
		});			
	},
	topName_list ( {commit} ,data){
		axios.post( api.topName_list, qs.stringify(data))
		.then(function (response) {
		   	
		   	var res = response.data ;
		   	var	list = res.retContent ;

		    commit("TOPNAME_LIST",list)
            
		})
		.catch(function (response) {
		    console.log(response);
		});		
	},
	issue_temp_data ( {commit} ,data){
		commit("ISSUE_TEMP_DATA",data)
	}

}