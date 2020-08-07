<template>
  <div class="page-container">
    <div class="card-shadow">
      <img alt="tagmail logo" width="120px" style="" src="@/assets/logo.png">
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
