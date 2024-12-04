<template>
  <div v-if="currentTab == 'login-tab'"
    class="auth-container">
    <AuthComponent @auth-event="changeTab"></AuthComponent>
  </div>
  <MainComponent v-else @exit-event="changeTab"></MainComponent>
</template>

<script>
import Cookie from './assets/js/cookie';
import AuthComponent from '@/components/Auth/AuthComponent.vue';
import MainComponent from './components/MainComponent.vue';

export default {
  name: 'App',
  data() {
    return {
      cookies: new Cookie(),
      currentTab: '',
    }
  },
  created() {
    if (this.cookies.get('token')) {
      this.getCurrentUserRole()
    } else {
      this.currentTab = 'login-tab';
    }
  },
  methods: {
    getCurrentUserRole() {
      return null
    },
    changeTab(data) {
      if (data.value == true) {
        this.getCurrentUserRole()
        this.currentTab = 'main-component'
      } else {
        document.cookie = 'token=';
        this.currentTab = 'login-tab';
      }
    }
  },
  components: {
    AuthComponent, MainComponent
  }
}
</script>

<style>
@import url(/src/assets/styles/index.css);

#app {
  margin: 0%;
  position: fixed;
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: var(--app-background);
  background-size: cover;
  font-size: 16px;
}

.auth-container {
  width: 100%; 
  height: 100%; 
  display: flex; 
  justify-content: center; 
  align-items: center;
}
</style>