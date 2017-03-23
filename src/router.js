import home from './views/home/home.vue'
import teamList from './views/team/team-list.vue'
import race from './views/race/race.vue'
import video from './views/video/video.vue'
import zone from './views/zone/zone.vue'

export default [
    {path:'/', component: home},
    {path:'/team', component: teamList},
    {path:'/race', component: race},
    {path:'/video', component: video},
    {path:'/zone', component: zone}
]
