<template>
  <div class="page-container">
    <div :class="['login-card', 'card-shadow']">
      <img class="logo" alt="tagmail logo" width="120px" style="" src="@/assets/logo.png" />
      <b-tabs expanded v-model="activeTab" destroy-on-hide>
        <b-tab-item label="Login">
          <FormLogin
            @valid-submit="handleSubmit"
            :errorMessage="formError"
            :isLoading="isLoading"
            :form="login"
          />
        </b-tab-item>
        <b-tab-item label="Register">
          <b-notification>
            Tagmail is currently in beta. If you signup today there are no charges but we will reach
            out in future for a 15 minute catchup about how you have been doing and the problem
            Tagmail has solved for you.
          </b-notification>
          <Register />
        </b-tab-item>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import API from '@/api';
import { DASHBOARD } from '@/router/route-names';
import FormLogin from '@/components/FormLogin.vue';
import Register from '@/containers/Register.vue';

export default {
  name: 'Login',
  components: {
    Register,
    FormLogin,
  },
  data() {
    return {
      isLoading: false,
      activeTab: 0,
      login: {
        email: '',
        password: '',
      },
      formError: '',
    };
  },
  methods: {
    handleSubmit() {
      API.postLogin({ username: this.login.email, password: this.login.password })
        .then(() => {
          this.$router.push({ name: DASHBOARD });
        })
        .catch((response) => {
          console.log(response);
          if (response.status === 403) {
            this.formError = response.data.errorMessage;
            return;
          }
          this.formError = 'Something went wrong, please try again in a few moments';
        })
        .finally(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.login-card {
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  min-width: 350px;
  & .logo {
    margin: 1em;
  }
  & .b-tabs {
    width: 90%;
    min-height: 350px;
  }
}
</style>
