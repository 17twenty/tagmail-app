<template>
  <section class="palette-container">
    <button @click="createElement('button')" class="palette-btn is-outline is-rounded">
      <i class="fa fa-hand-pointer"></i>
    </button>
    <button @click="createElement('image')" class="palette-btn is-outline is-rounded">
      <i class="fa fa-image"></i>
    </button>
    <button @click="createElement('separator')" class="palette-btn is-outline is-rounded">
      <i class="fa fa-grip-lines"></i>
    </button>
    <button @click="createElement('text')" class="palette-btn is-outline is-rounded">
      <i class="fa fa-font"></i>
    </button>
    <button @click="createElement('list')" class="palette-btn is-outline is-rounded">
      <i class="fas fa-list-ul"></i>
    </button>
    <button @click="createElement('table')" class="palette-btn is-outline is-rounded">
      <i class="fas fa-columns"></i>
    </button>
  </section>
</template>

<script>
export default {
  name: 'Palette.vue',
  props: {},
  methods: {
    createElement(itemType) {
      this.$emit('create', itemType);
    },
  },
};
</script>

<style lang="scss" scoped>
.palette-container {
  text-align: center;
}
</style>
