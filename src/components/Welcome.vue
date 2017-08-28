<template>
    <div>

		<el-row>
		  	<el-col :span="24">
	  			<h2 class="h2">
				    Sonic Project
				    <small>Vue + ElementUI with Webpack</small>
			  	</h2>
		  	</el-col>
		</el-row>

		<el-row :gutter="24">
		  	<el-col :span="24">
		  		<div class="grid-content">
		  			<div class="info-box vue">
		  				<span class="info-box-icon"></span>
		  				<div class="info-box-content">
			  				<span class="info-box-text">前端框架</span>
			  				<span class="info-box-number">Vue</span>
			  				<div class="progress">
			                  	<div class="progress-bar" style="width: 70%"></div>
			                </div>
			                <span class="progress-description">^2.3.3</span>
			  			</div>
		  			</div>
		  			
		  		</div>
		  	</el-col>
		  	<el-col :span="24">
		  		<div class="grid-content">
		  			<div class="info-box element-ui">
		  				<span class="info-box-icon"></span>
		  				<div class="info-box-content">
			  				<span class="info-box-text">UI库</span>
			  				<span class="info-box-number">ElementUI</span>
			  				<div class="progress">
			                  	<div class="progress-bar" style="width: 70%"></div>
			                </div>
			                <span class="progress-description">^1.4.2</span>
			  			</div>
		  			</div>
		  		</div>
		  	</el-col>
		  	<el-col :span="24">
		  		<div class="grid-content">
		  			<div class="info-box webpack">
		  				<span class="info-box-icon"></span>
		  				<div class="info-box-content">
			  				<span class="info-box-text">工程化工具</span>
			  				<span class="info-box-number">Webpack</span>
			  				<div class="progress">
			                  	<div class="progress-bar" style="width: 70%"></div>
			                </div>
			                <span class="progress-description">^2.6.1</span>
			  			</div>
		  			</div>
		  		</div>
		  	</el-col>
		  	<el-col :span="24">
		  		<div class="grid-content">
		  			
		  		</div>
		  	</el-col>
		</el-row>

    </div>
</template>

<script>

export default {
    name: 'welcome',
    data () {
        return {

        }
    },
    methods:{

    },
    components:{

    }
}
</script>

<style scoped>
	.h2{
		font-size: 1.5em;color: #333;    margin: 10px;
	}
	.info-box {
	    display: block;
	    background: #fff;
	    width: 50%;
	    box-shadow: 0 1px 1px rgba(0,0,0,.1);
	    border-radius: 2px;
	    margin-bottom: 15px;
	}
	.info-box-content {
	    padding: 5px 10px;
	    margin-left: 80px;
	    color:#fff;
	}
	.vue{
		border:1px solid #42b983;
	}
	.vue .info-box-content {
		background:#42b983;
	}
	.element-ui{
		border:1px solid #20a0ff;
	}
	.element-ui .info-box-content {
		background:#20a0ff;
	}
	.webpack{
		border:1px solid rgb(28, 120, 192);
	}
	.webpack .info-box-content {
		background:rgb(28, 120, 192);
	}
	.info-box-text{
	    display: block;
	    font-size: 14px;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.info-box-number {
	    display: block;
	    font-weight: 700;
	    font-size: 18px;
	}
	.info-box .progress, .info-box .progress .progress-bar {
	    border-radius: 0;overflow: hidden;
	}
	.info-box .progress .progress-bar {
	    background: #fff;
	}
	.progress-bar {
	    float: left;
	    width: 0;
	    height: 100%;
	    font-size: 12px;
	    line-height: 20px;
	    color: #fff;
	    text-align: center;
	    background-color: #337ab7;
	    box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);
	    transition: width .6s ease;
	}
	.info-box .progress {
	    background: rgba(0,0,0,.2);
	    margin: 5px -10px 5px -10px;
	    height: 2px;
	}
	.info-box-text, .progress-description {
	    display: block;
	    font-size: 14px;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.info-box-icon {
	    border-top-left-radius: 2px;
	    border-top-right-radius: 0;
	    border-bottom-right-radius: 0;
	    border-bottom-left-radius: 2px;
	    display: block;
	    float: left;
	    height: 80px;
	    width: 80px;
	    text-align: center;
	    font-size: 45px;
	    line-height: 80px;
	    background: rgba(0,0,0,.2);
	}
	.vue .info-box-icon{
		background:url("https://camo.githubusercontent.com/728ce9f78c3139e76fa69925ad7cc502e32795d2/68747470733a2f2f7675656a732e6f72672f696d616765732f6c6f676f2e706e67") center center no-repeat;
		background-size: 75% 75%;
	}
	.element-ui .info-box-icon{
		background:url("https://camo.githubusercontent.com/462f24153b8e8739c8ea71f7102585c4cb0e1575/68747470733a2f2f63646e2e7261776769742e636f6d2f456c656d6546452f656c656d656e742f6465762f656c656d656e745f6c6f676f2e737667") 14px 0 no-repeat;
		background-size: 290% 100%;
	}
	.webpack .info-box-icon{
		background:url("https://camo.githubusercontent.com/d18f4a7a64244f703efcb322bf298dcb4ca38856/68747470733a2f2f7765627061636b2e6a732e6f72672f6173736574732f69636f6e2d7371756172652d6269672e737667") center center no-repeat;
		background-size: 75% 75%;
	}
</style>
