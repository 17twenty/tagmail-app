<template>
  <div class="register-container">
    <transition name="slide-fade" mode="out-in">
      <FormPersonalDetails
        key="personal"
        @valid-submit="nextStep"
        v-if="step === 1"
        :form="forms.personal"
        />
      <FormBusinessDetails
        key="business"
        @valid-submit="nextStep"
        v-if="step === 2"
        :form="forms.business"
      />
      <RegisterAlmostThere
        key="almost-there"
        v-if="step === 3"
      />
    </transition>
  </div>
</template>

<script>
import FormPersonalDetails from '@/components/FormRegisterPersonalDetails.vue';
import FormBusinessDetails from '@/components/FormRegisterBusinessDetails.vue';
import RegisterAlmostThere from '@/components/RegisterAlmostThere.vue';

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
          password: '',
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
  },
};
</script>

<style lang="scss">
.register-container {
  width: 100%;
  margin-bottom: 2em;
}
</style>
