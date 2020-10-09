<template>
  <div class="right-bottom-cmp">
    <div class="right-bottom-title">车辆过卡总数年度趋势分析</div>
    <dv-charts :option="barOption" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      barOption: {
        xAxis: {
          name: '第一周',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          name: '销售额',
          data: 'value'
        },
        series: [
          {
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
            type: 'bar'
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss">
.right-bottom-cmp {
  height: 100%;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, .5);
  box-sizing: border-box;

  .right-bottom-title {
    height: 50px;
    font-weight: bold;
    text-indent: 20px;
    font-size: 20px;
    display: flex;
    align-items: center;
  }

  .dv-charts-container {
    height: calc(100% - 50px);
  }
}
</style>
