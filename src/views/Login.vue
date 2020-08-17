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
            :form="login" />
        </b-tab-item>
        <b-tab-item label="Register">
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
      API
        .postLogin({ username: this.login.email, password: this.login.password })
        .then((res) => {
          this.$router.push({ name: DASHBOARD });
          console.log(res.data);
        })
        .catch((error) => {
          if (error.response.status === 403) {
            this.formError = error.response.data.error_message;
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
