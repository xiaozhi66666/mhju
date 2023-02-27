<template>
    <div class="dataView">
        <el-card>
            <div id="main1">12</div>
        </el-card>
        <el-card>
            <div id="main2">32</div>
        </el-card>
    </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    name: 'MhjyDataView',

    data() {
        return {

        };
    },

    mounted() {
        const box = document.getElementById('main1')
        const box1 = document.getElementById('main2')
        const myChart = echarts.init(box)
        const myChart1 = echarts.init(box1)
        let option1 = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                }
            ]
        };
        let option = {
            title: {
                text: 'Stacked Line'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'Email',
                    type: 'line',
                    stack: 'Total',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'Union Ads',
                    type: 'line',
                    stack: 'Total',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'Video Ads',
                    type: 'line',
                    stack: 'Total',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: 'Direct',
                    type: 'line',
                    stack: 'Total',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: 'Search Engine',
                    type: 'line',
                    stack: 'Total',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };
        myChart.setOption(option)
        myChart1.setOption(option1)
        window.addEventListener('resize', function () {
            myChart.resize();
            myChart1.resize();
        });
    },

    methods: {
        draw() {

        }
    },
};
</script>

<style lang="less" scoped>
.dataView {
    width: 100%;
    position: relative;


    display: flex;
    justify-content: space-between;

    // height: 100%;
    .el-card {
        width: 48%;

        #main1,
        #main2 {
            // position: absolute;
            width: 100%;
            height: 500px;
        }
    }
}
</style>