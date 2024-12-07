<template>
  <div class="bi-card-container">
    <div class="card-header">
      <span>{{ title }}</span>
    </div>
    <div class="radar-container">
      <div class="chart">
        <canvas :id="cardID"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';

export default {
  name: "RadarChartCard",
  data() {
    return {
      chartData: {
        labels: this.labels,
        datasets: [
          {
            label: this.title,
            data: this.data,
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }
      ]
      },
      chartConfigOptions: {
        responsive: true,
        scales: {
          r: {
            ticks: { color: '#fff', backdropColor:"#ffffff00" },
            angleLines: { color: '#fff' },
            grid: { color: '#fff' }
          }
        },
        plugins: {
          legend: { display: false }
        }
      },
    }
  },
  props: {
    cardID: String,
    data:Array,
    labels:Array,
    title:String
  },
  mounted() {
    Chart.register(...registerables);
    const ctx = document.getElementById(this.cardID);
    new Chart(ctx, {
      type: 'radar',
      data: this.chartData,
      options: this.chartConfigOptions
    });
  }
}
</script>

<style scoped>
@import url(/src/assets/styles/card.css);
.radar-container {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
}
</style>