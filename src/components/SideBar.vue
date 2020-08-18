<template>
  <aside class="sidebar">
    <p class="subtitle">{{projectName}}</p>
    <div class="sidebar-items">
      <router-link to="/dashboard/email-designs">Email Templates</router-link>
      <router-link to="/dashboard/sending-preferences">Sending Preferences</router-link>
      <router-link to="/dashboard/theme-logo-branding">Project Theme</router-link>
      <a class="is-disabled has-text-grey-light">Stats and Metrics</a>
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
    projectName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.is-disabled {
  cursor: not-allowed;
}

.sidebar {
  width: 30%;
  height: 75vh;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sidebar-items {
  width: 50%;
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
