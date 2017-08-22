<template>
    <canvas id="canvas" width="600" height="300"></canvas>
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
    mounted() {
        var canvas = document.getElementById("canvas");
        canvas.style.marginTop = "10px";
        canvas.style.border = '2px solid #333';
        canvas.width = 600;
        canvas.height = 300;
        // canvas.sytle.height = 1200;// 千万别这么玩。

        //第二步： 拿到 canvas的上下文
        var ctx = canvas.getContext('2d'); // 'webgl'

        //第三步： 绘制
        //moveTo(x0,y0);//第一个参数是x点坐标， 第二个参数是y点坐标
        ctx.moveTo(100,100); //把画笔移动到 100,100点
        ctx.lineTo(200,100); //从画笔的位置 画一条直线到 200,100点
        ctx.lineTo(100,200); //从当前位置，再画一条直线到 100,200点。

        // ctx.lineTo(100,100);
        ctx.closePath();// 闭合路径

        //设置线宽
        ctx.lineWidth = 4;
        //设置描边的样式
        // ctx.strokeStyle = 'rgba(233,233,233,.8)'; //跟上颜色， rgb(), rgba() red blue #888
        ctx.strokeStyle = '#334455'; //跟上颜色， rgb(), rgba() red blue #888
        ctx.stroke();//stroke：描边的意思。

        //设置填充的样式
        ctx.fillStyle = '#CCFF33';
        //进行填充的工作
        ctx.fill();

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
