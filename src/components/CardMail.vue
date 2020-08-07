<template>
  <div class="card mail-card">
    <div class="mail-card-header">
      <i class="far fa-envelope fa-3x"></i>
      <p class="subtitle">{{mail.templateName}}</p>
    </div>
    <div class="metadata">
      <div class="row">
        <p>Sent:</p>
        <p>{{mail.sent}} times</p>
      </div>
      <div class="row">
        <p>Version:</p>
        <p>{{mail.version}}</p>
      </div>
      <div class="row">
        <p>Last Modified:</p>
        <p>{{mail.lastUpdated}}</p>
      </div>
    </div>
    <div class="mail-card-actions">
      <a @click="emitGetCode">Get Code</a>
      <a @click="emitEdit">Edit Template</a>
      <a @click="emitDuplicate">Duplicate Template</a>
      <a @click="emitRename">Rename Template</a>
    </div>
    <div class="mail-card-actions">
      <a @click="emitDelete">Delete Template</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardMail',
  props: {
    mail: {
      type: Object,
      required: true,
    },
  },
  methods: {
    emitGetCode() {
      this.$emit('get-code');
    },
    emitEdit() {
      this.$emit('edit');
    },
    emitDuplicate() {
      this.$emit('duplicate');
    },
    emitRename() {
      this.$emit('rename');
    },
    emitDelete() {
      this.$emit('delete');
    },
  },
};
</script>

<style lang="scss" scoped>
.mail-card {
  padding: 1em;
}
.mail-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
}
.metadata {
  display: flex;
  flex-direction: column;
}
.row {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  & p {
    font-size: 12px;
  }
}
.mail-card-actions {
  margin-top: 0.5em;
  display: flex;
  flex-direction: column;
  & a {
    font-size: 12px;
  }
}
</style>
