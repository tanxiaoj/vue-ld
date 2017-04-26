<template>
	<div class="topic">
        <div class="mes clearfix">
            <div class="headUrl">
                <img :src="topicData.headIcon" alt="">
            </div>
            <div class="user-mes">
                <h4>{{topicData.userName}}</h4>
                <i>sex</i>
                <span>一天前</span>
            </div>
        </div>
        <div class="head">
            <p>【{{topicData.title}}】<span>{{topicData.content | limitLen}}</span></p>
        </div>
        <div class="content">
            <!-- <img :src="topicData.list[0].imgUrl" alt=""> -->
            <img v-lazy="topicData.list[0].imgUrl" alt="">
        </div>
        <div class="fn">
            <dl>
                <i class="sup">{{topicData.isAtten}}</i>
            </dl>
            <dl>
                <i class="dis">{{topicData.commentNum}}</i>
            </dl>
        </div>
        <div class="name">
            <span>#</span>
            {{topicData.topicName}}
        </div>
	</div>
</template>

<script>

	export default {
		name : "topic",
        props : {
            topicData: {
                type :Object 
            }
        },
        filters :{
            limitLen (value){
                if(value.length > 20){
                    return value.substring(0,20) + "..."
                }
            }
        }
	}

</script>

<style lang="less" scoped>
    @import '../assets/css/base.less';

    image[lazy=loading] {
      width: 3rem;
      height: 1.688rem;
      margin: auto;
      opacity: 0.5;
    }

    .topic{
        margin-bottom: 0.08rem;
        padding-top: 0.128rem;
        background-color: #fff;
        font-size: 0px;     
        .mes{
            padding-left: 0.12rem;
            padding-right: 0.12rem;
            .headUrl{
                width: 0.32rem;
                height: 0.32rem;
                border-radius: 50%;
                overflow: hidden;
                float: left;
                display: inline-block;
                img{
                    width: 0.32rem;
                    height: 0.32rem;
                    display: inline-block;
                    vertical-align: top;
                    float: left;
                }
            }
            .user-mes{
                margin-left: 0.08rem;
                float: left;
                h4{
                    font-size: 0.112rem;
                    line-height: 0.112rem;
                    color: #333;
                    margin-top: 0.024rem;
                    margin-bottom: 0.08rem;                    
                }
                i{
                    width: 0.08rem;
                    height: 0.08rem;
                    background-size: 0.08rem 0.08rem;
                    vertical-align: top;
                    margin-right: 0.024rem;                    
                }
                span{
                    font-size: 0.088rem;
                    line-height: 0.088rem;
                    color: #bcbfc4;
                }
            }
        }  
        .head{
            font-size: 0.12rem;
            margin: 0.128rem 0 0.096rem 0;
            padding-left: 0.12rem;
            padding-right: 0.12rem;        
            p{
                color: #333;
                font-size: 0.12rem;
                line-height: 0.176rem;
            }   
        }
        .content{
            img{
                width: 3.0rem;
                height: 1.688rem;
            }
        }
        .fn{
            padding-top: 0.116rem;
            padding-bottom: 0.116rem;
            font-size: 0.112rem;
            color: #535353;
            position: relative;
            /* border-bottom: 1px solid #efefef; */     
            padding-left: 0.12rem;
            padding-right: 0.12rem;      
            dl{
                display: inline-block;
                vertical-align: top;
                width: 0.552rem;
                overflow: hidden;
                i{
                    height:  0.152rem;
                    line-height: 0.152rem;
                    padding-left: 0.192rem;
                    display: inline-block;
                    vertical-align: top;
                    background-size: 0.152rem 0.152rem;
                    background-repeat: no-repeat;
                }
                .sup{
                    background-image: url("@{images1}sup_ic.png");
                }
                .dis{
                    background-image: url("@{images1}dis_ic.png");
                }
            }
        }
        .name{
            border-top: 1px solid #efefef;
            font-size: 0.104rem;
            color: #2597f4;
            line-height: 0.32rem;
            padding-left: 0.12rem;
            border-bottom: 1px solid #efefef;
        }
    }
</style>