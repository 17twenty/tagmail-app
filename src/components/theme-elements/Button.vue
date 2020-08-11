<template>
  <div
    :style="{
      backgroundColor: colour,
    }"
    class="themed-button"
  >
    <span class="white-space"></span>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    colour: String,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.themed-button {
  border-radius: 4px;
  height: 3em;
  width: 8em;
  display: flex;
  justify-content: center;
  align-items: center;
}
.white-space {
  border-radius: 4px;
  width: 4em;
  height: 1em;
  color: $white;
  background-color: $white;
}
</style>
