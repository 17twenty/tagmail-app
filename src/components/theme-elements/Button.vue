<template>
  <div
    :style="{
      backgroundColor: colour,
      borderRadius: `${radius}px`,
    }"
    class="themed-button"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    colour: String,
    radius: Number,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.themed-button {
  height: 3em;
  width: 8em;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
