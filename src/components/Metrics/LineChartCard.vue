<template>
  <div class="chart" v-if="notUseContainer">
    <canvas :id="cardID"></canvas>
  </div>
  <div class="bi-card-container" v-else>
    <div class="card-header" v-if="title">
      <span>{{ title }}</span>
    </div>
    <div class="chart" style="max-width: 100%">
      <canvas :id="cardID"></canvas>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';

export default {
  name: "LineChartCard",
  props: {
    cardID: String,
    title: String,
    labels: Array,
    datasets: Array,
    notUseContainer: Boolean
  },
  mounted() {
    Chart.register(...registerables);
    const ctx = document.getElementById(this.cardID);
    new Chart(ctx, {
      type: 'line',
      data: { labels: this.labels, datasets: this.datasets },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: false }
        }
      },
    });
  }
}
</script>

<style scoped>
@import url(/src/assets/styles/card.css);
</style>