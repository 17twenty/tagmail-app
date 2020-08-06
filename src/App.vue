<template>
  <div id="app">
    <img alt="Vue logo" width="120px" style="padding: 1em;" src="./assets/logo.png">
    <Builder/>
  </div>
</template>

<script>
import Builder from './components/Builder.vue';

export default {
  name: 'App',
  components: {
    Builder,
  },
};
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #FCFCFC;
}
</style>
