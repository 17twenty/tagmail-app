<template>
  <div class="card provider-selector">
    <b-field label="Provider">
      <b-select expanded v-model.trim="provider" placeholder="position...">
        <option value="FormProviderSendGrid">Sendgrid</option>
        <option value="FormProviderMailJet">Mail Jet</option>
        <option selected value="FormProviderSes">SES</option>
      </b-select>
    </b-field>
    <div class="provider-form-container">
      <component :form="form" :isLoading="isLoading" @submit="handleSubmit" :is="provider" />
    </div>
  </div>
</template>

<script>
import FormProviderSes from '@/components/providers/FormProviderSes.vue';
import FormProviderMailJet from '@/components/providers/FormProviderMailJet.vue';
import FormProviderSendGrid from '@/components/providers/FormProviderSendGrid.vue';

import api, { PROVIDER_MAILJET, PROVIDER_SES, PROVIDER_SENDGRID } from '../api/providers';

export default {
  name: 'ProviderSelector',
  components: {
    FormProviderSes,
    FormProviderMailJet,
    FormProviderSendGrid,
  },
  data() {
    return {
      provider: 'FormProviderSes',
      isLoading: false,
      form: {
        publicKey: '',
        privateKey: '',
        region: '',
      },
    };
  },
  methods: {
    async handleSubmit({ provider }) {
      try {
        this.isLoading = true;
        await this.handleProvider(provider);
        this.handleSuccess();
      } catch (error) {
        this.handleError();
      } finally {
        this.isLoading = false;
      }
    },
    async handleProvider(provider = '') {
      const proivderMap = {
        [PROVIDER_MAILJET]: api.postMailJet,
        [PROVIDER_SENDGRID]: api.postSendGrid,
        [PROVIDER_SES]: api.postSes,
      };
      if (proivderMap[provider] === undefined) {
        throw Error('Provider not supported');
      }
      return proivderMap[provider](this.form);
    },
    handleError() {
      this.$buefy.snackbar.open({
        message: 'There was an issue saving your provider',
        type: 'is-danger',
        indefinite: true,
      });
    },
    handleSuccess() {
      this.$buefy.snackbar.open({
        message: 'Successfully saved provider configuration',
      });
    },
  },
  watch: {
    provider: {
      deep: true,
      handler() {
        this.form = {
          publicKey: '',
          privateKey: '',
          region: '',
        };
      },
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/variables.scss';

.provider-selector {
  padding: 2em;
  min-height: 350px;
  border-radius: $default-border-radius;
  & .field {
    margin-top: 0.5em;
  }
}
</style>
