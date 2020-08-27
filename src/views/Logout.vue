<template>
   <div>😕</div>
</template>
<script>

import api from '@/api';

export default {
  data() {
    return {
    };
  },
  async created() {
    await api.getLogout();
    this.$router.push('/login');
  },
};
</script>
