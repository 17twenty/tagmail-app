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
        v-if="step === 2"
        :form="forms.business"
      />
    </transition>
  </div>
</template>

<script>
import FormPersonalDetails from '@/components/FormRegisterPersonalDetails.vue';
import FormBusinessDetails from '@/components/FormRegisterBusinessDetails.vue';

export default {
  name: 'Card',
  components: {
    FormPersonalDetails,
    FormBusinessDetails,
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
      this.step = 2;
    },
  },
};
</script>

<style lang="scss">
.register-container {
  width: 100%;
}
</style>
