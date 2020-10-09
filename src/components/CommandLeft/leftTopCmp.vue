<template>
  <div id="cards">
    <div
      class="card-item"
      v-for="card in cards"
      :key="card.title"
    >
      <div class="card-header">
        <div class="card-header-left">{{ card.title }}</div>
        <!-- <div class="card-header-right">{{ '0' + (i + 1) }}</div> -->
      </div>
      <dv-charts class="pie-charts" :option="card.option" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cards',
  data () {
    return {
      cards: [
        {
          title: '入境车辆（274）',
          option: {
            series: [
              {
                type: 'pie',
                data: [
                  { name: '越南重车28', value: 28 },
                  { name: '中国空车246', value: 246 }
                ],
                insideLabel: {
                  show: true
                }
              }
            ]
          }
        },
        {
          title: '出境车辆（165）',
          option: {
            series: [
              {
                type: 'pie',
                data: [
                  { name: '越南空车20', value: 20 },
                  { name: '中国空车145', value: 145 }
                ],
                insideLabel: {
                  show: true
                }
              }
            ]
          }
        },
        {
          title: '入境各查验方式待查数量占比',
          option: {
            series: [
              {
                type: 'pie',
                data: [
                  { name: '机检2', value: 2 },
                  { name: '人工查验3', value: 3 },
                  { name: '人工登临30', value: 30 }
                ],
                insideLabel: {
                  show: false
                }
              }
            ]
          }
        },
        {
          title: '出境各查验方式待查数量占比',
          option: {
            series: [
              {
                type: 'pie',
                data: [
                  { name: '机检2', value: 2 },
                  { name: '人工查验3', value: 3 },
                  { name: '人工登临30', value: 30 }
                ],
                insideLabel: {
                  show: true
                }
              }
            ]
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss">
#cards {
  display: flex;
  justify-content: space-between;
  height: 33.3%;
  padding-bottom: 20px;

  .card-item {
    background-color: rgba(6, 30, 93, 0.5);
    border-top: 2px solid rgba(1, 153, 209, .5);
    width: 24%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .card-header {
    display: flex;
    height: 20%;
    align-items: center;
    justify-content: space-between;

    .card-header-left {
      font-size: 18px;
      font-weight: bold;
      padding-left: 20px;
    }

    .card-header-right {
      padding-right: 20px;
      font-size: 40px;
      color: #03d3ec;
    }
  }

  .pie-charts {
    height: 80%;
  }
}
</style>
