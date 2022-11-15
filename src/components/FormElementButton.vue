<template>
  <div>
    <b-field label="Text">
      <b-input v-model="form.text" :value="form.text" />
    </b-field>
    <b-field label="URI">
      <b-input v-model="form.uri" :value="form.uri" />
    </b-field>
    <b-field label="Position">
      <b-select expanded v-model.trim="form.position" placeholder="position...">
        <option value="left">Left</option>
        <option value="right">Right</option>
        <option selected value="center">Center</option>
      </b-select>
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'FormElementButton',
  props: {
    form: {
      type: Object,
      required: true,
    },
  },

};
</script>

<style>

</style>
