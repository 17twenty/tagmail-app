<template>
  <div>
    <b-field label="List Items">
      <b-input
        type="textarea"
        :value="formattedItems"
        @input="handleInput" />
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'FormElementList',
  props: {
    form: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedItems() {
      let result = '';
      this.form.items.forEach((item) => {
        result += `${item},`;
      });
      result = result.slice(0, -1);
      return result;
    },
  },
  methods: {
    handleInput(value) {
      let list = value.replace(' ', '');
      list = list.split(',');
      this.$set(this.form, 'items', list);
    },
  },

};
</script>

<style>

</style>
