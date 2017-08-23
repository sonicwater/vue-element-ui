import Echarts from './vue-element-ui/components/Echarts/Echarts.vue'
import Echart_01 from './vue-element-ui/components/Echarts/Echart_01.vue'
import Echart_02 from './vue-element-ui/components/Echarts/Echart_02.vue'
import Echart_03 from './vue-element-ui/components/Echarts/Echart_03.vue'

import Highcharts from './vue-element-ui/components/Highcharts/Highcharts.vue'
import Highcharts_01 from './vue-element-ui/components/Highcharts/Highcharts_01.vue'
import Highcharts_02 from './vue-element-ui/components/Highcharts/Highcharts_02.vue'
import Highcharts_03 from './vue-element-ui/components/Highcharts/Highcharts_03.vue'

import D3 from './vue-element-ui/components/D3/D3.vue'
import D3_01 from './vue-element-ui/components/D3/D3_01.vue'
import D3_02 from './vue-element-ui/components/D3/D3_02.vue'
import D3_03 from './vue-element-ui/components/D3/D3_03.vue'

import Canvas from './vue-element-ui/components/Canvas/Canvas.vue'
import Canvas_01 from './vue-element-ui/components/Canvas/Canvas_01.vue'
import Canvas_02 from './vue-element-ui/components/Canvas/Canvas_02.vue'
import Canvas_03 from './vue-element-ui/components/Canvas/Canvas_03.vue'
import Canvas_04 from './vue-element-ui/components/Canvas/Canvas_04.vue'
import Canvas_05 from './vue-element-ui/components/Canvas/Canvas_05.vue'

import UserManagement from './components/UserManagement.vue'

export default{
    //mode:'history',
    routes:[
    	{
            path:'/echarts',
            component:Echarts,
            children:[
                {path:'/echart_01', component:Echart_01},
		        {path:'/echart_02', component:Echart_02},
		        {path:'/echart_03', component:Echart_03},
            ]
        },
        {
            path:'/highcharts',
            component:Highcharts,
            children:[
                {path:'/highcharts_01', component:Highcharts_01},
                {path:'/highcharts_02', component:Highcharts_02},
                {path:'/highcharts_03', component:Highcharts_03},
            ]
        },
        {
            path:'/d3',
            component:D3,
            children:[
                {path:'/d3_01', component:D3_01},
                {path:'/d3_02', component:D3_02},
                {path:'/d3_03', component:D3_03},
            ]
        },
        {
            path:'/canvas',
            component:Canvas,
            children:[
                {path:'/canvas_01', component:Canvas_01},
                {path:'/canvas_02', component:Canvas_02},
                {path:'/canvas_03', component:Canvas_03},
                {path:'/canvas_04', component:Canvas_04},
                {path:'/canvas_05', component:Canvas_05},
            ]
        },
        {path:'/userManagement', component:UserManagement},
        {path:'*', redirect:'/echart_01'}
    ]
}