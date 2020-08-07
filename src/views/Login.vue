<template>
  <div class="page-container">
    <div>
      <img alt="Vue logo" width="120px" style="padding: 1em;" src="@/assets/logo.png">
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

<style>

</style>
