<template>
  <aside class="sidebar">
    <p class="subtitle">{{business.businessName}}</p>
    <div class="sidebar-items">
      <router-link to="/">Email Designs</router-link>
      <router-link to="/email-designs">Sending Preferences</router-link>
      <router-link to="/email-designs">Theme / Logo / Branding</router-link>
      <router-link to="/email-designs">Stats and Metrics</router-link>
    </div>
    <div class="sidebar-end">
      <router-link to="/logout">Logout</router-link>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    business: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.sidebar {
  width: 30%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90%;
}
.sidebar-items {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  & a {
    color: $dark;
  }
  & a.router-link-active {
    font-weight: 900;
  }
}
.sidebar-end{
  width: 50%;
  & a {
    color: $dark;
  }
}
</style>
