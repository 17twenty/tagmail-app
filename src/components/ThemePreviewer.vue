<template>
  <div
    class="theme-preview card-shadow"
    :style="{
      backgroundColor: theme.backgroundColour,
    }"
  >
    <div class="theme-logo">
      <img
        :style="{ width: `${theme.logoWidth}px` }"
        :src="theme.logoURI" alt="logo">
    </div>
    <div
      :style="{
        borderColor: theme.borderColour,
      }"
      class="theme-page">
      <div class="theme-title-text">
        <ThemeTitleText :colour="theme.titleText" />
      </div>
      <div class="theme-default-text">
        <ThemeTextBlock :colour="theme.defaultText" />
      </div>
      <div class="theme-muted-text">
        <ThemeTextFooter :colour="theme.mutedText" />
      </div>
      <div class="theme-button">
        <ThemeButton :colour="theme.highlightColour" />
      </div>
      <div class="theme-separator">
        <hr :style="{ backgroundColor: 'darkgray'}" >
      </div>
      <div class="theme-footer">
        <ThemeTextFooter :colour="theme.mutedText" />
      </div>
    </div>
  </div>
</template>

<script>
import ThemeTitleText from '@/components/theme-elements/TitleText.vue';
import ThemeTextBlock from '@/components/theme-elements/TextBlock.vue';
import ThemeTextFooter from '@/components/theme-elements/TextFooter.vue';
import ThemeButton from '@/components/theme-elements/Button.vue';

export default {
  name: 'ThemePreviewer',
  components: {
    ThemeTitleText,
    ThemeTextBlock,
    ThemeTextFooter,
    ThemeButton,
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
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.theme-logo {
  margin: 1em auto;
}
.theme-page {
  padding: 1em;
  background-color: $white;
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  width: 90%;
  display: flex;
  flex-direction: column;
}
.theme-title-text {
  margin: 1em auto;
  width: 70%;
  margin-bottom: 2em;
}
.theme-default-text {
  width: 80%;
  margin-bottom: 1em;
}
.theme-muted-text {
  width: 100%;
}
.theme-button {
  margin: 2em auto;
}

</style>
