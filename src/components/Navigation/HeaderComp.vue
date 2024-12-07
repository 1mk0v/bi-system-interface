<template>
  <div class="header">
    <div class="left-header">
      <h3 class="header-title">{{ currentTab }}</h3>
      <div class="time-filter"></div>
    </div>
    <div class="right-header">
      <div class="username">{{ username }}</div>
      <div class="username-photo"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
  props: {
    currentTab:String,
    username:String
  }
}
</script>

<style scoped>
@import url(/src/assets/styles/index.css);
.header {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.left-header,
.right-header {
  display: flex;
  align-items: center;
}
.right-header { gap:10px; }
.left-header  { gap:30px; }

.header-title {
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 5px;
  line-height: 48px;
  margin: 0px;
}

.username {
  font-size: 20px;
  font-weight: 300;
}

.username-photo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--username-photo-background);
}

.time-filter {
  display: none;
}
</style>