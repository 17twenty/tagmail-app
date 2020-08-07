<template>
  <div class="email-design-container">
    <div>
      <h1>Search bar</h1>
    </div>
    <div>
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
          lastUpdated: new Date(),
        },
        {
          id: '2',
          templateName: 'Welcome Email',
          version: '1.2.3',
          sent: '2',
          lastUpdated: new Date(),
        },
        {
          id: '3',
          templateName: 'Welcome Email',
          version: '1.2.3',
          sent: '2',
          lastUpdated: new Date(),
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

</style>
