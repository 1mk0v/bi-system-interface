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
            <NumChartCard cardID="num-counter-1" prefix="$" :value="53245"></NumChartCard>
            <NumChartCard cardID="num-counter-2" prefix="$" :value="13113"></NumChartCard>
            <NumChartCard cardID="num-counter-3" suffix="%" :value="53"></NumChartCard>
            <NumChartCard cardID="num-counter-4" :value="61204"></NumChartCard>
          </div>
          <div class="data-container">
            <PieChartCard cardID="pie-chart-1"></PieChartCard>
            <RadarChartCard cardID="radar-chart-1"></RadarChartCard>
          </div>
        </div>
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
    Navigator, HeaderComp, PieChartCard, RadarChartCard,NumChartCard
  },
  methods: {
    getUserName() {
      
    },
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