<template>
  <div>
    <b-field label="Text">
      <Editor
        :options="editorConfig"
        ref="toastuiEditor"
        :initialValue="form.text"
        initialEditType="wysiwyg"
        @change="handleChange"
      />
    </b-field>
    <b-field label="Text Weight">
      <b-select expanded v-model.trim="form.weight" placeholder="weight...">
        <option value="mutedText">Muted</option>
        <option value="titleText">Title</option>
        <option selected value="defaultText">Default</option>
      </b-select>
    </b-field>
    <b-field label="Position">
      <b-select expanded v-model.trim="form.position" placeholder="position...">
        <option value="left">Left</option>
        <option value="right">Right</option>
        <option selected value="center">Center</option>
      </b-select>
    </b-field>
  </div>
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/vue-editor';

export default {
  name: 'FormElementText',
  props: {
    form: {
      type: Object,
      required: true,
    },
  },
  components: {
    Editor,
  },
  data() {
    return {
      editorConfig: {
        language: 'en-US',
        useCommandShortcut: true,
        useDefaultHTMLSanitizer: true,
        usageStatistics: false,
        hideModeSwitch: true,
        toolbarItems: [
          'heading',
          'bold',
          'italic',
          'strike',
          'divider',
          'hr',
          'quote',
          'divider',
          'ul',
          'ol',
          'task',
          'indent',
          'outdent',
          'divider',
          'table',
          'image',
          'link',
          'divider',
          'code',
          'codeblock',
        ],
      },
    };
  },
  methods: {
    handleChange() {
      const markdown = this.$refs.toastuiEditor.invoke('getMarkdown');
      this.$set(this.form, 'text', markdown);
    },
  },
};
</script>

<style></style>
