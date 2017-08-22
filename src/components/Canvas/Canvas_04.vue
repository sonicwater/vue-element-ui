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
		canvas.style.border = "1px solid #c00";
		// 前两个参数是:矩形的x,y坐标，　后面两个参数：矩形的宽高
		//ctx.rect(x,y,w,h);
		ctx.rect(10,10,50,50);
		ctx.stroke();

		//描边矩形
		ctx.strokeRect(80, 80, 80, 80);

		//填充矩形
		ctx.fillRect(220, 220, 40, 40);


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
