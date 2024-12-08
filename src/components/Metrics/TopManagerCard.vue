<template>
  <div class="manager-card-container">
    <div class="manager-info">
      <div class="name">{{ username }}</div>
      <div class="organization card-header">{{ office }}</div>
    </div>
    <div class="sales-container">
      <div class="sales-info">
        <div class="value card-value">
          <span class="prefix">$</span>
          <span>{{ yearRevenue }}</span>
        </div>
        <div class="description card-header">this year</div>
      </div>
      <div class="sales-info">
        <div class="value card-value">
          <span class="prefix">$</span>
          <span>{{ weekRevenue }}</span>
        </div>
        <div class="description card-header">this week</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopManagerCard",
  props: {
    username:String,
    office:String,
    yearRevenue:Number,
    weekRevenue:Number
  }
}
</script>

<style scoped>
@import url(/src/assets/styles/card.css);
.manager-card-container {
  padding: 10px;
  border-radius: 10px;
  background-color: #414141;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap:30px;
}

.prefix { font-size: 20px; font-weight: 600; align-items: center; }
.value { font-size: 30px; font-weight: 600; align-items: center; }
.name { font-size: 16px; font-weight: 500; }
.organization { font-size: 14px; font-weight: 300; }
.description { font-size: 12px; font-weight: 300; }


.sales-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%
}

.manager-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

</style>