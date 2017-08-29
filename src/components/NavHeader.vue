<template>
	<header>
		<el-row class="NavHeaderBar">
	  		<el-col :span="6">
	  			<div class="grid-content bg-purple logoIcon">
	  				<router-link :to="{path:'/home/Welcome'}">
	                	<Logo/>
	                </router-link>
	  			</div>
	  		</el-col>
	  		<el-col :span="12">
	  			<div class="grid-content bg-purple">
					    
	  			</div>
	  		</el-col>
	  		<el-col :span="6" id="el-menu-login">

					<el-menu 
						:default-active="activeIndex0" 
						class="el-menu-login" 
						mode="horizontal" 
						@select="handleSelect0"
					>
					  	<el-submenu index="1">
					    	<template slot="title">
					    		<img alt="@sonicwater" class="avatar" src="https://avatars0.githubusercontent.com/u/4988532?v=4&amp;s=40" height="20" width="20">
					    		<span class="avatarText">
					    			欢迎光临: 
					    			{{username}}
					    		</span>
					    	</template>
					    	<el-menu-item index="1-1" @click="signOut">
					    		<i class="el-icon-information"></i> 登出
					    	</el-menu-item>
					  	</el-submenu>
					</el-menu>	


	  				
	  		</el-col>
		</el-row>
	</header>
</template>
<script>
	import Logo from './Logo.vue';
	export default{
		data () {
	        return {
        		activeIndex0: '1',
	            username:window.localStorage.getItem('username')
	        }
	    },
	    components:{
	        Logo
	    },
	    methods: {
	      	handleSelect0(key, keyPath) {
	        	console.log(key, keyPath);
	      	},
	      	signOut(){
	        	this.$router.push({path: '/'})
	      	}
	    }
	}
</script>
<style>
	.el-menu--horizontal .el-submenu__title:hover {
    	background-color:#20A0FF;
	}
	.el-menu--horizontal .el-submenu .el-submenu__icon-arrow{
		color:#fff;
	}
</style>
<style scoped>
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
		padding: 10px 32px;
	}
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
	.logo{
		height: 38px;
	}

	.el-menu-login{
		background:none;float: right;
	}

	.avatar {
		display: inline-block;
		overflow: hidden;
		line-height: 1;
		vertical-align: middle;
		border-radius: 3px;
		
		margin-right: 5px;
	}
	.avatarText{
		display: inline-block;
		overflow: hidden;
		line-height: 1;
		vertical-align: middle;
		color:#eee;
	}

</style>
