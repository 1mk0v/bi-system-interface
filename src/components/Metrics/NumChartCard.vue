<template>
  <div class="bi-card-container" style="width: auto;">
    <div class="card-header">
      <span>{{ title }}</span>
    </div>
    <div class="card-value">
      <span class="prefix" :style="{display: (prefix) ? 'auto' : 'none'}">{{ prefix }}</span>
      <span :id="cardID">{{ value }}</span>
      <span class="suffix" :style="{display: (suffix) ? 'auto' : 'none'}">{{ suffix }}</span>
    </div>
    <FooterDescriprion
      :footer-id="this.cardID+'-footer'"
      :value="this.footerValue"
      :suffix="this.footerSuffix"
      :display-prefix="this.footerDisplayPrefix"
      :is-reverse="this.footerIsReverse"
      :description="this.description">
    </FooterDescriprion>
  </div>
</template>

<script>
import { CountUp } from 'countup.js';
import FooterDescriprion from './FooterDescriprion.vue';
export default {
  name: "NumChartCard",
  mounted() {
    const countUp = new CountUp(this.cardID, this.value);
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
  },
  props: {
    cardID: String,
    title:String,
    value:Number,
    prefix:String,
    suffix:String,
    footerValue:Number,
    footerSuffix:String,
    footerDisplayPrefix:Boolean,
    footerIsReverse:Boolean,
    description:String,

  },
  components: {
    FooterDescriprion
  }
}
</script>

<style scoped>
@import url(/src/assets/styles/card.css);

.bi-card-container {
  width: auto !important;
  justify-content: space-between;
}
</style>