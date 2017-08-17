<template>
	<el-row class="NavHeaderBar">
  		<el-col :span="6">
  			<div class="grid-content bg-purple">
  				<span class="logo">
					<i class="el-icon-menu"></i> Element
				</span>
  			</div>
  		</el-col>
  		<el-col :span="18">
  			<div class="grid-content bg-purple">
  				&nbsp;
  			</div>
  		</el-col>
	</el-row>
</template>
<script>
	export default{
		//name:'nav'
	}
</script>
<style scope>
	html,body{
		margin: 0;padding:0;
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
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