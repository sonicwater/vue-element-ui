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
import NavHeader from './components/NavHeader.vue';
import NavLeft from './components/NavLeft.vue';
export default {
    name: 'app',
    data () {
        return {
            
        }
    },
    components:{
        NavHeader,
        NavLeft
    }
}
</script>

<style>
    html,body{
        margin: 0;padding:0;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
    .ContentRight{
        padding:10px;padding-left: 240px;margin-top: 0px;
    }
</style>
