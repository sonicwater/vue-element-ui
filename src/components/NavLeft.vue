<template>
    <aside class="main-sidebar">
        <el-menu default-active="2-1" class="el-menu-vertical-demo el-menu--dark" @open="handleOpen" @close="handleClose">
        	<el-menu-item index="1">
                <router-link :to="{path:'/home/Welcome'}">
                	<i class="el-icon-menu"></i> 欢迎页面
                </router-link>
            </el-menu-item>
        	<el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-message"></i>
                    数据展示
                </template>
                <el-menu-item-group>
                	<template slot="title">表格</template>
                	<el-menu-item index="2-1">
                        <router-link :to="{path:'/home/tableData_01'}">
                        	<i class="el-icon-document"></i>表格数据
                        </router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-message"></i>
                    数据可视化
                </template>
                <el-menu-item-group>
                    <template slot="title">图表</template>
                    <el-menu-item index="3-1">
                        <router-link :to="{path:'/home/echart_01'}">
                        	<i class="el-icon-document"></i>echarts
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="3-2">
                        <router-link :to="{path:'/home/highcharts_01'}">
                        	<i class="el-icon-document"></i>highcharts
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="3-3">
                        <router-link :to="{path:'/home/D3_01'}">
                            <i class="el-icon-document"></i>D3
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
                    <el-menu-item index="3-4">
                        <router-link :to="{path:'/home/Canvas_01'}">
                        	<i class="el-icon-document"></i>原生HTML5 canvas
                        </router-link></el-menu-item>
                </el-menu-item-group>
                <!---->
                <el-submenu index="3-5">
                    <template slot="title">框架</template>
                    <el-menu-item index="3-5-1">three.js</el-menu-item>
                </el-submenu>
            </el-submenu>
            
            <!--
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
            </el-menu-item>-->
        </el-menu>
    </aside>
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
	aside.main-sidebar{
	    position: absolute;
	    top: 0;
	    left: 0;
	    padding-top: 0px;
	    margin-top: 0px;
	    min-height: 100%;
	    width: 230px;
	    z-index: 810;
	    transition: width .3s ease-in-out,-webkit-transform .3s ease-in-out;
	    transition: transform .3s ease-in-out,width .3s ease-in-out;
	    transition: transform .3s ease-in-out,width .3s ease-in-out,-webkit-transform .3s ease-in-out;
	    display: block;
	    background-color: #1f2d3d;
	}
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