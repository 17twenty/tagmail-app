<template>
  <div class="card">
    <div class="header">
      <i class="far fa-envelope fa-3x"></i>
      <h1 class="title">{{mail.templateName}}</h1>
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
};
</script>

<style>

</style>
