<template>
    <div id="highcharts">
        <x-chart :id="id" :option="option"></x-chart>
    </div>
</template>
 
<script>
// 导入chart组件
import XChart from './chart.vue'
// 导入chart组件模拟数据
import options from './Highcharts_01_options.js'
export default {
    name: 'highcharts',
    data() {
        let option = options
        return {
            id: 'test',
            option: option
        }
    },
    components: {
        XChart
    }
}
</script>
 
<style>
#test {
    height: 100%;
}
</style>