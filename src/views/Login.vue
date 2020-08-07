<template>
  <div class="page-container">
    <div :class="['login-card',  'card-shadow']">
      <img class="logo" alt="tagmail logo" width="120px" style="" src="@/assets/logo.png">
      <Register />
    </div>
  </div>
</template>

<script>
import Register from '@/components/Register.vue';

export default {
  name: 'Login',
  components: {
    Register,
  },
};
</script>

<style lang="scss" scoped>
.login-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  max-width: 350px;
  min-width: 350px;
  & .logo {
    margin: 1em;
  }
}

</style>
