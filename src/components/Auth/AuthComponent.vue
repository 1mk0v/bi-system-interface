<template>
  <div class="glassmorphizm bi-card-container" id="auth">
    <div class="header">
      <div class="title">
        <svg width="210.676025" height="48.410400" viewBox="0 0 210.676 48.4104" fill="none"
          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <clipPath id="clip784_5">
              <rect id="logo-container" rx="0.000000" width="49.000000" height="47.410454"
                transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0" />
            </clipPath>
            <clipPath id="clip784_9">
              <rect id="name-container" rx="0.000000" width="149.676117" height="16.039328"
                transform="translate(60.500000 16.185547)" fill="white" fill-opacity="0" />
            </clipPath>
            <clipPath id="clip784_4">
              <rect id="site-name-container" rx="0.000000" width="209.676117" height="47.410454"
                transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0" />
            </clipPath>
          </defs>
          <rect id="site-name-container" rx="0.000000" width="209.676117" height="47.410454"
            transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0" />
          <g clip-path="url(#clip784_4)">
            <g clip-path="url(#clip784_5)">
              <path id="path35"
                d="M25 48.41L31.99 10.15C38.66 10.15 40.76 10.86 41.07 13.77C41.07 13.77 45.54 12.14 47.8 8.85C38.99 4.88 30.15 4.71 30.15 4.71L24.99 10.82L25 10.82L19.84 4.7C19.84 4.7 10.99 4.88 2.19 8.85C4.44 12.14 8.92 13.77 8.92 13.77C9.22 10.86 11.32 10.15 17.95 10.15L25 48.41Z"
                fill="#E82127" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="path37"
                d="M25 2.94C32.11 2.89 40.26 4.01 48.59 7.54C49.71 5.59 50 4.73 50 4.73C40.88 1.22 32.34 0.03 24.99 0C17.64 0.03 9.11 1.23 0 4.73C0 4.73 0.4 5.79 1.39 7.54C9.73 4.01 17.88 2.89 24.99 2.94L25 2.94Z"
                fill="#E82127" fill-opacity="1.000000" fill-rule="nonzero" />
            </g>
            <g clip-path="url(#clip784_9)">
              <path id="polyline10"
                d="M181.64 22.42L181.64 32.7L184.93 32.7L184.93 25.86L196.92 25.86L196.92 32.7L200.22 32.7L200.22 22.44L181.64 22.42Z"
                fill="#E82127" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="path12"
                d="M184.56 19.1L197.23 19.1C198.99 18.75 200.3 17.2 200.67 15.7L181.13 15.7C181.49 17.2 182.82 18.75 184.56 19.1Z"
                fill="#E82127" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="path16"
                d="M171.66 32.71C173.32 32 174.21 30.78 174.55 29.36L159.77 29.36L159.78 15.7L156.47 15.71L156.47 32.71L171.66 32.71Z"
                fill="#E82127" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="path20"
                d="M131.83 19.05L143.54 19.05C145.3 18.54 146.78 17.2 147.14 15.71L128.55 15.71L128.55 25.75L143.77 25.75L143.77 29.27L131.83 29.28C129.96 29.81 128.38 31.06 127.59 32.72L128.55 32.7L147.04 32.7L147.04 22.41L131.83 22.41L131.83 19.05Z"
                fill="#E82127" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="path24"
                d="M102.95 19.09L115.61 19.09C117.38 18.74 118.69 17.18 119.05 15.68L99.51 15.68C99.87 17.18 101.2 18.74 102.95 19.09Z"
                fill="#E82127" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="path26"
                d="M102.95 25.8L115.61 25.8C117.38 25.46 118.69 23.9 119.05 22.4L99.51 22.4C99.87 23.9 101.2 25.46 102.95 25.8Z"
                fill="#E82127" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="path28"
                d="M102.95 32.7L115.61 32.7C117.38 32.35 118.69 30.8 119.05 29.3L99.51 29.3C99.87 30.8 101.2 32.35 102.95 32.7Z"
                fill="#E82127" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="path32"
                d="M70 15.72C70.38 17.21 71.66 18.73 73.43 19.11L78.76 19.11L79.03 19.21L79.03 32.67L82.36 32.67L82.36 19.21L82.66 19.11L88 19.11C89.78 18.65 91.04 17.21 91.41 15.72L91.41 15.69L70 15.69L70 15.72Z"
                fill="#E82127" fill-opacity="1.000000" fill-rule="nonzero" />
            </g>
          </g>
        </svg>
      </div>
      <div class="bi-title">
        <h2 style="font-weight: 500;">BI System</h2>
      </div>
    </div>
    <div id="bi-form">
      <input type="text" placeholder="Логин" v-model="login">
      <input type="password" placeholder="Пароль" autocomplete="on" v-model="password">
      <button class="bi-btn-blue" @click="getToken">Sign in</button>
    </div>
  </div>
</template>

<script>
import { API } from '@/assets/js/api.js';

export default {
  name: 'AuthComponent',
  data() {
    return {
      login: "",
      password: ""
    }
  },
  emits: ['authEvent'],
  methods: {
    getToken() {
      let authAPI = new API('/auth/token')
      let body = new URLSearchParams({
        'username': this.login,
        'password': this.password,
      })
      authAPI.post(body, {'Content-Type': 'application/x-www-form-urlencoded'}).then(
        (data) => {
          if (!data.status) {
            document.cookie = `token=${data.access_token}`;
            this.$emit('authEvent', {value:true, token: data.access_token});
          }
        }
      ).catch(
        () => {
          this.$emit('authEvent', {value:false, token:null});
        }
      )
    }
  }
}
</script>

<style scoped>
@import url(/src/assets/styles/title.css);
@import url(/src/assets/styles/forms.css);

#auth {
  width: 30%;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px;
  font-weight: 400;
}

#bi-form {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>