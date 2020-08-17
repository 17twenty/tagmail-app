<template>
  <div class="register-container">
    <transition name="slide-fade" mode="out-in">
      <FormPersonalDetails
        key="personal"
        @valid-submit="postPersonalDetails"
        v-if="step === 1"
        :form="forms.personal"
      />
      <FormBusinessDetails
        key="business"
        @valid-submit="nextStep"
        v-if="step === 2"
        :form="forms.business"
      />
      <RegisterAlmostThere key="almost-there" v-if="step === 3" />
    </transition>
  </div>
</template>

<script>
import FormPersonalDetails from '@/components/FormRegisterPersonalDetails.vue';
import FormBusinessDetails from '@/components/FormRegisterBusinessDetails.vue';
import RegisterAlmostThere from '@/components/RegisterAlmostThere.vue';

import api from '@/api';

export default {
  name: 'RegisterContainer',
  components: {
    FormPersonalDetails,
    FormBusinessDetails,
    RegisterAlmostThere,
  },
  data() {
    return {
      step: 1,
      forms: {
        personal: {
          email: '',
          fullName: '',
          password1: '',
          password2: '',
        },
        business: {
          businessName: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          state: '',
          postCode: '',
          country: '',
        },
      },
    };
  },
  methods: {
    nextStep() {
      this.step += 1;
    },
    async postPersonalDetails() {
      try {
        const payload = {
          accountName: this.forms.personal.fullName,
          emailAddress: this.forms.personal.email,
          password1: this.forms.personal.password1,
          password2: this.forms.personal.password2,
        };
        await api.postPersonalDetailsRego(payload);
        this.nextStep();
      } catch (error) {
        this.handleErrorNotification();
      }
    },
    handleErrorNotification() {
      this.$buefy.snackbar.open({
        message: 'There was an issue during registation',
        type: 'is-danger',
        indefinite: true,
      });
    },
  },
};
</script>

<style lang="scss">
.register-container {
  width: 100%;
  margin-bottom: 2em;
  padding: 12px;
}
</style>
