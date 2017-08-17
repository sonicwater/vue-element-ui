<template>
    <div id="app">
        <NavHeader></NavHeader>
        <el-row class="tac">
            <NavLeft></NavLeft>
            <el-col :span="20" class="ContentRight">
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
    .ContentRight{
        padding:10px;
    }
</style>
