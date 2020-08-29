<template>
  <div class="box">
    <button type="button" class="delete is-pulled-right" @click="close" />
    <p><strong>Pre-generated code</strong></p>
    <p>Working code snippets to send this template via the Tagmail API.</p>

    <b-tabs>
      <template v-for="tab in languages">
        <b-tab-item :key="tab.Language" :value="tab.language" :label="title(tab.language)">
          <div class="codebox">
            <pre
              >{{ tab.sample }}
 </pre
            >
          </div>
        </b-tab-item>
      </template>
    </b-tabs>
  </div>
</template>

<script>
export default {
  name: 'CodeBox',
  props: {
    languages: {
      type: Array,
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
    title(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
  },
};
</script>

<style lang="scss" scoped>
.codebox > pre {
  font-size: 14px;
  line-height: 1.375;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  -moz-tab-size: 2;
  -o-tab-size: 2;
  tab-size: 2;
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  background: #1d262f;
  color: #f7f7fe;
}
</style>
