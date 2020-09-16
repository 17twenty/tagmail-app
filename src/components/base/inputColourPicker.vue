<template>
  <div :class="['colour-picker-container']" ref="colorpicker">
    <span @click="handleClick" class="swatch" :style="{ 'background-color': value }" />
    <chrome-picker class="top" :value="value" @input="handleInput" v-if="show" />
  </div>
</template>

<script>
import { Chrome } from 'vue-color';

export default {
  name: 'InputColourPicker.vue',
  props: {
    value: String,
  },
  components: {
    'chrome-picker': Chrome,
  },
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.elBody = document.getElementById('app');
    this.elBody.addEventListener('click', this.documentClick, false);
  },
  unmounted() {
    this.elBody = document.getElementById('app');
    this.elBody.removeEventListener('click', this.documentClick);
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.hex);
    },
    handleClick() {
      this.show = !this.show;
    },
    documentClick(event) {
      const el = this.$refs.colorpicker;
      const { target } = event;
      if (el !== target && !el.contains(target)) {
        this.show = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
.top {
  position: absolute;
  z-index: 9999999;
}
.colour-picker-container {
  width: 100%;
  height: 100%;
}
.swatch {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>
