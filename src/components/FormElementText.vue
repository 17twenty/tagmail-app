<template>
  <div>
    <b-field label="Text">
      <b-input v-model="form.text" :value="form.text" />
    </b-field>
    <b-field label="Text Weight">
      <b-input v-model="form.weight" :value="form.weight" />
    </b-field>
    <b-field label="Text Position">
      <b-input v-model="form.position" :value="form.position" />
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

<style>

</style>
