<template>
  <div id="content-container">
    <Navigator 
      @changeTabEvent="(newTab) => { 
        currentTab = newTab['id']
        currentTabName = newTab['value']
      }"
      @logoutEvent="exitHandler">
    </Navigator>
    <div class="main-container">
      <HeaderComp
        :currentTab="currentTabName"
        :username="'Name Surename'">
      </HeaderComp>
      <div class="body-container">
        <div class="dataset-container">
          <div class="num-cards-container">
            <NumChartCard cardID="num-counter-1" title="Products sold"
              prefix="$"
              :value="53245"
              :footer-value="-12.23"
              footer-suffix="%"
              :footer-display-prefix="true"
              :footer-is-toogle-up="true"
              description="more then last month"></NumChartCard>
            <NumChartCard cardID="num-counter-2" title="Sales plan"
              prefix="$"
              :value="545050"
              :footer-value="53"
              footer-suffix="%"
              :footer-display-prefix="false"
              :footer-is-reverse="true"
              description="completed on"></NumChartCard>
            <NumChartCard cardID="num-counter-3" title="My efficiency"
              suffix="%" 
              :value="73"
              :footer-value="72"
              footer-suffix="%"
              :footer-display-prefix="true"
              description="more than last month">
            </NumChartCard>
            <NumChartCard cardID="num-counter-4" title="My new customers"
              :value="57"
              :footer-value="-18.1"
              footer-suffix="%"
              :footer-display-prefix="true"
              description="more than last month">
            </NumChartCard>
          </div>
          <div class="data-container">
            <PieChartCard cardID="pie-chart-1"
              title="My revenue"
              :value="23913"
              :labels="['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']"
              :data="[11, 9, 13, 25, 21, 15]"
              :footer-value="46.9"
              footer-description="more than last month"
              prefix="$">
            </PieChartCard>
            <RadarChartCard cardID="radar-chart-1"
              title="KPI Execution"
              :data="[0, 0.4, 0.2, 0.1, 0.6, 0.9 ]"
              :labels="['Eating', 'Drinking', 'Sleeping', 'Coding', 'Cycling', 'Running']">
            </RadarChartCard>
          </div>
        </div>
        <div class="dataset-container">
          <div class="data-container">
            <LineChartCard cardID="line-chart-1"
              title="Sales dynamics"
              :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']"
              :datasets="[
                {label: 'Dataset 1', data: [12, 15, 21, 10, 16, 11, 20, 22, 18, 17, 14, 13]},
                {label: 'Dataset 2', data: [11, 16, 20, 10, 15, 10, 21, 24, 15, 10, 18, 11]}
              ]">
            </LineChartCard>
            <PhotoCard 
              title="Most popular"
              value="Tesla Model S"
              photo-url="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png">
            </PhotoCard>
          </div>
        </div>
        <!-- <div class="dataset-container">
          <TableCard></TableCard>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { API } from '@/assets/js/api';
import Navigator from './Navigation/Navigator.vue';
import HeaderComp from './Navigation/HeaderComp.vue';
import PieChartCard from './Metrics/PieChartCard.vue';
import RadarChartCard from './Metrics/RadarChartCard.vue';
import NumChartCard from './Metrics/NumChartCard.vue';
import LineChartCard from './Metrics/LineChartCard.vue';
import PhotoCard from './Metrics/PhotoCard.vue';
// import TableCard from './Metrics/TableCard.vue';

export default {
  name: 'MainContainer',
  data() {
    return {
      currentTab: 'DashboardTab',
      currentTabName: 'Dashboard'
    }
  },
  emits: ['exitEvent'],
  components: {
    Navigator, HeaderComp, PieChartCard, RadarChartCard, NumChartCard,
    LineChartCard, PhotoCard
  },
  methods: {
    getUserName() {},
    async exitHandler() {
      const api = new API('/auth/logout')
      await api.post({})
      this.$emit('exitEvent', false)
    }
  }
}

</script>

<style scoped>
@import url(/src/assets/styles/forms.css);

#content-container {
  display: flex;
  height: 100%;
}

.body-container {
  display: flex;
  width: 100%;
  height: 100%;
  gap: 30px;
  flex-direction: column;
}

.main-container {
  padding: 30px;
  padding-left: 60px;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 30px;
}
</style>