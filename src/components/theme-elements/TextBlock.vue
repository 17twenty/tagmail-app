<template>
  <div class="block">
    <div class="row">
      <div
        :style="{
          backgroundColor: colour,
        }"
        class="text-block long"
      ></div>
    </div>
    <div class="row">
      <div
        :style="{
          backgroundColor: colour,
        }"
        class="text-block long"
      ></div>
      <div
        :style="{
          backgroundColor: colour,
        }"
        class="text-block long"
      ></div>
      <div
        :style="{
          backgroundColor: colour,
        }"
        class="text-block short"
      ></div>
    </div>
    <div class="row">
      <div
        :style="{
          backgroundColor: colour,
        }"
        class="text-block long"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextBlock',
  props: {
    colour: String,
  },
};
</script>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.row {
  margin: 0.4em;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
}
.text-block {
  border-radius: 4px;
  height: 1.3em;
  margin: 0 0.5em;
}
.long {
  width: 70%;
}
.short {
  width: 20%;

}
</style>
