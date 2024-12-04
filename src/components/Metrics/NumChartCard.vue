<template>
  <div class="bi-card-container" style="width: auto;">
    <div class="card-header">
      <span>Title Name</span>
    </div>
    <div class="card-value" data-module="countup">
      <span class="prefix">{{ prefix }}</span>
      <span :id="cardID">{{ value }}</span>
      <span class="suffix">{{ suffix }}</span>
    </div>
    <div class="card-footer">
      <span class="">title</span>
    </div>
  </div>
</template>

<script>
import { CountUp } from 'countup.js';
export default {
  name: "NumChartCard",
  data() {
    return {

    }
  },
  mounted() {
    const countUp = new CountUp(this.cardID, this.value);
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
  },
  props: {
    cardID: String,
    value:Number,
    prefix:String,
    suffix:String
  }
}
</script>

<style scoped>
@import url(/src/assets/styles/card.css);

.bi-card-container {
  width: auto !important;
  justify-content: space-between;
}
</style>