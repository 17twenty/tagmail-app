<template>
  <div class="page-container">
    <div :class="['login-card', 'card-shadow']">
      <img class="logo" alt="tagmail logo" width="120px" style="" src="@/assets/logo.png" />
      <b-tabs expanded v-model="activeTab" destroy-on-hide>
        <b-tab-item label="Login">
          <FormLogin
            @valid-submit="handleSubmit"
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
import FormLogin from '@/components/FormLogin.vue';
import Register from '@/components/Register.vue';

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
    };
  },
  methods: {
    handleSubmit() {
      console.log('login event');
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
