<template>
  <div class="bi-card-container">
    <div class="card-header">
      <span>{{ title }}</span>
    </div>
    <div class="card-value" v-if="value != undefined">
      <span class="prefix" :style="{ display: (prefix) ? 'auto' : 'none'}">{{ prefix }}</span>
      <span :id="cardID+'-count-up'">{{ value }}</span>
      <span class="suffix" :style="{ display: (suffix) ? 'auto' : 'none'}">{{ suffix }}</span>
    </div>
    <div class="chart-container">
      <div class="chart">
        <canvas :id="cardID"></canvas>
      </div>
    </div>
    <FooterDescriprion v-if="footerValue != undefined"
      :footer-id="this.cardID+'-footer'"
      suffix="%"
      :value="footerValue"
      :display-prefix="true"
      :description="footerDescription"></FooterDescriprion>
  </div>
</template>

<script>
import { CountUp } from 'countup.js';
import { Chart, registerables } from 'chart.js';
import FooterDescriprion from './FooterDescriprion.vue';

export default {
  name: "PieChartCard",
  props: {
    cardID:String,
    title:String,
    labels:Array,
    data:Array,
    prefix:String,
    suffix:String,
    value:[Number, String],
    footerValue:Number,
    footerDescription:String,
  },
  components: {
    FooterDescriprion
  },
  mounted() {
    Chart.register(...registerables);
    const ctx = document.getElementById(this.cardID);
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: this.labels,
        datasets: [ { data: this.data, borderWidth: 0 } ]
      },
      options: {
        maintainAspectRatio: false,
        plugins: { legend: { position: "left" } }
      }
    });
    if (!isNaN(this.value)) {
      const countUp = new CountUp(this.cardID+"-count-up", this.value);
      if (!countUp.error) { countUp.start() } 
      else { console.error(countUp.error) }
    }
  }
}
</script>

<style scoped>
@import url(/src/assets/styles/card.css);
</style>