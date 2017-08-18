module.exports = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        spacing : [100, 0 , 40, 0]
    },
    title: {
        floating:true,
        text: '圆心显示的标题'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color:  'black'
                }
            },
            point: {
                events: {
                    mouseOver: function(e) {  // 鼠标滑过时动态更新标题
                        // 标题更新函数，API 地址：https://api.hcharts.cn/highcharts#Chart.setTitle
                        chart.setTitle({
                            text: e.target.name+ '\t'+ e.target.y + ' %'
                        });
                    }
                    //, 
                    // click: function(e) { // 同样的可以在点击事件里处理
                    //     chart.setTitle({
                    //         text: e.point.name+ '\t'+ e.point.y + ' %'
                    //     });
                    // }
                }
            },
        }
    },
    series: [{
        type: 'pie',
        innerSize: '80%',
        name: '市场份额',
        data: [
            {name:'Firefox',   y: 45.0, url : 'http://bbs.hcharts.cn'},
            ['IE',       26.8],
            {
                name: 'Chrome',
                y: 12.8,
                sliced: true,
                selected: true,
                url: 'http://www.hcharts.cn'
            },
            ['Safari',    8.5],
            ['Opera',     6.2],
            ['其他',   0.7]
        ]
    }]
}