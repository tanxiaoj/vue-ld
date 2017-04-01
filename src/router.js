import login from './views/login.vue'
import myPage from './views/myPage.vue'
import home from './views/home/home.vue'
import teamList from './views/team/team-list.vue'
import raceList from './views/race/race-list.vue'
import video from './views/video/video.vue'
import zone from './views/zone/zone.vue'
import addInfo from './views/addInfo.vue'

export default [
    {path:'/', component: home},
    {path:'/login', component: login},
    {path:'/myPage', component: myPage},
    {path:'/addInfo', component: addInfo},
    {path:'/teamList', component: teamList},
    {path:'/raceList', component: raceList},
    {path:'/video', component: video},
    {path:'/zone', component: zone}
]
