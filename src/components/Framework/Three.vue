<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
                <router-link :to="{path:'Three_01'}">立方体</router-link>
            </el-menu-item>
        </el-menu>
        <el-col :span="24" class="echarts_subPane">
            <router-view></router-view>
        </el-col>
    </div>
</template>

<script>

export default {
    name: 'three',
    data () {
        return {
            activeIndex: '1'
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
