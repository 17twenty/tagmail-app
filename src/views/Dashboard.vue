<template>
  <div class="layout-container">
    <div class="header"><Logo /></div>
    <div class="page">
      <SideBar :business="business" />
      <main class="main-view card-shadow">
        <h1>main view</h1>
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
    business: {
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
  height: 100vh;
  width: 100vw;
}
.header {
  margin: 4em;
}
.page {
  display: flex;
  width: 100%;
  height: 100%;
}

.main-view {
  width: 68%;
  height: 90%;
  overflow-y: scroll;
}
</style>
