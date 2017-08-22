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
		canvas.style.border = "1px solid blue";

		var rectH =  50;
		var rectW = 100;
		ctx.lineWidth = 1;
		//绘制表格
		// 第一步： 绘制横线
		console.log(canvas.width / rectH)
		for(var i = 0; i < (canvas.width / rectH)/2; i++ ) {
			ctx.moveTo(0, i * rectH);//如果不设置moveTo，当前画笔没有位置
			ctx.lineTo(canvas.width, i * rectH);

			//第二步：绘制竖线：
			ctx.moveTo( i * rectW ,0);
			ctx.lineTo(i * rectW, canvas.height );
		}

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
