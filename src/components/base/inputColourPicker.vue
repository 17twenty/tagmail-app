<template>
  <div :class="['colour-picker-container', focusStuff]">
    <input
      :key="keyIndicator"
      type="color"
      placeholder="#ff0000"
      pattern="#[0-9A-Fa-f]{6}"
      :value="value"
      @input="handleInput"
      @change="handleInput"
    />
  </div>
</template>

<script>
export default {
  name: 'InputColourPicker.vue',
  props: {
    value: String,
  },
  data() {
    return {
      keyIndicator: 0,
    };
  },
  computed: {
    focusStuff() {
      return this.focus ? 'some-thing' : '';
    },
  },
  methods: {
    handleInput(event) {
      this.keyIndicator += 1;
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.colour-picker-container {
  width: 100%;
  height: 100%;
  & input {
    outline: none;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border: none;
  }
}
.some-thing {
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
  border: 1px solid rgba(81, 203, 238, 1);
}
</style>
