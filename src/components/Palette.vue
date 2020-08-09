<template>
  <section>
    <button @click="createElement('button')" class="button is-outline is-rounded">
      <i class="fa fa-hand-pointer"></i>
    </button>
    <button @click="createElement('image')" class="button is-outline is-rounded">
      <i class="fa fa-image"></i>
    </button>
    <button @click="createElement('separator')" class="button is-outline is-rounded">
      <i class="fa fa-grip-lines"></i>
    </button>
    <button @click="createElement('text')" class="button is-outline is-rounded">
      <i class="fa fa-font"></i>
    </button>
    <button @click="createElement('list')" class="button is-outline is-rounded">
      <i class="fas fa-list-ul"></i>
    </button>
    <button @click="createElement('table')" class="button is-outline is-rounded">
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
@import '~bulma';
@import '~buefy/src/scss/buefy';
</style>
