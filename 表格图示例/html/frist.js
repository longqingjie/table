        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
        	//标题
            title: {
                text: 'ECharts第一个表格示例'
            },
            tooltip: {},
            //数据显示名称，与series中的name对应
            legend: {
                data:['销量','成交量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20]
            },{
                name: '成交量',
                type: 'bar',
                data: [5, 20, 30, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);