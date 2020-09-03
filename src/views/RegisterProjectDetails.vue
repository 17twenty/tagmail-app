<template>
  <div class="register-project-details">
    <FormRegisterProjectDetails :form="business" />
  </div>
</template>

<script>
import FormRegisterProjectDetails from '@/components/FormRegisterProjectDetails.vue';

export default {
  name: 'RegiserProjectDetails',
  components: {
    FormRegisterProjectDetails,
  },
  data() {
    return {
      business: {
        businessName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        postCode: '',
        country: '',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.register-project-details {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
