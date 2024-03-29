<template>
  <div class="builder-container">
    <div class="left">
      <div class="save-group">
        <router-link to="/dashboard"> &lt; Back to Dashboard</router-link>
        <button
          @click="saveTemplate()"
          class="button is-primary"
          :class="{ 'is-loading': this.isSaving }"
        >
          Save Template
        </button>
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
          <component :is="elementFormMap(item.type)" slot="element-properties"
            :form="item.data" />
        </Element>
        <p class="help-text" v-if="items.length < 1">
          Add an item to get started...
        </p>
        <Palette @create="addItem"></Palette>
      </div>
    </div>

    <div class="right">
      <iframe
        id="preview"
        name="preview"
        width="100%"
        height="100%"
        style="border:none;"
      >
      </iframe>
    </div>
  </div>
</template>

<script>
import api from '@/api';
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
  props: {
    project: {
      type: Object,
      required: true,
    },
    theme: {
      type: Object,
      required: true,
    },
    template: {
      type: String,
      required: false,
    },
  },
  mounted() {
    api
      .getTemplate(this.template)
      .then((res) => {
        console.log(res.data);
        this.items = res.data.data;
        this.templateId = res.data.templateId;
        this.templateVersion = res.data.version;
        this.templateName = res.data.templateName;
        this.updatePreview();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  },
  data() {
    return {
      dirty: false,
      isSaving: false,
      templateId: null,
      templateName: '',
      templateVersion: 0,
      items: [],
      themeConfig: {
        WebFont: this.theme.webFont,
        LogoUri: this.theme.logoUri,
        LogoPosition: this.theme.logoPosition,
        LogoWidth: this.theme.logoWidth,
        BorderRadius: this.theme.borderRadius,
        BodyBackgroundColor: this.theme.bodyBackgroundColor,
        HighlightColor: this.theme.highlightColor,
        ContentBackgroundColor: this.theme.contentBackgroundColor,
        ContentBorderColor: this.theme.contentBorderColor,
        ButtonTextColor: this.theme.buttonTextColor,
        DefaultTextColor: this.theme.defaultTextColor,
        MutedTextColor: this.theme.mutedTextColor,
        TitleTextColor: this.theme.titleTextColor,
        ProjectName: this.project.projectName,
      },
    };
  },
  computed: {
  },
  methods: {
    getTemplateName() {
      this.$buefy.dialog.prompt({
        message: 'Template name?',
        inputAttrs: {
          placeholder: 'ActivationEmail',
          maxlength: 20,
        },
        trapFocus: true,
        onConfirm: ((templateName) => {
          this.templateName = templateName;
          this.saveTemplate();
        }),
      });
    },
    saveTemplate() {
      if (!this.templateName) {
        this.getTemplateName();
        return;
      }
      this.isSaving = true;
      const payload = {
        templateName: this.templateName,
        templateId: this.templateId,
        version: this.templateVersion,
        data: this.items,
      };
      api
        .postTemplate(this.templateId, payload)
        .then((res) => {
          this.templateId = res.data.templateId;
          this.templateVersion = res.data.version;
          this.templateName = res.data.templateName;
          this.$buefy.toast.open(`Saved version ${this.templateVersion} of template '${this.templateName}'`);
        })
        .finally(() => {
          this.isSaving = false;
        });
    },
    stringIt(element) {
      return JSON.stringify(element);
    },
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
      api.postPreviewTemplate({ items: this.items, theme: this.themeConfig })
        .then((res) => {
          const iframe = document.getElementById('preview');
          const iframedoc = iframe.contentDocument || iframe.contentWindow.document;
          iframedoc.body.innerHTML = res.data;
        });
      this.dirty = false;
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
  },
  watch: {
    items: {
      deep: true,
      async handler() {
        this.dirty = true;
      },
    },
    dirty() {
      if (!this.dirty) {
        return;
      }
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
  width: 97%;
  min-height: 100vh;
  display: flex;
  left: 0;
  right: 0;
}

.save-group {
  display: flex;
  justify-content: space-between;
  height: 40px;
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
