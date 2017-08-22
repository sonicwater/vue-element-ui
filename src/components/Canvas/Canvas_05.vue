<template>
    <canvas id="canvas"></canvas>
</template>

<script>

export default {
    name: 'app',
    data () {
        return {
            data:[
            	{
					"value": 0.125,
					"color": "crimson",
					"title": "应届生"
				},{
					"value": 0.225,
					"color": "gold",
					"title": "社会招生"
				},{
					"value": 0.4112,
					"color": "steelblue",
					"title": "老学员推荐"
				},{
					"value": 0.2388,
					"color": "yellowgreen",
					"title": "公开课"
				}
			]
        }
    },
    components:{

    },
    mounted(){

    	var canvas = document.querySelector( '#canvas' );
		var ctx = canvas.getContext( '2d' );

		canvas.width = 600;
		canvas.height = 300;
		canvas.style.marginTop = "10px";
		canvas.style.border = "1px solid #c00";

		var tempAngle = -90;

		//设置角度的中间变量
		var x0 = 200, y0 = 150;
		var radius = 100;
		// 从-90度开始绘制
		for( var i = 0; i < this.data.length; i++ ) {
			ctx.beginPath();//因为设置不同的颜色，所以每次绘制完起一个新状态
			ctx.moveTo(x0,y0);
		    //当前扇形的角度
			var angle = this.data[i].value * 360;
			ctx.fillStyle = this.data[i].color;
			//开始从 tempAngle绘制
			var startAngle  = tempAngle * Math.PI / 180;
			//从tempAngle绘制到 我们自己的angle区域
			var endAngle = (tempAngle + angle) * Math.PI / 180;

			//参数： x0，y0 圆心坐标，  radius：半径
			// startAngle：开始绘制的弧度
			// endAngle：结束绘制的弧度！！
			ctx.arc(x0, y0, radius, startAngle, endAngle);

			ctx.fill();
			tempAngle += angle;//下一次绘制的起始角度
		}



    }
}
</script>

<style>
    html,body{
        margin: 0;padding:0;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
    .ContentRight{
        padding:10px;
    }
</style>
