<template>
  <div class="right-top-cmp">
    <div class="right-top-title">平均时长趋势分析</div>
    <dv-charts :option="lineOption" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      lineOption: {
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
            type: 'line'
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.right-top-cmp {
  height: 100%;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, .5);
  box-sizing: border-box;
  margin-bottom: 20px;

  .right-top-title {
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
