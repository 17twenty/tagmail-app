<template>
  <div
    :style="{
      backgroundColor: colour,
    }"
    class="title-text"
  ></div>
</template>

<script>
export default {
  name: 'TitleText',
  props: {
    colour: String,
  },
};
</script>

<style scoped>
.title-text {
  width: 100%;
  height: 1em;
}
</style>
