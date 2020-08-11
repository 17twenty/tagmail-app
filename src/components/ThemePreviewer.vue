<template>
  <div
    class="theme-preview"
    :style="{
      backgroundColor: theme.backgroundColour,
    }"
  >
    <div class="theme-page">
      <div class="theme-title-text">
        <ThemeTitleText :colour="theme.titleText" />
      </div>
      <div
        :style="{
          backgroundColor: theme.defaultText,
        }"
        class="theme-default-text"
      >
      </div>
      <div class="theme-muted-text"></div>
      <button class="theme-button"></button>
      <div class="theme-separator"></div>
      <div class="theme-muted-text"></div>
    </div>
  </div>
</template>

<script>
import ThemeTitleText from '@/components/theme-elements/TitleText.vue';

export default {
  name: 'ThemePreviewer',
  components: {
    ThemeTitleText,

  },
  props: {
    theme: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.theme-preview {
  padding: 1em;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.theme-page {
  background-color: $white;
  padding: 1em;
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.theme-title-text {
  width: 80%;
}
</style>
