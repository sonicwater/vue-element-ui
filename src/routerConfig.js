import Login from './components/Login.vue';
import Home from './components/Home.vue';

import Welcome from './components/Welcome.vue'

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

import Canvas from './components/Canvas/Canvas.vue'
import Canvas_01 from './components/Canvas/Canvas_01.vue'
import Canvas_02 from './components/Canvas/Canvas_02.vue'
import Canvas_03 from './components/Canvas/Canvas_03.vue'
import Canvas_04 from './components/Canvas/Canvas_04.vue'
import Canvas_05 from './components/Canvas/Canvas_05.vue'

import Three from './components/Framework/Three.vue'
import Three_01 from './components/Framework/Three_01.vue'

import TableData from './components/TableData/TableData.vue'
import TableData_01 from './components/TableData/TableData_01.vue'

export default{
    //mode:'history',
    routes:[
    	{
	      	path: '/',
	      	component: Login
	    },
	    {
            path:'/home', 
            component:Home,
	      	children:[
                {path:'/home/Welcome', component:Welcome},
                {
                	path:'/home/tableData',
                	component:TableData, 
                	children:[
                		{path:'/home/tableData_01', component:TableData_01}
                	]
                },
                {
                	path:'/home/echarts',
                	component:Echarts,
                	children:[
		                {path:'/home/echart_01', component:Echart_01},
				        {path:'/home/echart_02', component:Echart_02},
				        {path:'/home/echart_03', component:Echart_03},
		            ]
                },
                {
		            path:'/home/highcharts',
		            component:Highcharts,
		            children:[
		                {path:'/home/highcharts_01', component:Highcharts_01},
		                {path:'/home/highcharts_02', component:Highcharts_02},
		                {path:'/home/highcharts_03', component:Highcharts_03},
		            ]
		        },
		        {
		            path:'/home/d3',
		            component:D3,
		            children:[
		                {path:'/home/d3_01', component:D3_01},
		                {path:'/home/d3_02', component:D3_02},
		                {path:'/home/d3_03', component:D3_03},
		            ]
		        },
		        {
		            path:'/home/canvas',
		            component:Canvas,
		            children:[
		                {path:'/home/canvas_01', component:Canvas_01},
		                {path:'/home/canvas_02', component:Canvas_02},
		                {path:'/home/canvas_03', component:Canvas_03},
		                {path:'/home/canvas_04', component:Canvas_04},
		                {path:'/home/canvas_05', component:Canvas_05},
		            ]
		        },
		        {
		            path:'/home/Three',
		            component:Three,
		            children:[
		                {path:'/home/three_01', component:Three_01}
		            ]
		        }
            ]
        },
    	
        
        
        
        {path:'*', redirect:'/'}
    ]
}