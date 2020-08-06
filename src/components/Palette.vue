<template>
  <section>

        <button  @click="createElement('button')" class="button is-outline is-rounded">
          <i class="fa fa-hand-pointer"></i>
        </button>
        <button @click="createElement('image')"  class="button is-outline is-rounded">
          <i class="fa fa-image"></i>
        </button>
        <button  @click="createElement('separator')" class="button is-outline is-rounded">
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
  props: {
  },
  methods: {
    createElement(itemType) {
      this.$emit('create', {
        type: itemType,
        data: {
          text: 'Lorem Ipsem',
          uri: 'https://google.com',
          weight: 'defaultText',
          position: 'center',
          ImageURI: 'https://via.placeholder.com/1200x400?text={ImageText}',
          TargetURI: '',
          AltText: 'Visiting one',
          items: ['One', 'Two'],
          rows: [
            { key: 'Spit', value: 'Polish' },
            { key: 'Final', value: 'Amount' },
          ],
          leftheader: 'Key',
          rightheader: 'Value',
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~bulma';
@import '~buefy/src/scss/buefy';
</style>
