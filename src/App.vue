<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/styles/utils.scss';
@import '@/styles/core.scss';
@import "~bulma";
@import "~buefy/src/scss/buefy";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.label {
  font-size: small;
}
</style>
