<template>
  <div class="email-design-container">
    <!-- <div class="search-bar">
      <b-input></b-input>
    </div> -->
    <div class="mail-card-container">
      <CardMail
        v-for="mail in designs"
        v-bind:key="mail.id"
        :mail="mail"
        @get-code="handleGetCode(mail)"
        @edit="handleEdit(mail)"
        @duplicate="handleDuplicate(mail)"
        @rename="handleRename(mail)"
        @delete="handleDelete(mail)"
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
          templateName: 'ActivationEmail',
          version: '1.2.3',
          createdAt: new Date().toLocaleString(),
        },
        {
          id: '2',
          templateName: 'Welcome Email',
          version: '1.2.3',
          createdAt: new Date().toLocaleString(),
        },
        {
          id: '3',
          templateName: 'PasswordReset',
          version: '1.2.3',
          createdAt: new Date().toLocaleString(),
        },
      ],
    };
  },
  methods: {
    handleGetCode(mail) {
      console.log('get-code', mail);
    },
    handleEdit(mail) {
      console.log('edit', mail);
    },
    handleDuplicate(mail) {
      console.log('duplicate', mail);
    },
    handleRename(mail) {
      console.log('rename', mail);
    },
    handleDelete(mail) {
      console.log('delete', mail);
    },
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
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  & .mail-card {
    max-width: 260px;
    min-width: 260px;
    margin: 1em;
  }
}

</style>
