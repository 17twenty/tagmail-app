<template>
  <form @submit.prevent="emitSave">
    <b-field label="Access key ID">
      <b-input
        autocomplete="disable-autocomplete"
        required
        v-model="form.publicKey"
        placeholder="xxx-xxxx-xxx-xxx"
      ></b-input>
    </b-field>
    <b-field label="Secret Access Key ID">
      <b-input
        autocomplete="new-password"
        type="password"
        password-reveal
        required
        v-model="form.publicKey"
        placeholder="xxx-xxxx-xxx-xxx"
      ></b-input>
    </b-field>
    <b-field label="Region">
      <b-input
        autocomplete="new-password"
        required
        v-model="form.region"
        placeholder="ap-southeast-2"
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
import { PROVIDER_SES } from '@/api/providers';

export default {
  name: 'FormProviderSES',
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
        provider: PROVIDER_SES,
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
