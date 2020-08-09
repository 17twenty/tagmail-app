<template>
  <div class="theme-logo-branding-container">
    <h1 class="subtitle">Customise Your Brand</h1>
    <div class="theme-container">
      <div class="theme-builder">
        <div class="row">
          <div class="cell medium">
            <p class="brand-property">Logo Size</p>
          </div>
          <div class="cell small">
            <span class="card-shadow brand-value"
              ><p>{{ logoWidth }}</p></span
            >
          </div>
          <div class="cell medium">
            <InputSlider class="brand-range" v-model="logoWidth" />
          </div>
        </div>
        <div class="row">
          <div class="cell medium">
            <p class="brand-property">Border Radius</p>
          </div>
          <div class="cell small">
            <span class="card-shadow brand-value">{{ borderRadius }}</span>
          </div>
          <div class="cell medium">
            <InputSlider class="brand-range" v-model="borderRadius" />
          </div>
        </div>
        <div class="row">
          <div class="cell medium">
            <p class="brand-property">Muted Text</p>
          </div>
          <div class="cell small">
            <InputColourPicker class="card-shadow brand-value" v-model="mutedText" />
          </div>
          <div class="cell medium">
            <span></span>
          </div>
        </div>
        <div class="row">
          <div class="cell medium">
            <p class="brand-property">Background Colour</p>
          </div>
          <div class="cell small">
            <InputColourPicker class="card-shadow brand-value" v-model="backgroundColour" />
          </div>
          <div class="cell medium">
            <span></span>
          </div>
        </div>
        <div class="row">
          <div class="cell medium">
            <p class="brand-property">Hightlight Colour</p>
          </div>
          <div class="cell small">
            <InputColourPicker class="card-shadow brand-value" v-model="highlightColour" />
          </div>
          <div class="cell medium">
            <span></span>
          </div>
        </div>
        <div class="row">
          <div class="cell medium">
            <p class="brand-property">Default Text</p>
          </div>
          <div class="cell small">
            <InputColourPicker class="card-shadow brand-value" v-model="defaultText" />
          </div>
          <div class="cell medium">
            <span></span>
          </div>
        </div>
        <div class="row">
          <div class="cell medium">
            <p class="brand-property">Title Text</p>
          </div>
          <div class="cell small">
            <InputColourPicker class="card-shadow brand-value" v-model="titleText" />
          </div>
          <div class="cell medium">
            <span></span>
          </div>
        </div>
        <div class="row">
          <div class="cell medium">
            <p class="brand-property">Border Colour</p>
          </div>
          <div class="cell small">
            <InputColourPicker class="card-shadow brand-value" v-model="borderColour" />
          </div>
          <div class="cell medium">
            <span></span>
          </div>
        </div>
        <div class="button-actions">
          <b-button type="is-primary">Save Changes</b-button>
        </div>
      </div>
      <ThemePreviewer :theme="$data" />
    </div>
  </div>
</template>

<script>
import InputSlider from '@/components/base/InputSlider.vue';
import InputColourPicker from '@/components/base/inputColourPicker.vue';
import ThemePreviewer from '@/components/ThemePreviewer.vue';

export default {
  name: 'ThemeLogoBranding',
  components: {
    InputSlider,
    InputColourPicker,
    ThemePreviewer,
  },
  data() {
    return {
      logoURI:
        'https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/f1/ca/f6/f1caf69e-e807-d256-a664-01fc6bb91036/source/256x256bb.jpg',
      logoWidth: '50',
      logoAlt: 'BrandIcon',
      logoPosition: 'center',
      borderRadius: '0',
      mutedText: '#7a7a7a',
      backgroundColour: '#fcfbfc',
      highlightColour: '#38f36c',
      defaultText: '#272746',
      titleText: '#272746',
      borderColour: '#272746',
    };
  },
};
</script>

<style lang="scss" scoped>
.theme-logo-branding-container {
  display: flex;
  flex-direction: column;
  padding: 1em;
}
.theme-container {
  display: flex;
  justify-content: space-between;
  & .theme-builder {
    width: 50%;
  }
}
.button-actions {
  display: flex;
  margin-top: 2em;
  justify-content: center;
  width: 100%;
}

.row {
  align-items: center;
  display: flex;
  width: 100%;
  margin: 1em 0em;
  flex-flow: row wrap;
}
.cell {
  height: 2em;
  display: flex;
  align-items: center;
}
.cell.small {
  width: 20%;
}
.cell.medium {
  width: 150px;
}
.brand-value {
  margin: auto;
  width: 2em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
