<template>
  <div class="bi-card-container">
    <div class="card-header">
      <span>{{ title }}</span>
    </div>
    <div class="card-value" data-module="countup">
      <span>{{ value }}</span>
    </div>
    <div class="img-container">
      <img class="img-fluid" :src="photoUrl">
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoCard",
  props: {
    title: String,
    value:String,
    photoUrl: String
  }
}
</script>

<style scoped>
@import url(/src/assets/styles/card.css);

.img-container {
  display: flex;
  max-height: 300px;
  justify-content: center;
}

.img-fluid {
  max-width: 100%;
  max-height: 100%;
}
</style>