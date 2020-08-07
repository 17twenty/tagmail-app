<template>
  <form @submit.prevent="emitSubmit">
    <b-field label="Your name">
      <b-input required v-model="form.fullName" :value="form.fullName"></b-input>
    </b-field>
    <b-field label="Email Address">
      <b-input required v-model="form.email" :value="form.email"></b-input>
    </b-field>
    <b-field label="Password">
      <b-input required type="password" v-model="form.password" :value="form.password"></b-input>
    </b-field>
    <div class="form-actions">
      <b-input type="submit" value="Next..." custom-class="button is-primary"></b-input>
    </div>
  </form>
</template>

<script>
export default {
  name: 'FormRegisterPersonalDetails',
  props: {
    form: {
      type: Object,
      required: true,
    },
  },
  methods: {
    emitSubmit() {
      this.$emit('valid-submit');
    },
  },
};
</script>

<style lang="scss" scoped>
.form-actions {
  margin-top: 2em;
}
</style>
