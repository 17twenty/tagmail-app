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
    handleSubmit({ provider }) {
      console.log(provider);
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
