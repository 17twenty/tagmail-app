<template>
  <div class="email-design-container">
    <div class="search-bar">
      <h1>Search bar</h1>
      <b-input></b-input>
    </div>
    <div class="mail-card-container">
      <CardMail
        v-for="mail in designs"
        v-bind:key="mail.id"
        :mail="mail"
      />
    </div>
  </div>
</template>

<script>
import CardMail from '@/components/CardMail.vue';

export default {
  name: 'EmailDesigns',
  components: {
    CardMail,
  },
  data() {
    return {
      designs: [
        {
          id: '1',
          templateName: 'Welcome Email',
          version: '1.2.3',
          sent: '2',
          lastUpdated: new Date().toLocaleString(),
        },
        {
          id: '2',
          templateName: 'Welcome Email',
          version: '1.2.3',
          sent: '2',
          lastUpdated: new Date().toLocaleString(),
        },
        {
          id: '3',
          templateName: 'Welcome Email',
          version: '1.2.3',
          sent: '2',
          lastUpdated: new Date().toLocaleString(),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.email-design-container{
  padding: 1em;
  display: flex;
  flex-direction: column;
}

.search-bar{
  margin: 1em;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & p {
    margin-right: 1em;
  }
}
.mail-card-container {
  display: flex;
  flex-flow: row wrap;
  & .mail-card {
    max-width: 260px;
    min-width: 260px;
    margin: 1em;
  }
}

</style>
