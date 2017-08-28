<template>
	<header>
		<el-row class="NavHeaderBar">
	  		<el-col :span="2">
	  			<div class="grid-content bg-purple logoIcon">
	  				<Logo/>
	  			</div>
	  		</el-col>
	  		<el-col :span="10">
	  			<div class="grid-content bg-purple logoText">
	  				<h1>Sonic Porject</h1>
	  			</div>
	  		</el-col>
	  		<el-col :span="12">
	  			<div class="grid-content bg-purple">
	  				&nbsp;
	  			</div>
	  		</el-col>
		</el-row>
	</header>
</template>
<script>
	import Logo from './Logo.vue';
	export default{
		data () {
	        return {
	            
	        }
	    },
	    components:{
	        Logo
	    }
	}
</script>
<style>
	.NavHeaderBar{
		/*
		width:100%;
		position: fixed;
	    top: 0;
	    left: 0;
	    padding-top: 0px;
	    z-index: 811;*/
	}
	.grid-content.logoIcon{
		padding-right: 10px;
    	text-align: right;
	}
	.grid-content.logoText{
		padding: 16px 0px;
	}
	.grid-content h1{
		font: 32px/48px "microsoft yahei";
	    margin: 2px;
	    color: #ddd;
	}
	.NavHeaderBar{
		background: #1D8CE0;
	}
	.el-row {
	    &:last-child {
	      margin-bottom: 0;
	    }
	  }
	  .el-col {
	    border-radius: 4px;
	  }
	  .bg-purple-dark {
	    background: #99a9bf;
	  }
	  .bg-purple {
	    background: #1D8CE0;
	  }
	  .bg-purple-light {
	    background: #e5e9f2;
	  }
	  .grid-content {
    	padding: 16px 32px;
	  }
	  .row-bg {
	    padding: 10px 0;
	    background-color: #f9fafc;
	  }
	  .logo{
	  	color: #fff; font-size: 24px;
	  }
</style>