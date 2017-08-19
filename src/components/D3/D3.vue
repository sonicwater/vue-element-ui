<template>
    <div>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
                <router-link :to="{path:'D3_01'}">环形图</router-link>
            </el-menu-item>
            <el-menu-item index="2">
                <router-link :to="{path:'D3_02'}">堆叠区域图</router-link>
            </el-menu-item>
            <el-menu-item index="3">
                <router-link :to="{path:'D3_03'}">柱形图</router-link>
            </el-menu-item>
        </el-menu>
        <el-col :span="24" class="echarts_subPane">
            <router-view></router-view>
        </el-col>
    </div>
</template>
<script>
    export default {
        name: '',
        data () {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods:{
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style scoped>
    .echarts_subPane{
        padding: 40px 10px 10px 10px;
    }
    .el-menu{
        background: #D3DCE6;
    }
</style>