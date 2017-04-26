
let host = "http://api.51ledong.com:8081/ledong-p2c-webapps-wwwp";


export default {
    team_list: host + "/team/getAllTeam" ,
    video_list : host + "/team/getAllTeam",
    race_list :host +"/match/getMatchListForCustomer",
    adlist : host +"/adManage/getADList",
    login : host + "/appConsumer/login",
    loginout : host +"/appConsumer/logout",
    storeUser : host +"/appConsumer/updateCustomer",
    activeUserlist :host +"/appConsumer/selectActiveCustomer",
    topic_list :host +"/invitation/selectSplendidInvitations",
    adCircleList :host +"/adManage/getCircleADList"
}