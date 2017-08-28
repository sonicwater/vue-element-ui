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
					"value": 0.16,
					"color": "crimson",
					"title": "Vue.JS"
				},{
					"value": 0.22,
					"color": "gold",
					"title": "React"
				},{
					"value": 0.41,
					"color": "steelblue",
					"title": "原生Javascript"
				},{
					"value": 0.21,
					"color": "yellowgreen",
					"title": "数据可视化"
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

			//绘制文字：
			var txt =this.data[i].title + ' ' + this.data[i].value * 100 + '%';

			var x, y;
			// 计算出文字的要放的角度
			var txtAngle = tempAngle + 1/2 * angle;

			//计算文字的 坐标
			x = x0 + Math.cos( txtAngle * Math.PI / 180 ) * (radius + 20); 
			y = y0 + Math.sin( txtAngle * Math.PI / 180 ) * (radius + 20);

			//如果文字在圆形的左侧，那么让文字 对齐方式为 文字结尾对齐当前坐标。
			if( txtAngle > 90 && txtAngle < 270 ) {
				ctx.textAlign = 'end';
			}

			//把文字绘制到 扇形区域的 旁边
			ctx.fillText(txt, x, y);


			ctx.fill();
			tempAngle += angle;//下一次绘制的起始角度
		}



    }
}
</script>

<style>
	
</style>
