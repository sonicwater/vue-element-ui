<template>
    <div class="wrapper">
		<div class="container">
			<h1>欢迎登陆</h1>
			<form class="form">
				<i class="fa fa-user-o fw" aria-hidden="true"></i>
				<input type="text" v-model="username" placeholder="用户名">
				<i class="fa fa-lock fw" aria-hidden="true"></i>
				<input type="password" v-model="password" placeholder="密码">
				<button type="submit" @click="doLogin">登陆</button>
			</form>
		</div>
		
		<ul class="bg-bubbles">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
		
	</div>

</template>

<script>
export default {
    name: 'login',
    data () {
        return {
			username: '',
        	password: ''
        }
    },
    methods:{
    	checkValidity(){
	        let isValid = true
	        if(!this.username || !this.password) {
	          	this.$message.error({
          			message: this.username ? '密码不能为空' : '用户名不能为空'
	          	})
	          	return false
	        }
	        if(!/^[-a-zA-Z0-9_]{2,30}$/.test(this.username)) {
	          	this.$message.error({message: '请输入字幕开头的用户名'})
	          	isValid = false
	        }
	        if(this.password.legend < 3) {
	          	this.$message.error({message: '密码长度太短'})
	          	isValid = false
	        }
	        return isValid
      	},
	    doLogin(){
	        if (this.checkValidity()) {
	          	window.localStorage.setItem('username', this.username)
	          	this.$router.push({path: '/home/welcome'});
	        }
	    }
    },
    components:{

    }
}
</script>

<style scoped>
	@import "../css/login.css";
</style>
