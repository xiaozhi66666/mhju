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
import { getMapDataAPI } from '@/api/map'
export default {
    name: 'MhjyDataView',

    data() {
        return {

        };
    },
    async created() {
        const res = await getMapDataAPI()
        let { legend, xAxis, series } = res.data.data
        this.draw(legend, xAxis, series)
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
            legend: {},
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
            xAxis: {},
            yAxis: {
                type: 'value'
            },
            series: []
        };
        myChart.setOption(option)
        myChart1.setOption(option1)
        window.addEventListener('resize', function () {
            myChart.resize();
            myChart1.resize();
        });
    },

    methods: {
        async draw(legend, xAxis, series) {
            this.$nextTick(() => {
                const box = document.getElementById('main1')
                const myChart = echarts.init(box)
                let option = {
                    title: {
                        text: '项目开发人员配置'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: legend
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
                        data: xAxis
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series
                };
                myChart.setOption(option)
            })
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