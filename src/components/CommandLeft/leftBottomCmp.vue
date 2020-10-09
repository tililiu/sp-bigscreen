<template>
  <div class="left-bottom-cmp">
    <div class="line">
      <div class="lm-title">出境走势</div>
      <dv-charts :option="lineOption" />
    </div>
    <div class="gauge">
      <div class="lm-title">各区域车位占比及使用情况</div>
      <dv-charts :option="pieOption" />
    </div>
    <div class="radar">
      <div class="lm-title">查验区情况</div>
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
              name: '卡二进',
              color: '#ff5ca9'
            },
            {
              name: '卡一出',
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
            name: '卡二进',
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
            name: '卡一出',
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
      pieOption: {
        series: [
          {
            type: 'pie',
            data: [
              { name: '可口可乐', value: 93 },
              { name: '百事可乐', value: 32 },
              { name: '哇哈哈', value: 65 },
              { name: '康师傅', value: 44 },
              { name: '统一', value: 52 },
            ],
            radius: ['40%', '50%'],
            insideLabel: {
              show: true
            }
          }
        ]
      },
      radarOption: {
        radar: {
          indicator: [
            { name: '西峡', max: 300 },
            { name: '周口', max: 300 },
            { name: '南阳', max: 300 },
            { name: '驻马店', max: 300 },
            { name: '郑州', max: 300 },
            { name: '洛阳', max: 300 }
          ]
        },
        series: [
          {
            type: 'radar',
            data: [111, 256, 178, 152, 266, 132]
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .left-bottom-cmp {
    height: 33.3%;
    display: flex;
    justify-content: space-between;
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
