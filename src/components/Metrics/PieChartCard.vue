<template>
  <div class="bi-card-container">
    <div class="card-header">
      <span>Title Name</span>
    </div>
    <div class="card-value">
      <span class="unit">$</span>
      <span>234941</span>
    </div>
    <div class="chart">
      <canvas :id="cardID"></canvas>
    </div>
    <!-- <div class="card-footer">
      <span class="">title</span>
    </div> -->
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';

export default {
  name: "PieChartCard",
  data() {
    return {

    }
  },
  props: {
    cardID:String
  },  
  mounted() {
    Chart.register(...registerables);
    const ctx = document.getElementById(this.cardID);
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 0
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "left",
          },
        }
      }
    });
  }
}
</script>

<style scoped>
@import url(/src/assets/styles/card.css);

</style>