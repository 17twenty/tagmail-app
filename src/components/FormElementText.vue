<template>
  <div>
    <b-field label="Text">
      <b-input v-model="form.text" :value="form.text" />
    </b-field>
    <b-field label="Text Weight">
      <b-select expanded v-model.trim="form.weight" placeholder="weight...">
        <option value="mutedText">Muted</option>
        <option value="titleText">Title</option>
        <option selected value="defaultText">Default</option>
      </b-select>
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
  name: 'FormElementText',
  props: {
    form: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
