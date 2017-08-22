<template>
    <canvas id="canvas"></canvas>
</template>

<script>

export default {
    name: 'app',
    data () {
        return {
            
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
		canvas.style.border = "1px solid #456";

		ctx.strokeStyle = 'crimson';
		ctx.lineWidth = 20;

		//第一条线
		ctx.beginPath();//没有必要的。默认上来就一个状态
						//状态里面： 当前状态里面的绘制样式。
		ctx.moveTo(100,70);
		ctx.lineTo(300,70);

		ctx.stroke();

		//绘制的第二条线
		ctx.beginPath();// 2开一个新路径，开启新状态的绘图
						//开启了一个新的状态，新状态可以继承之前状态的样式，
						//但是当前状态设置所有的样式，只能作用于当前的状态。
		ctx.strokeStyle = 'gold';
		ctx.moveTo(100, 120);
		ctx.lineTo(300, 120);
		ctx.stroke();
		

		ctx.beginPath();// 3开一个新路径，开启新状态的绘图
						//开启了一个新的状态，新状态可以继承之前状态的样式，
						//但是当前状态设置所有的样式，只能作用于当前的状态。
						//lineWidth:20
						// strokeStyle: green
		ctx.strokeStyle = 'steelblue';
		ctx.moveTo(100, 170);
		ctx.lineTo(300, 170);
		ctx.stroke();

		ctx.beginPath();// 3开一个新路径，开启新状态的绘图
						//开启了一个新的状态，新状态可以继承之前状态的样式，
						//但是当前状态设置所有的样式，只能作用于当前的状态。
						//lineWidth:20
						// strokeStyle: green
		ctx.strokeStyle = 'yellowgreen';
		ctx.moveTo(100, 220);
		ctx.lineTo(300, 220);
		ctx.stroke();

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
