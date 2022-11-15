<template>
  <form @submit.prevent="emitSubmit">
    <b-field label="Your name">
      <b-input required v-model="form.fullName" :value="form.fullName"></b-input>
    </b-field>
    <b-field label="Email Address">
      <b-input
        autocomplete="disable-autocomplete"
        type="email"
        required
        v-model="form.email"
        :value="form.email"></b-input>
    </b-field>
    <b-field label="Password">
      <b-input
        autocomplete="new-password"
        required
        type="password"
        v-model="form.password1"
        :value="form.password1"></b-input>
    </b-field>
    <b-field label="Confirm Password">
      <b-input
        autocomplete="new-password"
        required
        type="password"
        v-model="form.password2"
        :value="form.password2"></b-input>
    </b-field>
    <div class="form-actions">
      <b-input type="submit" value="Continue..." custom-class="button is-primary"></b-input>
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
