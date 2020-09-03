<template>
  <div class="register-project-details">
    <div class="title-header">
      <figure class="is-128x128">
        <img class="logo" src="@/assets/logo.png" alt="" />
      </figure>
      <p class="title">Project Details</p>
      <p>
        <small>
          Almost there, we just need a few more details to make sure you’re sending emails compliant
          with
          <a target="_new" href="https://en.wikipedia.org/wiki/Email_spam_legislation_by_country"
            >international anti-spam laws</a
          >.
        </small>
      </p>
    </div>
    <FormRegisterProjectDetails
      @valid-submit="handleSubmit"
      :isLoading="isLoading"
      :form="business"
    />
  </div>
</template>

<script>
import FormRegisterProjectDetails from '@/components/FormRegisterProjectDetails.vue';

import api from '@/api';
import { LOGIN, DASHBOARD } from '../router/route-names';

export default {
  name: 'RegiserProjectDetails',
  components: {
    FormRegisterProjectDetails,
  },
  data() {
    return {
      isLoading: false,
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
  methods: {
    async handleSubmit() {
      try {
        this.isLoading = true;
        await api.postProject(this.business);
        this.$router.push({ name: DASHBOARD });
      } catch (error) {
        this.$router.push({ name: LOGIN });
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.register-project-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0em auto;
  height: 100vh;
  width: 90%;
  & form {
    max-width: 500px;
  }
  & .logo {
    max-width: 140px;
    margin-bottom: 3em;
  }
}
.title-header {
  margin-top: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    max-width: 500px;
  }
}
</style>
