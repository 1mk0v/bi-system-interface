<template>
  <div id="content-container">
    <Navigator 
      @changeTabEvent="(newTab) => { 
        currentTab = newTab['id']
        currentTabName = newTab['value']
      }"
      @logoutEvent="exitHandler">
    </Navigator>
    <AdministratorComponent
      :currentTab="currentTab"
      :currentTabName="currentTabName"
      :username="username">
    </AdministratorComponent>
  </div>
</template>

<script>
import { API } from '@/assets/js/api';
import Navigator from './Navigation/Navigator.vue';
// import ManagerComponent from './Roles/ManagerComponent.vue';
import AdministratorComponent from './Roles/AdministratorComponent.vue';

export default {
  name: 'MainContainer',
  data() {
    return {
      currentTab: 'DashboardTab',
      currentTabName: 'Dashboard',
      username: "Name Surename"
    }
  },
  emits: ['exitEvent'],
  components: {
    Navigator, AdministratorComponent
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


</style>