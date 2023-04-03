<template>
    <div class="travel-view">
        <div id="main"></div>
    </div>
</template>
<script>
import geoJson from '@/utils/china.json'
import cc from '@/utils/china-cities.json'
import * as echarts from 'echarts'
import { getMapPointsAPI, getMapLineAPI } from '@/api/map'
export default {
    data() {
        return {
            dataLine: []
        }
    },
    async created() {
        console.log('-------------->', cc.features[0].properties.name);
        const obj = cc.features.find((i) => i.properties['name'] == '重庆')
        console.log(obj);
        const res = await getMapPointsAPI()
        const { pointData } = res.data.data
        const res1 = await getMapLineAPI()
        // console.log(res1);
        // this.dataLine = res1.data.data.pointData
        const { lineData } = res1.data.data
        // console.log(pointData);
        // console.log(lineData);
        this.draw(pointData, lineData)
    },
    mounted() {


    },
    methods: {
        async draw(dataPoints, dataLine) {
            // console.log(pointData);
            const box = document.getElementById('main')
            let myChart = echarts.init(box)
            echarts.registerMap('china', geoJson)
            let option = {
                backgroundColor: 'rgb(121, 145, 209)',
                geo: {
                    map: 'china',
                    aspectScale: '0.75',//scale地图长宽比
                    // zoom: 1,
                    // center: [115.97, 49.70],
                    roam: true,
                    // show: true,
                    regions: [{
                        // name: '江西',
                        // itemStyle: {
                        //     borderColor: 'red',
                        //     areaColor: 'red'
                        // }
                    }],
                    itemStyle: {
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [
                                {
                                    offset: 0, // 0%处的颜色
                                    color: 'rgb(31, 54, 150)'
                                }, {
                                    offset: 1,
                                    color: 'rgb(89, 128, 142)'//100%处的颜色
                                }
                            ],
                            globalCoord: true
                        },
                    },
                    shadowColor: 'red',
                    shadowOffsetX: 10,
                    shadowOffsetY: 15,
                    label: {
                        show: true,
                        color: '#fff',
                        fontSize: 12
                    },
                    emphasis: {
                        itemStyle: {
                            areaColor: 'rgb(120, 187, 123)',
                            borderWidth: 0.1
                        }
                    }
                },
                series: [
                    {
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        showEffectOn: 'render',
                        symbolSize: 10,
                        zlevel: 1,
                        data: dataPoints,
                        rippleEffect: {
                            period: 6,
                            scale: 5,
                            brushType: 'fill'
                        }
                    },
                    {
                        type: 'lines',
                        zlevel: 1,
                        effect: {
                            show: true,
                            symbolSize: 8,
                            trailLength: 0,
                            // constantSpeed: 0.5,
                            period: 6,
                            size: '',
                            symbolSize: 15,
                            roundTrip: true,
                            symbol: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
                            // trailLength: 0
                        },
                        data: dataLine,
                        lineStyle: {
                            color: '1DE9B6',
                            width: 2,
                            opacity: 0.1,
                            curveness: 0.2
                        }
                    },
                    // { // 配置地图参数，绘制地图，这个对象是关于地图图标的相关设置
                    //     type: 'map',
                    //     // zoom: 1,
                    //     mapType: 'hz',
                    //     silent: false,
                    //     emphasis: {
                    //         borderWidth: 0,
                    //         borderColor: 'transparent',
                    //         areaColor: 'red',
                    //     },
                    //     map: 'china'
                    // }
                ]
            }
            myChart.setOption(option)
        }
    }
}
</script>

<style lang="less">
.travel-view {
    width: 100%;
    height: 100%;

    #main {
        width: 100%;
        height: 600px;
        color: chocolate
    }
}
</style>