<template>
  <div class="theme-logo-branding-container">
    <h1 class="subtitle">Project Theme and Logo</h1>
    <div class="theme-container">
      <div class="theme-builder">
        <div class="row">
          <div class="cell medium">
            <p class="brand-property">Your Brand Logo</p>
          </div>
          <div class="cell medium tall">
            <a @click="showModal"><img :src="logoUri" alt=""/></a>
          </div>
        </div>
        <div class="row">
          <div class="cell medium">
            <p class="brand-property">Logo Position</p>
          </div>
          <div class="cell medium">
            <b-field>
              <b-select expanded v-model.trim="logoPosition" placeholder="position...">
                <option value="left">Left</option>
                <option value="right">Right</option>
                <option selected value="center">Center</option>
              </b-select>
            </b-field>
          </div>
        </div>
        <div class="row">
          <div class="cell medium">
            <p class="brand-property">Web Font</p>
          </div>
          <div class="cell medium">
            <b-field>
              <b-select expanded v-model.trim="webFont" placeholder="font...">
                <option selected value="Arial">Arial</option>
                <option value="Caveat">Caveat</option>
                <option value="Comfortaa">Comfortaa</option>
                <option value="Commic Sans MS">Commic Sans MS</option>
                <option value="Courier New">Courier New</option>
                <option value="EB Garamond">EB Garamond</option>
                <option value="Georgia">Georgia</option>
                <option value="Impact">Impact</option>
                <option value="Lato">Lato</option>
                <option value="Lobster">Lobster</option>
                <option value="Lora">Lora</option>
                <option value="Merriweather">Merriweather</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Nunito">Nunito</option>
                <option value="Open Sans">Open Sans</option>
              </b-select>
            </b-field>
          </div>
        </div>
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
            <p class="brand-property">Background Colour</p>
          </div>
          <div class="cell small">
            <InputColourPicker class="card-shadow brand-value" v-model="bodyBackgroundColor" />
          </div>
          <div class="cell medium">
            <span></span>
          </div>
        </div>
        <div class="row">
          <div class="cell medium">
            <p class="brand-property">Highlight Colour</p>
          </div>
          <div class="cell small">
            <InputColourPicker class="card-shadow brand-value" v-model="highlightColor" />
          </div>
          <div class="cell medium">
            <span></span>
          </div>
        </div>
        <div class="row">
          <div class="cell medium">
            <p class="brand-property">Content Background</p>
          </div>
          <div class="cell small">
            <InputColourPicker class="card-shadow brand-value" v-model="contentBackgroundColor" />
          </div>
          <div class="cell medium">
            <span></span>
          </div>
        </div>
        <div class="row">
          <div class="cell medium">
            <p class="brand-property">Content Border</p>
          </div>
          <div class="cell small">
            <InputColourPicker class="card-shadow brand-value" v-model="contentBorderColor" />
          </div>
          <div class="cell medium">
            <span></span>
          </div>
        </div>
        <div class="row">
          <div class="cell medium">
            <p class="brand-property">Button Text</p>
          </div>
          <div class="cell small">
            <InputColourPicker class="card-shadow brand-value" v-model="buttonTextColor" />
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
            <InputColourPicker class="card-shadow brand-value" v-model="defaultTextColor" />
          </div>
          <div class="cell medium">
            <span></span>
          </div>
        </div>
        <div class="row">
          <div class="cell medium">
            <p class="brand-property">Muted Text</p>
          </div>
          <div class="cell small">
            <InputColourPicker class="card-shadow brand-value" v-model="mutedTextColor" />
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
            <InputColourPicker class="card-shadow brand-value" v-model="titleTextColor" />
          </div>
          <div class="cell medium">
            <span></span>
          </div>
        </div>
        <div class="button-actions">
          <b-button @click="postSaveTheme" type="is-primary">Save Changes</b-button>
        </div>
      </div>
      <div class="theme-preview-container">
        <ThemePreviewer :theme="$data" />
      </div>
    </div>
    <b-modal :width="500" v-on:close-modal="closeModal" :active.sync="isModalVisible">
      <LogoUploader @blob-stuff="blobStuff" />
    </b-modal>
  </div>
</template>

<script>
import InputSlider from '@/components/base/InputSlider.vue';
import InputColourPicker from '@/components/base/inputColourPicker.vue';
import ThemePreviewer from '@/components/ThemePreviewer.vue';
import LogoUploader from '@/components/LogoUploader.vue';

import api from '@/api';

export default {
  name: 'ThemeLogoBranding',
  components: {
    InputSlider,
    InputColourPicker,
    ThemePreviewer,
    LogoUploader,
  },
  props: {
    theme: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isModalVisible: false,
      webFont: this.theme.webFont,
      logoUri: this.theme.logoUri,
      logoPosition: this.theme.logoPosition,
      logoWidth: this.theme.logoWidth,
      borderRadius: this.theme.borderRadius,
      bodyBackgroundColor: this.theme.bodyBackgroundColor,
      highlightColor: this.theme.highlightColor,
      contentBackgroundColor: this.theme.contentBackgroundColor,
      contentBorderColor: this.theme.contentBorderColor,
      buttonTextColor: this.theme.buttonTextColor,
      defaultTextColor: this.theme.defaultTextColor,
      mutedTextColor: this.theme.mutedTextColor,
      titleTextColor: this.theme.titleTextColor,
      projectId: this.theme.projectId,
    };
  },
  methods: {
    closeModal() {
      this.isModalVisible = false;
    },
    showModal() {
      this.isModalVisible = true;
    },
    blobStuff(blob) {
      this.logoUri = blob;
      this.closeModal();
    },
    async postSaveTheme() {
      await api.postProjectTheme(this.$data);
    },
  },
};
</script>

<style lang="scss" scoped>
.theme-logo-branding-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1em;
}
.theme-container {
  display: flex;
  justify-content: space-between;
  height: 100%;
  & .theme-builder {
    width: 50%;
  }
  & .theme-preview-container {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
  & img {
    max-width: 50px;
  }
  & .field {
    width: 100%;
  }
}
.cell.small {
  width: 15%;
}
.cell.medium {
  width: 150px;
}
.cell.tall {
  height: 50px;
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
