<template>
    <div class="map-view">
        <div id="main"></div>
    </div>
</template>
<script>
import geoJson from '@/utils/china.json'
import * as echarts from 'echarts'
export default {
    data() {
        return {
        }
    },
    created() {
        console.log('-------------->', geoJson);
    },
    mounted() {
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
                // {
                //     type: 'effectScatter',
                //     coordinateSystem: 'geo',
                //     showEffectOn: 'render',
                //     symbolSize: 10,
                //     zlevel: 1,
                //     data: [{ value: [118.8062, 31.9208], itemStyle: { color: 'red' } }]
                // }
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
</script>

<style lang="less">
.map-view {
    width: 100%;
    height: 100%;

    #main {
        width: 100%;
        height: 600px;
    }
}
</style>