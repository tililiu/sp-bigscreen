<template>
  <div class="command-left">
    <dv-full-screen-container>
      <top-header />
      <div class="main-content">
        <digital-flop />

        <div class="block-left-right-content">
          <div class="blr-left">
            <left-top-cmp class="blr-left-content" />

            <left-middle-cmp class="blr-left-content" />

            <left-bottom-cmp class="blr-left-content" />
          </div>
          <div class="blr-right">
            <right-top-cmp class="blr-right-content" />

            <right-bottom-cmp class="blr-right-content" />
          </div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>
<script>
import topHeader from './topHeader'
import digitalFlop from './digitalFlop'
import leftTopCmp from './leftTopCmp'
import leftMiddleCmp from './leftMiddleCmp'
import leftBottomCmp from './leftBottomCmp'
import rightTopCmp from './rightTopCmp'
import rightBottomCmp from './rightBottomCmp'
export default {
  components: {
    topHeader,
    digitalFlop,
    leftTopCmp,
    leftMiddleCmp,
    leftBottomCmp,
    rightTopCmp,
    rightBottomCmp
  }
}
</script>
<style lang="scss">
  .command-left {
    width: 100%;
    height: 100%;
    background-color: #030409;
    color: #fff;
    #dv-full-screen-container {
      background-image: url('../../assets/img/bg.png');
      background-size: 100% 100%;
      box-shadow: 0 0 3px blue;
      display: flex;
      flex-direction: column;
    }
    .main-content {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .block-left-right-content {
      flex: 1;
      display: flex;
      margin-top: 20px;
    }
    .blr-left, .blr-right {
      display: flex;
      flex-direction: column;
      position: relative;
    }
    .blr-left {
      width: 67%;
      display: flex;
      flex-direction: column;
    }
    .blr-right {
      width: 33%;
      display: flex;
      flex-direction: column;
      padding-left: 20px;
      .blr-right-content {
        flex: 1;
      }
    }
  }
</style>
