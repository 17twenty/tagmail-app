<template>
  <div class="theme-logo-branding-container">
    <h1 class="subtitle">Customise Your Brand</h1>
    <div class="theme-container">
      <div class="theme-builder">
        <div class="row">
          <p class="brand-property">Logo Size</p>
          <span class="card-shadow brand-value">{{logoSize}}</span>
          <div>
            <InputSlider v-model="logoSize"/>
          </div>
        </div>
      </div>
      <div clas="theme-preview">
        <div>
          <img :src="brandLogo" alt="company logo" :style="{ width: `${logoSize}px`}">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputSlider from '@/components/base/InputSlider.vue';

export default {
  name: 'ThemeLogoBranding',
  components: {
    InputSlider,
  },
  data() {
    return {
      brandLogo:
        'https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/f1/ca/f6/f1caf69e-e807-d256-a664-01fc6bb91036/source/256x256bb.jpg',
      logoSize: '50',
      borderRadius: '0',
      mutedText: 'grey',
      backgroundColour: 'white',
      highlightColour: 'blue',
      defaultText: 'green',
      titleText: 'chocolate',
      borderColour: 'pink',
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
.row {
  background-color: pink;
  display: flex;
  width: 100%;
  & .brand-property {
    color: blue($color: #000000);
  }
  & .brand-value {
    margin: 0em 1em;
  }
}
</style>
