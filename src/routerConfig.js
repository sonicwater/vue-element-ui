import Echarts from './components/Echarts/Echarts.vue'
import Echart_01 from './components/Echarts/Echart_01.vue'
import Echart_02 from './components/Echarts/Echart_02.vue'
import Echart_03 from './components/Echarts/Echart_03.vue'

import Highcharts from './components/Highcharts/Highcharts.vue'
import Highcharts_01 from './components/Highcharts/Highcharts_01.vue'
import Highcharts_02 from './components/Highcharts/Highcharts_02.vue'
import Highcharts_03 from './components/Highcharts/Highcharts_03.vue'

import D3 from './components/D3/D3.vue'
import D3_01 from './components/D3/D3_01.vue'
import D3_02 from './components/D3/D3_02.vue'
import D3_03 from './components/D3/D3_03.vue'

import UserManagement from './components/UserManagement.vue'

export default{
    mode:'history',
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
        {path:'/userManagement', component:UserManagement},
        {path:'*', redirect:'/echart_01'}
    ]
}