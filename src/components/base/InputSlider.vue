<template>
  <div class="slidecontainer">
    <input
      type="range"
      min="0"
      max="250"
      :value="value"
      @input="handleInput"
      class="slider"
    />
  </div>
</template>

<script>
export default {
  name: 'InputSlider',
  props: {
    value: [String, Number],
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.slidecontainer {
  width: 100%; /* Width of the outside container */
}

/* The slider itself */
.slider {
  border-radius: 5px;
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 5px; /* Specified height */
  background: $primary; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;
}

/* Mouse-over effects */
.slider:hover {
  opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle
(use -webkit- (Chrome, Opera, Safari, Edge)
and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  border-radius: 50%;
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: $primary; /* Green background */
  cursor: pointer; /* Cursor on hover */
}

.slider::-moz-range-thumb {
  border-radius: 50%;
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: $primary; /* Green background */
  cursor: pointer; /* Cursor on hover */
}
</style>
