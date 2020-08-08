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
            <span class="card-shadow brand-value"><p>{{logoSize}}</p></span>
          </div>
          <div class="cell medium">
            <InputSlider class="brand-range" v-model="logoSize"/>
          </div>
        </div>
        <div class="row">
          <div class="cell medium">
            <p class="brand-property">Border Radius</p>
          </div>
          <div class="cell small">
            <span class="card-shadow brand-value">{{borderRadius}}</span>
          </div>
          <div class="cell medium">
            <InputSlider class="brand-range" v-model="borderRadius"/>
          </div>
        </div>
        <div class="row">
          <div class="cell medium">
            <p class="brand-property">Background Colour</p>
          </div>
          <div class="cell small">
            <span
            :style="{ backgroundColor: backgroundColour }"
            class="card-shadow brand-value" ></span>
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
            <span
            :style="{ backgroundColor: highlightColour }"
            class="card-shadow brand-value" ></span>
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
            <span
            :style="{ backgroundColor: defaultText }"
            class="card-shadow brand-value" ></span>
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
            <span
            :style="{ backgroundColor: titleText }"
            class="card-shadow brand-value" ></span>
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
            <span
            :style="{ backgroundColor: borderColour }"
            class="card-shadow brand-value" ></span>
          </div>
          <div class="cell medium">
            <span></span>
          </div>
        </div>
      </div>
      <div clas="theme-preview">
        <div>
          <img
            :src="brandLogo"
            alt="company logo"
            :style="{ width: `${logoSize}px`, borderRadius: `${borderRadius}` }">
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
      backgroundColour: 'chocolate',
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
