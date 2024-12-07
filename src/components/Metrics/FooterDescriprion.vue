<template>
  <div :class="['card-footer', (isReverse) ? 'reverse-footer': '']">
    <div class="num-value">
      <span 
        :style="{ display: (displayPrefix) ? 'auto' : 'none', fill: numColor }"
        :class="['prefix', (value >= 0) ? '' : 'prefix-reverse']" v-html="toogleUpIco">
      </span>
      <span :style="{color: numColor}" :id="this.footerId">{{ Math.abs(value) }}</span>
      <span class="suffix" :style="{color: numColor}">{{ suffix }}</span>
    </div>
    <span class="card-description">
      {{ description }}
    </span>
  </div>
</template>

<script>
import { CountUp } from 'countup.js';
export default {
  name: "FooterDescription",
  data() {
    return {
      toogleUpIco: 
      `<svg width="13.720459" height="16.000000" viewBox="0 0 13.7205 16"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        	<defs/>
        	<path id="Vector" d="M7.66 0.33C7.22 -0.12 6.49 -0.12 6.04 0.33L0.33 6.04C-0.12 6.49 -0.12 7.22 0.33 7.66C0.78 8.11 1.5 8.11 1.95 7.66L5.71 3.89L5.71 14.85C5.71 15.48 6.22 16 6.86 16C7.49 16 8 15.48 8 14.85L8 3.9L11.76 7.66C12.21 8.11 12.93 8.11 13.38 7.66C13.83 7.21 13.83 6.49 13.38 6.04L7.67 0.33L7.66 0.33Z" fill-opacity="1.000000" fill-rule="nonzero"/>
      </svg>`
    }
  },
  mounted() {
    const countUp = new CountUp(this.footerId, Math.abs(this.value));
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
  },
  computed: {
    numColor() {
      return (this.value >= 0) ? '#00CC00' : '#CC0000'
    }
  },
  props: {
    footerId:String,
    displayPrefix:Boolean,
    isReverse:Boolean,
    isToogleTop:Boolean,
    value:Number,
    suffix:String,
    description:String,
  }
}
</script>

<style scoped>
.card-footer {
  display: flex;
  gap: 10px;
  align-items: center;
}

.num-value {
  display: flex;
  gap: 2px;
  letter-spacing: 1px;
  font-size: 16px;
  font-weight: 600;
}

.prefix {
  margin-right: 5px;
}

.prefix-reverse {
  transform: rotate(180deg);
}

.reverse-footer {
  flex-direction: row-reverse;
  justify-content: flex-end;
}

.card-description {
  font-size: 12px;
  font-weight: 400;
  color: var(--footer-color)
}
</style>