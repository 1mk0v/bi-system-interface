<template>
  <div class="bi-card-container">
    <div class="card-header">
      <span>Top managers</span>
    </div>
      <div class="top-managers-container">
        <TopManagerCard v-for="manager, index in this.managers" :key="manager.username+index"
          :username="manager.username"
          :office="manager.office"
          :year-revenue="manager.yearRevenue"
          :week-revenue="manager.weekRevenue">
        </TopManagerCard>
      </div>
  </div>
</template>

<script>
import TopManagerCard from './TopManagerCard.vue';
export default {
  name: "TopManagersCard",
  props: {
    managers: Array
  },
  components: {
    TopManagerCard
  }
}
</script>

<style scoped>
@import url(/src/assets/styles/card.css);

.top-managers-container {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  gap:10px;
}
</style>