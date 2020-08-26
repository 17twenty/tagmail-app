<template>
  <div
    class="theme-preview card-shadow"
    :style="{
      backgroundColor: theme.bodyBackgroundColor,
      borderRadius: theme.borderRadius,
    }"
  >
    <div
      class="theme-logo"
      :style="{
        marginRight: rightMargin,
        marginLeft: leftMargin,
      }"
    >
      <img
        :style="{
          width: `${theme.logoWidth}px`,
        }"
        :src="theme.logoUri"
        alt="logo"
      />
    </div>
    <div
      :style="{
        borderColor: theme.contentBorderColor,
        borderRadius: `${theme.borderRadius}px`,
        backgroundColor: theme.contentBackgroundColor,
      }"
      class="theme-page"
    >
      <div class="theme-title-text">
        <ThemeTitleText :colour="theme.titleTextColor" />
      </div>
      <div class="theme-default-text">
        <ThemeTextBlock :colour="theme.defaultTextColor" />
      </div>
      <div class="theme-muted-text">
        <ThemeTextFooter :colour="theme.mutedTextColor" />
      </div>
      <div class="theme-button">
        <ThemeButton :colour="theme.highlightColor" :radius="theme.borderRadius">
          <span
            :style="{ backgroundColor: theme.buttonTextColor }"
            class="theme-button-text"
          ></span>
        </ThemeButton>
      </div>
      <div class="theme-separator">
        <hr :style="{ backgroundColor: 'lightgray', height: '1px' }" />
      </div>
      <div class="theme-footer">
        <ThemeTextFooter :colour="theme.mutedTextColor" />
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
  computed: {
    leftMargin() {
      if (this.theme.logoPosition === 'left') {
        return '10%';
      }
      return 'auto';
    },
    rightMargin() {
      if (this.theme.logoPosition === 'right') {
        return '10%';
      }
      return 'auto';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.theme-preview {
  padding-top: 1.2em;
  padding-bottom: 1.8em;
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
  margin-bottom: 2em;
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
.theme-button-text {
  border-radius: 4px;
  width: 4em;
  height: 1em;
}
</style>
