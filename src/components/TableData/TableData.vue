<template>
	<div>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
                <router-link :to="{path:'tableData_01'}">表格1</router-link>
            </el-menu-item>
        </el-menu>
        <el-col :span="24" class="tableData_subPane">
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
    .tableData_subPane{
        padding: 10px 0px 0px 0px;
    }
    .el-menu{
        background: #D3DCE6;
    }
</style>