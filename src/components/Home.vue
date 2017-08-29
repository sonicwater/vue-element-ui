<template>
    <div id="app">
        <NavHeader></NavHeader>
        <el-row class="tac">
            <NavLeft></NavLeft>
            <el-col :span="24" class="ContentRight">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>
<script>
	import NavHeader from './NavHeader.vue';
	import NavLeft from './NavLeft.vue';
    export default{
    	name: 'home',
        data() {
            return{
                
            }
        },
        components: {
        	NavHeader,
        	NavLeft
        },
        mounted() {

        }
    }
</script>
<style scope>
	
</style>