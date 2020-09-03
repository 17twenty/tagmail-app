<template>
  <div class="verify-email">
    <img class="logo" src="@/assets/logo.png" alt="" />
    <i class="fas fa-envelope-open-text fa-9x"></i>
    <h1 class="title">Verifying email...</h1>
  </div>
</template>

<script>
import api from '@/api';
import { REGISTER_PROJECT_DETAILS, LOGIN } from '@/router/route-names';

export default {
  name: 'VerifyEmail',
  props: {
    jwt: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.verify();
  },
  methods: {
    async verify() {
      const token = this.jwt;
      try {
        await api.getVerifyEmail(token);
        this.$router.push({ name: REGISTER_PROJECT_DETAILS });
      } catch (error) {
        this.$router.push({ name: LOGIN });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.verify-email {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  & h1 {
    margin-top: 1em;
  }
  & .logo {
    max-width: 200px;
    margin-bottom: 2em;
  }
}
</style>
