<template>
  <form @submit.prevent="emitSave">
    <b-field label="Key">
      <b-input
        autocomplete="disable-autocomplete"
        type="password"
        password-reveal
        required
        v-model="form.publicKey"
        placeholder="xxx-xxxx-xxx-xxx"
      ></b-input>
    </b-field>
    <div class="form-actions">
      <b-input
        autocomplete="new-password"
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
import { PROVIDER_SENDGRID } from '@/api/providers';

export default {
  name: 'FormProviderSendGrid',
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
        provider: PROVIDER_SENDGRID,
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
