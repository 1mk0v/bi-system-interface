<template>
  <div class="dataset-container">
    <div class="num-cards-container">
      <NumChartCard cardID="num-counter-1" title="Revenue" prefix="$" :value="2374941" :footer-value="12.23"
        footer-suffix="%" :footer-display-prefix="true" :footer-is-toogle-up="true" description="more then last month">
      </NumChartCard>
      <NumChartCard cardID="num-counter-2" title="Sales plan" prefix="$" :value="5545050" :footer-value="-53"
        footer-suffix="%" :footer-display-prefix="false" :footer-is-reverse="true" description="completed on">
      </NumChartCard>
      <NumChartCard cardID="num-counter-3" title="Customers plan" :value="1000" :footer-value="72"
        footer-suffix="%" :footer-display-prefix="true" description="more than last month">
      </NumChartCard>
      <NumChartCard cardID="num-counter-4" title="Conversion" :value="65.4" :footer-value="18.1" footer-suffix="%"
        :footer-display-prefix="true" description="more than last month">
      </NumChartCard>
    </div>
    <div class="data-container">
      <BarChartCard cardID="bar-chart-1" title="Offices KPI"
        :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']"
        :datasets="[
          { label: 'KPI Param 1', data: [12, 15, 23, 16, 19, 23, 11, 8, 2, 14, 13, 12] },
          { label: 'KPI Param 2', data: [14, 11, 18, 13, 14, 17, 16, 12, 9, 11, 15, 13] },
          { label: 'KPI Param 3', data: [14, 11, 18, 13, 14, 17, 16, 12, 9, 11, 15, 13] },
          { label: 'KPI Param 4', data: [14, 11, 18, 13, 14, 17, 16, 12, 9, 11, 15, 13] },
          { label: 'KPI Param 5', data: [14, 11, 18, 13, 14, 17, 16, 12, 9, 11, 15, 13] }
        ]">
      </BarChartCard>
      <PieChartCard cardID="pie-chart-1" title="New customers" :value="'Office 2'"
        :labels="['Office 1', 'Office 2', 'Office 3', 'Office 4', 'Office 5', 'Office 6']" :data="[11, 26, 13, 25, 21, 15]">
      </PieChartCard>
    </div>
  </div>
  <div class="dataset-container">
    <div class="data-container">
      <LineChartCard cardID="line-chart-1" title="Sales dynamics"
        :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']"
        :datasets="[
          { label: 'Dataset 1', data: [12, 15, 21, 10, 16, 11, 20, 22, 18, 17, 14, 13], tension: 0.3 },
          { label: 'Dataset 2', data: [11, 16, 20, 10, 15, 10, 21, 24, 15, 10, 18, 11], tension: 0.3 }
        ]">
      </LineChartCard>
      <TopManagersCard
        :managers="[
          { username: 'Name S.P.', office: 'Org. name', yearRevenue: 432100, weekRevenue: 8300 },
          { username: 'Name S.P.', office: 'Org. name', yearRevenue: 432100, weekRevenue: 8300 },
          { username: 'Name S.P.', office: 'Org. name', yearRevenue: 432100, weekRevenue: 8300 },
          { username: 'Name S.P.', office: 'Org. name', yearRevenue: 432100, weekRevenue: 8300 },
          { username: 'Name S.P.', office: 'Org. name', yearRevenue: 432100, weekRevenue: 8300 }
        ]"></TopManagersCard>
    </div>
  </div>
  <div class="dataset-container" style="overflow: hidden;">
    <TableCard :columns="[
      { key: 'office', value: 'Office' },
      { key: 'kpi', value: 'KPI' },
      { key: 'plan', value: 'Plan' },
      { key: 'complete', value: 'Complete' }
    ]" :data="[
          {
            'office': {'type':'text', 'data':'Troparevo'},
            'kpi': {'type':'text', 'data':'40%'},
            'plan': {'type':'text', 'data':'$ 412412'},
            'complete': {'type':'text', 'data':'47%'}
          },
          {
            'office': {'type':'text', 'data':'Troparevo'},
            'kpi': {'type':'text', 'data':'40%'},
            'plan': {'type':'text', 'data':'$ 412412'},
            'complete': {'type':'text', 'data':'47%'}
          },
          {
            'office': {'type':'text', 'data':'Troparevo'},
            'kpi': {'type':'text', 'data':'40%'},
            'plan': {'type':'text', 'data':'$ 412412'},
            'complete': {'type':'text', 'data':'47%'}
          },
          {
            'office': {'type':'text', 'data':'Troparevo'},
            'kpi': {'type':'text', 'data':'40%'},
            'plan': {'type':'text', 'data':'$ 412412'},
            'complete': {'type':'text', 'data':'47%'}
          },
          {
            'office': {'type':'text', 'data':'Troparevo'},
            'kpi': {'type':'text', 'data':'40%'},
            'plan': {'type':'text', 'data':'$ 412412'},
            'complete': {'type':'text', 'data':'47%'}
          },
          {
            'office': {'type':'text', 'data':'Troparevo'},
            'kpi': {'type':'text', 'data':'40%'},
            'plan': {'type':'text', 'data':'$ 412412'},
            'complete': {'type':'text', 'data':'47%'}
          },
          {
            'office': {'type':'text', 'data':'Troparevo'},
            'kpi': {'type':'text', 'data':'40%'},
            'plan': {'type':'text', 'data':'$ 412412'},
            'complete': {'type':'text', 'data':'47%'}
          }
        ]"></TableCard>
  </div>
</template>

<script>
import PieChartCard from '@/components/Metrics/PieChartCard.vue';
import LineChartCard from '@/components/Metrics/LineChartCard.vue';
import BarChartCard from '@/components/Metrics/BarChartCard.vue';
import NumChartCard from '@/components/Metrics/NumChartCard.vue';
import TableCard from '@/components/Metrics/TableCard.vue';
import TopManagersCard from '@/components/Metrics/TopManagersCard.vue';

export default {
  name: "DashboardTab",
  data() {

  },
  components: {
    PieChartCard, LineChartCard, NumChartCard, TableCard, BarChartCard, TopManagersCard
  }
}
</script>

<style scoped>
@import url(/src/assets/styles/index.css);
</style>