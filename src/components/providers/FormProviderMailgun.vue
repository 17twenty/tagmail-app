<template>
  <form @submit.prevent="emitSave">
    <b-field label="Domain">
      <b-input
        autocomplete="disable-autocomplete"
        required
        v-model="form.domain"
        placeholder="mg.example.com"
      ></b-input>
    </b-field>
    <b-field label="Private API key">
      <b-input
        autocomplete="new-password"
        type="password"
        password-reveal
        required
        v-model="form.privateApiKey"
        placeholder="xxx-xxxx-xxx-xxx"
      ></b-input>
    </b-field>
    <div class="form-actions">
      <b-input
        :loading="isLoading"
        expanded
        type="submit"
        custom-class="button is-primary"
        value="Save"
      />
    </div>
  </form>
</template>

<script>
import { PROVIDER_MAILGUN } from '@/api/providers';

export default {
  name: 'FormProviderMailgun',
  props: {
    form: {
      type: Object,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    emitSave() {
      this.$emit('submit', {
        provider: PROVIDER_MAILGUN,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-actions {
  margin-top: 3em;
}
</style>
