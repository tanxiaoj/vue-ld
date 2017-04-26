import login from './views/login.vue'
import myPage from './views/myPage.vue'
import home from './views/home/home.vue'
import teamList from './views/team/team-list.vue'
import raceList from './views/race/race-list.vue'
import videoList from './views/video/video-list.vue'
import zone from './views/zone/zone.vue'
import addInfo from './views/addInfo.vue'
import issue from './views/issue.vue'

export default [
    {path:'/', component: home},
    {path:'/login', component: login},
    {path:'/myPage', component: myPage},
    {path:'/addInfo', component: addInfo},
    {path:'/teamList', component: teamList},
    {path:'/raceList', component: raceList},
    {path:'/videoList', component: videoList},
    {path:'/zone', component: zone},
    {path:'/issue', component: issue}
]
