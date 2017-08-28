<template>
    <div>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
                <router-link :to="{path:'Canvas_01'}">三角形</router-link>
            </el-menu-item>
            <el-menu-item index="2">
                <router-link :to="{path:'Canvas_02'}">表格</router-link>
            </el-menu-item>
            <el-menu-item index="3">
                <router-link :to="{path:'Canvas_03'}">基于状态</router-link>
            </el-menu-item>
            <el-menu-item index="4">
                <router-link :to="{path:'Canvas_04'}">矩形</router-link>
            </el-menu-item>
            <el-menu-item index="5">
                <router-link :to="{path:'Canvas_05'}">饼状图</router-link>
            </el-menu-item>
        </el-menu>
        <el-col :span="24" class="echarts_subPane">
            <router-view></router-view>
        </el-col>
    </div>
</template>

<script>

export default {
    name: 'app',
    data () {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        }
    },
    methods:{
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    components:{

    }
}
</script>

<style>

</style>
