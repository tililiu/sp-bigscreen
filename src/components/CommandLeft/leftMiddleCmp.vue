<template>
  <div class="left-middle-cmp">
    <div class="line">
      <div class="lm-title">入境走势</div>
      <dv-charts :option="lineOption" />
    </div>
    <div class="gauge">
      <div class="lm-title">拥堵分析</div>
      <dv-charts :option="gaugeOption" />
    </div>
    <div class="radar">
      <div class="lm-title">各点位车流分布</div>
      <dv-charts :option="radarOption" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      lineOption: {
        legend: {
          data: [
            {
              name: '卡一进',
              color: '#ff5ca9'
            },
            {
              name: '卡二出',
              color: '#f5d94e'
            }
          ],
          textStyle: {
            fill: '#fff'
          }
        },
        xAxis: {
          data: [
            '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'
          ],
          axisLine: {
            style: {
              stroke: '#999'
            }
          },
          axisLabel: {
            style: {
              fill: '#999'
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          data: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            style: {
              stroke: '#999'
            }
          },
          axisLabel: {
            style: {
              fill: '#999'
            }
          },
          axisTick: {
            show: false
          },
          min: 0
        },
        series: [
          {
            name: '卡一进',
            data: [
              25, 35, 65, 65, 75, 65, 25
            ],
            type: 'line',
            lineStyle: {
              stroke: '#ff5ca9'
            },
            linePoint: {
              radius: 4,
              style: {
                fill: '#ff5ca9',
                stroke: 'transparent'
              }
            }
          },
          {
            data: [
              20, 12, 42, 42, 52, 42, 20
            ],
            type: 'line',
            name: '卡二出',
            lineArea: {
              show: true,
              gradient: ['rgba(245, 217, 79, 0.8)', 'rgba(245, 217, 79, 0.2)']
            },
            lineStyle: {
              stroke: '#f5d94e'
            },
            linePoint: {
              radius: 4,
              style: {
                fill: '#f5d94e',
                stroke: 'transparent'
              }
            }
          }
        ]
      },
      gaugeOption: {
        series: [
          {
            type: 'gauge',
            data: [{ name: 'itemA', value: 55 }],
            axisLabel: {
              formatter: '{value}%'
            },
            animationCurve: 'easeInOutBack'
          }
        ]
      },
      radarOption: {
        radar: {
          axisLabel: {
            color: ['#fff']
          },
          indicator: [
            { name: '道闸1', max: 300 },
            { name: '道闸2', max: 300 },
            { name: '道闸3', max: 300 },
            { name: '道闸4', max: 300 },
            { name: '道闸5', max: 300 },
            { name: '道闸6', max: 300 },
            { name: '道闸7', max: 300 }
          ]
        },
        series: [
          {
            type: 'radar',
            data: [111, 256, 178, 152, 266, 132, 155]
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .left-middle-cmp {
    height: 33.3%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    .line, .gauge, .radar {
      background-color: rgba(6, 30, 93, 0.5);
      border-top: 2px solid rgba(1, 153, 209, .5);
      display: flex;
      flex-direction: column;
      justify-content: center;
      .lm-title {
        height: 20%;
        font-size: 18px;
        font-weight: bold;
        padding-left: 20px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
      }
    }
    .line {
      width: 49%;
    }
    .gauge {
      width: 24%;
    }
    .radar {
      width: 24%;
    }
  }
</style>
