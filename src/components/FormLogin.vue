<template>
  <form @submit.prevent="emitSubmit">
    <b-field label="Username / Email">
      <b-input required type="email" v-model="form.email" :value="form.email"></b-input>
    </b-field>
    <b-field label="Password">
      <b-input
        required
        type="password"
        password-reveal
        v-model="form.password"
        :value="form.password"
      ></b-input>
    </b-field>
    <div class="form-actions">
      <b-input
        :loading="isLoading"
        expanded
        type="submit"
        custom-class="button is-primary"
        value="Login"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: 'FormLogin',
  props: {
    isLoading: {
      type: Boolean,
      required: false,
      default: () => false,
    },
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
  padding-top: 2em;
}
</style>
