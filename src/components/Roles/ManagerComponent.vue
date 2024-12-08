<template>
  <div class="main-container">
    <HeaderComp :currentTab="currentTabName" :username="username"></HeaderComp>
    <div class="body-container">
      <component :is="currentTab"></component>
    </div>
  </div>
</template>

<script>
import HeaderComp from '../Navigation/HeaderComp.vue';
import DashboardTab from './ManagerTabs/DashboardTab.vue';
import ClientsTab from './ManagerTabs/ClientsTab.vue';
import ProductsTab from './ManagerTabs/ProductsTab.vue';

export default {
  name: "ManagerComponent",
  data() {
    return {
      TabsName: {
        'DashboardTab': 'DashboardTab'
      }
    }
  },
  props: {
    currentTab:String,
    currentTabName:String,
    username:String
  },
  components: {
    DashboardTab, HeaderComp, ClientsTab, ProductsTab
  }
}
</script>

<style scoped>
@import url(/src/assets/styles/index.css);
</style>