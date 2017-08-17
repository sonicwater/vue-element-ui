import Echarts from './components/Echarts.vue'
import Echart_01 from './components/Echart_01.vue'
import Echart_02 from './components/Echart_02.vue'
import Echart_03 from './components/Echart_03.vue'
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
        {path:'/userManagement', component:UserManagement},
        {path:'*', redirect:'/echarts'}
    ]
}