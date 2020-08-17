<template>
  <div class="layout-container">
    <div class="dashboard-header">
      <Logo />
    </div>
    <div class="action-bar">
      <b-button tag="router-link" to="/editor" type="is-primary">Create Template</b-button>
    </div>
    <div class="page">
      <SideBar :projectName="project.projectName" />
      <main class="main-view card-shadow">
        <transition name="slide-fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </main>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';
import SideBar from '@/components/SideBar.vue';

export default {
  name: 'Dashboard',
  components: {
    Logo,
    SideBar,
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
}
.dashboard-header {
  margin-top: 4em;
  margin-bottom: 2em;
}
.action-bar {
  margin: auto;
  width: 90%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1em;
}
.page {
  display: flex;
  width: 90%;
  height: 100%;
}
.main-view {
  border-radius: 4px;
  padding: 12px;
  width: 100%;
  height: 100%;
  min-height: 75vh;
  margin-bottom: 2em;
  overflow-x: hidden;
  overflow-x: auto;
  & * {
    padding: 12px 12px;
}
}
</style>
