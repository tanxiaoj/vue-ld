import home from './views/home/home.vue'
import teamList from './views/team/team-list.vue'
import raceList from './views/race/race-list.vue'
import video from './views/video/video.vue'
import zone from './views/zone/zone.vue'

export default [
    {path:'/', component: home},
    {path:'/teamList', component: teamList},
    {path:'/raceList', component: raceList},
    {path:'/video', component: video},
    {path:'/zone', component: zone}
]
