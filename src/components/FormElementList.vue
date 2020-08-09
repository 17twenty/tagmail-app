<template>
  <div>
    <b-field label="List Items">
      <b-input type="textarea" :value="formattedRows" @input="handleInput" />
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
    formattedRows() {
      let result;
      this.form.rows.forEach((item) => {
        result += `${item},`;
      });
      result = result.slice(0, -1);
      return result;
    },
  },
  mehtods: {
    handleInput(event) {
      let list = event.target.value.replace(' ', '');
      list = list.split(',');
      this.$emit('input', list);
    },
  },

};
</script>

<style>

</style>
