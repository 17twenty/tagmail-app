<template>
  <div
    class="theme-preview"
    :style="{
      backgroundColor: theme.backgroundColour,
    }"
  >
    <div>
      <img
        :src="theme.logoURI"
        :alt="theme.logoAlt"
        :style="{
          width: `${theme.logoWidth}px`,
          borderRadius: `${theme.borderRadius}`,
        }"
      />
    </div>
    <div>
      <p
        class="title"
        :style="{
          color: theme.titleText,
        }"
      >
        Title Company
      </p>
    </div>
    <div>
      <p
        :style="{
          color: theme.defaultText,
        }"
      >
        Default text colour
      </p>
    </div>
    <div>
      <p
        :style="{
          color: theme.mutedText,
        }"
      >
        Muted Text colour
      </p>
    </div>
    <div
      class="preview-border"
      :style="{
        borderColor: theme.borderColour,
        borderRadius: `${theme.borderRadius}px`,
      }"
    >
      <p>Border Radius</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThemePreviewer',
  props: {
    theme: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.theme-preview {
  padding: 1em;
  border-style: solid;
  border-width: 1px;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.preview-border {
  display: flex;
  justify-content: center;
  margin: 2em;
  padding: 2em;
  width: 100%;
  border-width: 1px;
  border-style: solid;
}
</style>
