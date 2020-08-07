<template>
  <div class="editor">
    <img alt="Vue logo" width="120px" style="padding: 1em;" src="@/assets/logo.png">
    <Builder/>
  </div>
</template>

<script>
// @ is an alias to /src
import Builder from '@/components/Builder.vue';

export default {
  name: 'Editor',
  components: {
    Builder,
  },
};
</script>

<style lang="scss" scoped>
.editor {
  text-align: center;
}
</style>
