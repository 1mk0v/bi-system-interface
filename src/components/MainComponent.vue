<template>
  <div id="content-container">
    <Navigator 
      @changeTabEvent="(newTab) => { currentTab = newTab }"
      @logoutEvent="exitHandler">
    </Navigator>
    <div class="main-container">
      
    </div>
  </div>
</template>

<script>
import { API } from '@/assets/js/api';
import Navigator from './Navigation/Navigator.vue';

export default {
  name: 'MainContainer',
  data() {
    return {
      currentTab: 'CompaniesTab'
    }
  },
  emits: ['exitEvent'],
  components: {
    Navigator
  },
  methods: {
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

.main-container {
  padding: 30px;
  padding-left: 60px;
}
</style>