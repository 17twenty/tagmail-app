<template>
  <div class="card provider-selector">
    <b-field label="Provider">
      <b-select expanded v-model="provider" placeholder="position...">
        <option value="FormProviderSendGrid">Sendgrid</option>
        <option value="FormProviderMailJet">MailJet</option>
        <option value="FormProviderSes">SES</option>
        <option value="FormProviderMailgun">Mailgun</option>
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
import FormProviderMailgun from '@/components/providers/FormProviderMailgun.vue';

import api, {
  PROVIDER_MAILJET, PROVIDER_SES, PROVIDER_SENDGRID, PROVIDER_MAILGUN,
} from '../api/providers';

export default {
  name: 'ProviderSelector',
  components: {
    FormProviderSes,
    FormProviderMailJet,
    FormProviderSendGrid,
    FormProviderMailgun,
  },
  props: ['providerName'],
  data() {
    return {
      provider: 'FormProviderMailJet',
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
      const providerMap = {
        [PROVIDER_MAILJET]: api.postMailJet,
        [PROVIDER_SENDGRID]: api.postSendGrid,
        [PROVIDER_SES]: api.postSes,
        [PROVIDER_MAILGUN]: api.postMailgun,
      };
      if (providerMap[provider] === undefined) {
        throw Error('Provider not supported');
      }
      return providerMap[provider](this.form);
    },
    handleError() {
      this.$buefy.snackbar.open({
        message: 'There was an issue saving your provider',
        type: 'is-danger',
        indefinite: true,
      });
    },
    handleSuccess() {
      this.$emit('success');
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
    providerName: {
      immediate: true,
      handler(val) {
        switch (val) {
          case 'mailgun': this.provider = 'FormProviderMailgun'; break;
          case 'sendgrid': this.provider = 'FormProviderSendgrid'; break;
          case 'ses': this.provider = 'FormProviderSes'; break;
          case 'mailjet': this.provider = 'FormProviderMailJet'; break;
          default:
            console.log(`Unrecognized provider name '${val}'`);
        }
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
