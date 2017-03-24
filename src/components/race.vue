<template>
	<div class="race">
        <li>
            <div class="race-im">
                <img :src="list.publicityPicture" alt="">
                <span><i>{{list.matchSystem}}</i>人制</span>
            </div>
            <div class="title">
                <img :src="list.matchLogo" alt="">
                <span>{{list.matchName}}</span>
            </div>
            <div class="list-bottom">
                <div class="list-l">
                    报名数:<span>{{list.teamNum}}支/{{list.teamMount}}支</span>
                </div>
                <div class="list-r">
                    <i v-show="list.status==2">报名倒计时:</i><span :class="color">{{status}}</span>
                </div>
            </div>
        </li>
	</div>
</template>

<script>

	export default {
		name : "race",
		data (){
			return {
				status : "已截止",
				color : {
					setColor : false
				} 
			}
		},
		mounted (){
			this.jsStatus()	
			this.jsClass()
		},
		props : {
			list : {
				type: Object 
			}
		},
		methods : {
			jsStatus (){
				switch (this.list.status){
					case "0" : this.status = "未发布";break;
					case "1" : this.status = "已发布";break;
					case "2" : this.status = ''+this.list.day+'天'+this.list.hour+'小时';break;
					case "3" : this.status = "进行中";break;
					case "4" : this.status = "已结束";break;
				}
			},
			jsClass () {
				if(this.list.status != 2){
					this.color.setColor = true ;
				}
			}
		}
	}

</script>

<style scoped>
.setColor{
	color: #666!important;
}
.race {
    padding: 0 0.096rem 0.12rem;
    background-color: #f5f7f9;
    overflow: hidden;
}
.race-list li {
    width: 2.808rem;
    height: 1.76rem;
    background-color: #fff;
    margin-top: 0.12rem;
    border-radius: 0.04rem;
    overflow: hidden;
    position: relative;
}
.race-list li .race-im {
    width: 100%;
    height: 1.2rem;
    position: relative;
}
.race-list li .race-im a {
    display: block;
}
.race-list li .race-im img {
	display: block;
    width: 100%;
    height: 1.2rem;
}
.race-list li .race-im span {
    position: absolute;
    left: 0;
    top: 0;
    width: 0.52rem;
    height: 0.176rem;
    line-height: 0.176rem;
    color: white;
    font-size: 0.112rem;
    text-align: center;
    background-color: #2999f5;
}
.race-list li .race-im span i {
    color: #fff;
}
.race-list li .title {
    height: 0.36rem;
    line-height: 0.36rem;
    font-size: 0.128rem;
    color: #333;
    background-color: #fff;
    border-bottom: none;
}
.race-list li .title img {
    float: left;
    width: 0.176rem;
    height: 0.176rem;
    border-radius: 50%;
    overflow: hidden;
    margin: 0.104rem 0.04rem 0.08rem 0.096rem;
}
.race-list li .title span {
    float: left;
    width: 2.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
}
.race-list li .list-bottom {
    padding: 0 0.096rem;
    height: 0.2rem;
    font-size: 0.112rem;
    color: #666;
}
.list-bottom .list-l {
    float: left;
}
.list-bottom span {
    color: #f04949;
}
.list-bottom .list-r {
    float: right;
}
</style>