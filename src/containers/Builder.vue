<template>
  <div class="builder-container">
    <div class="left">
      <div class="save-group">
        <router-link to="/dashboard"> &lt; Back to Dashboard</router-link>
        <button class="button is-primary">Save Template</button>
      </div>
      <div class="centered">
        <Element
          :type="item.type"
          v-for="(item, index) in items"
          :key="index"
          @delete="removeElement(index)"
          @up="move(index, index - 1)"
          @down="move(index, index + 1)"
          @update="elementUpdate(index)"
        >
          <component :is="elementFormMap(item.type)" slot="element-properties" :form="item.data" />
        </Element>
        <p class="help-text" v-if="items.length < 1">
          Add an item to get started...
        </p>
        <Palette @create="addItem"></Palette>
      </div>
    </div>

    <div class="right">
      <form id="reloader" target="preview" method="POST" :action="tagmailApi">
        <input type="hidden" name="payload" :value="stringIt(items)" />
      </form>
      <iframe
        :src="tagmailApi"
        id="preview"
        width="100%"
        height="100%"
        style="border:none;"
      >
      </iframe>
    </div>
  </div>
</template>

<script>
import Element from '@/components/Element.vue';
import Palette from '@/components/Palette.vue';

import FormElementButton from '@/components/FormElementButton.vue';
import FormElementImage from '@/components/FormElementImage.vue';
import FormElementText from '@/components/FormElementText.vue';
import FormElementList from '@/components/FormElementList.vue';
import FormElementTable from '@/components/FormElementTable.vue';

import * as elements from '@/lib/elements';

export default {
  name: 'BuilderContainer',
  components: {
    Element,
    Palette,
    FormElementButton,
    FormElementImage,
    FormElementText,
    FormElementList,
    FormElementTable,
  },
  mounted() {
    this.updatePreview();
  },
  data() {
    return {
      dirty: false,
      items: [],
    };
  },
  computed: {
    tagmailApi() {
      return `${process.env.VUE_APP_TAGMAIL_API_URL}/app/template`;
    },
  },
  methods: {
    elementFormMap(elementType) {
      const elementForm = {
        button: 'FormElementButton',
        image: 'FormElementImage',
        text: 'FormElementText',
        list: 'FormElementList',
        table: 'FormElementTable',
      };
      return elementForm[elementType];
    },
    updatePreview() {
      const payload = this.items;
      api
        .postPreview(payload)
        .then(() => {
          this.reloadIframe();
        })
        .catch(() => {})
        .finally(() => {});
    },
    addItem(value) {
      const element = value.toLowerCase();
      this.items.push(elements[element]());
    },
    removeElement(index) {
      this.items.splice(index, 1);
    },
    move(oldIndex, newIndex) {
      while (oldIndex < 0) {
        // eslint-disable-next-line no-param-reassign
        oldIndex += this.items.length;
      }
      while (newIndex < 0) {
        // eslint-disable-next-line no-param-reassign
        newIndex += this.items.length;
      }
      this.items.splice(newIndex, 0, this.items.splice(oldIndex, 1)[0]);
      return this.items; // for testing purposes
    },
    reloadIframe() {
      const iframe = document.getElementById('preview');
      // eslint-disable-next-line no-self-assign
      iframe.src = iframe.src;
    },
  },
  watch: {
    items: {
      deep: true,
      async handler() {
        this.dirty = true;
      },
    },
    dirty() {
      setTimeout(async () => {
        this.dirty = false;
        await this.updatePreview();
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
.builder-container {
  height: 90vh;
  width: 97%;
  display: flex;
  left: 0;
  right: 0;
}

.save-group {
  display: flex;
  justify-content: space-between;
  height:      40px;
  line-height: 40px; /* Same as height  */
  margin-bottom: 12px;
}
/* Control the left side */
.left {
  left: 0;
  flex: 1;
  min-width: 30vw;
  max-width: 30vw;
  & .help-text {
    text-align: center;
  }
}

/* Control the right side */
.right {
  text-align: center;
  overflow: hidden;
  max-width: 70vw;
  margin-left: 1em;
  -moz-box-shadow: 3px 3px 5px 6px #eee;
  -webkit-box-shadow: 3px 3px 5px 6px #eee;
  box-shadow: 3px 3px 5px 6px #eee;
  margin-right: 0;
  padding-right: 0;
  margin-right: 0;
  background-color: #fcfcfc;
  position: relative;
  flex: 1;
}
#preview {
  height: 100%;
}
</style>
