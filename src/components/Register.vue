<template>
  <div>
    <FormPersonalDetails :form="forms.personal" />
  </div>
</template>

<script>
import FormPersonalDetails from '@/components/FormRegisterPersonalDetails.vue';

export default {
  name: 'Card',
  components: {
    FormPersonalDetails,
  },
  data() {
    return {
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
};
</script>

<style>

</style>
