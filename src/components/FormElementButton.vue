<template>
  <div>
    <b-field label="Text">
      <b-input v-model="form.text" :value="form.text" />
    </b-field>
    <b-field label="URI">
      <b-input v-model="form.uri" :value="form.uri" />
    </b-field>
    <b-field label="Position">
      <b-input v-model="form.position" :value="form.position" />
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
