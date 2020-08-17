<template>
  <div class="editor">
    <img alt="Vue logo" width="120px" style="padding: 1em;" src="@/assets/logo.png">
    <Builder :theme="theme" :project="project" />
  </div>
</template>

<script>
// @ is an alias to /src
import Builder from '@/containers/Builder.vue';

export default {
  name: 'Editor',
  components: {
    Builder,
  },
  props: {
    theme: {
      type: Object,
      required: true,
    },
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.editor {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
</style>
