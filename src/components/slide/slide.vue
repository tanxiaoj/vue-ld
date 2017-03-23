<template>
	<div id="focus" class="focus" ref="focus">
		<div class="hd" ref="hd">
			<ul></ul>
		</div>
		<div class="bd" ref="bd">
			<ul>
				<li><a href="#"><img _src="http://115.182.45.39:8024/ledong-p2c-webapps-common/static/images/1482459097565e42cc4d228ee4ca7a9f5019790358f91.png" src="../../assets/blank.png" /></a></li>
				<li><a href="#"><img _src="http://115.182.45.39:8024/ledong-p2c-webapps-common/static/images/1482459097565e42cc4d228ee4ca7a9f5019790358f91.png" src="../../assets/blank.png"/></a></li>
				<li><a href="#"><img _src="http://115.182.45.39:8024/ledong-p2c-webapps-common/static/images/1482459097565e42cc4d228ee4ca7a9f5019790358f91.png" src="../../assets/blank.png"/></a></li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {TouchSlide} from 'common/js/TouchSlide.1.1.js'

	export default {
		mounted() {
			TouchSlide({ 
				slideCell:"#focus",
				titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
				mainCell:".bd ul", 
				effect:"left", 
				autoPlay:true,//自动播放
				autoPage:true, //自动分页
				switchLoad:"_src" //切换加载，真实图片路径为"_src" 
			});
		}
	}

</script>

<style scope>
	.focus{ width:100%; height:160px;  margin:0 auto; position:relative; overflow:hidden;   }
	.focus .hd{ width:100%; height:11px;  position:absolute; z-index:1; bottom:5px; text-align:center;  }
	.focus .hd ul{ position:absolute;right:18px;display:inline-block; left:50%;transform:translate(-50%,0);-webkit-transform:translate(-50%,0);height:6px; -webkit-border-radius:5px; -moz-border-radius:5px; border-radius:5px; font-size:0; vertical-align:top;
	}
	.focus .hd ul li{ display:inline-block; width:6px; height:6px; -webkit-border-radius:5px; -moz-border-radius:5px; border-radius:5px; background:rgba(255,255,255,0.5); 
						margin:0 5px;  vertical-align:top; overflow:hidden; }
	.focus .hd ul .on{ background:#fff;  }

	.focus .bd{ position:relative; z-index:0; }
	.focus .bd li{position: relative;}
	.focus .bd li img{ width:100%;  height:160px; background:url(loading.gif) center center no-repeat;  }
	.focus .bd li a{ -webkit-tap-highlight-color:rgba(0, 0, 0, 0); /* 取消链接高亮 */ width: 100%;height: 160px;}
</style>