<template>
    <el-col :span="4">
        <el-menu default-active="1-1" class="el-menu-vertical-demo el-menu--dark" @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-message"></i>
                    数据可视化
                </template>
                <el-menu-item-group>
                    <template slot="title">图表</template>
                    <el-menu-item index="1-1">
                        <router-link :to="{path:'echart_01'}">echarts</router-link>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <router-link :to="{path:'highcharts_01'}">highcharts</router-link>
                    </el-menu-item>
                    <el-menu-item index="1-3">
                        <router-link :to="{path:'D3_01'}">
                            D3
                            <svg width="72" height="12">
                                <g id="to-sun">
                                    <circle fill="crimson" r="6" cx="16" cy="6"/>
                                    <circle fill="gold" r="6" cx="32" cy="6"/>
                                    <circle fill="steelblue" r="6" cx="48" cy="6"/>
                                    <circle fill="yellowgreen" r="6" cx="64" cy="6"/>
                                </g>
                            </svg>
                        </router-link>
                    </el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="绘图">
                    <el-menu-item index="1-3">原生HTML5 canvas</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template slot="title">框架</template>
                    <el-menu-item index="1-4-1">three.js</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <router-link :to="{path:'userManagement'}">用户管理</router-link>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                导航三
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                导航三
            </el-menu-item>
            <el-menu-item index="5">
                <i class="el-icon-setting"></i>
                导航三
            </el-menu-item>
            <el-menu-item index="6">
                <i class="el-icon-setting"></i>
                导航三
            </el-menu-item>
        </el-menu>
    </el-col>
</template>
<script>
  	export default{
  		  methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
  	}
</script>
<style>
    .el-menu{
        border-radius: 0px;
    }
    .el-menu--dark a{
        color: #fff;
        text-decoration: none;
    }
    .el-menu-item.is-active a{
        color: #20a0ff;text-decoration: none;
    }
</style>