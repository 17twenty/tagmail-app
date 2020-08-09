<template>
  <div>
    <b-field label="Image URI">
      <b-input v-model="form.imageURI" :value="form.imageURI" />
    </b-field>
    <b-field label="Target URI">
      <b-input v-model="form.targetURI" :value="form.targetURI" />
    </b-field>
    <b-field label="Alt Text">
      <b-input v-model="form.altText" :value="form.altText" />
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'FormElementImage',
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
