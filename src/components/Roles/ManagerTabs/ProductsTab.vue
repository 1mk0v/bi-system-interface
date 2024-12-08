<template>
  <div class="dataset-container">
    <div class="data-container">
      <LineChartCard cardID="line-chart-2" title="Top sales"
        :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']"
        :datasets="[
          { label: 'Dataset 1', data: [12, 15, 21, 10, 16, 11, 20, 22, 18, 17, 14, 13] },
          { label: 'Dataset 2', data: [11, 16, 20, 10, 15, 10, 21, 24, 15, 10, 18, 11] }
        ]"></LineChartCard>
      <LineChartCard cardID="line-chart-1" title="Worst sales"
        :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']"
        :datasets="[
          { label: 'Dataset 1', data: [12, 15, 21, 10, 16, 11, 20, 22, 18, 17, 14, 13] },
          { label: 'Dataset 2', data: [11, 16, 20, 10, 15, 10, 21, 24, 15, 10, 18, 11] }
        ]"></LineChartCard>
      <PieChartCard cardID="pie-chart-1" title="Most popular product category" value="Cars"
        :labels="['Battery', 'Cars', 'Service', 'Additional', 'Detail']" :data="[11323, 40234, 25371, 21324, 12351]">
      </PieChartCard>
    </div>
  </div>
  <div class="dataset-container" style="overflow: hidden;">
    <TableCard :columns="[
      { key: 'name', value: 'Name' },
      { key: 'sale_amount', value: 'Sale amount' },
      { key: 'quantity', value: 'quantity' },
      { key: 'sales', value: 'Sales' },
    ]" 
    :data="[
      {
        'name': { 'type': 'text', 'data': 'Name Surename' },
        'sale_amount': { 'type': 'text', 'data': '10.11.2024' },
        'quantity': { 'type': 'text', 'data': 3 },
        'sales': {
          'type': 'line-chart', 'data': {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [
              { label: 'Dataset 1', data: [12, 15, 21, 10] },
              { label: 'Dataset 2', data: [11, 16, 20, 15] }
            ]
          }
        }
      }, 
      {
        'name': { 'type': 'text', 'data': 'Name Surename' },
        'sale_amount': { 'type': 'text', 'data': '10.11.2024' },
        'quantity': { 'type': 'text', 'data': 3 },
        'sales': {
          'type': 'line-chart', 'data': {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [
              { label: 'Dataset 1', data: [12, 15, 21, 10] },
              { label: 'Dataset 2', data: [11, 16, 20, 15] }
            ]
          }
        }
      }
    ]"></TableCard>
  </div>
</template>

<script>
import PieChartCard from '@/components/Metrics/PieChartCard.vue';
import LineChartCard from '@/components/Metrics/LineChartCard.vue';
import TableCard from '@/components/Metrics/TableCard.vue';

export default {
  name: "ProductsTab",
  components: {
    PieChartCard, TableCard, LineChartCard
  }
}
</script>

<style scoped>
@import url(/src/assets/styles/index.css);
</style>