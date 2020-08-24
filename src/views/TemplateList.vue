<template>
  <div class="email-design-container">
    <div class="mail-card-container">
      <CardMail
        v-for="mail in designs"
        v-bind:key="mail.id"
        :mail="mail"
        @get-code="handleGetCode(mail)"
        @edit="handleEdit(mail)"
        @rename="handleRename(mail)"
        @delete="handleDelete(mail)"
      />
    </div>
  </div>
</template>

<script>
import api from '@/api';
import CardMail from '@/components/CardMail.vue';

export default {
  name: 'TemplateList',
  components: {
    CardMail,
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      designs: this.project.templates,
    };
  },
  mounted() {
    console.log('Got:', this.project);
  },
  methods: {
    handleGetCode(mail) {
      console.log('get-code', mail);
    },
    handleEdit(mail) {
      this.$router.push({ name: 'editor', params: { templateId: mail.templateId } });
    },
    handleRename(mail) {
      this.$buefy.dialog.prompt({
        message: 'Rename template?',
        inputAttrs: {
          placeholder: 'ActivationEmail',
          maxlength: 20,
          value: mail.templateName,
        },
        trapFocus: true,
        onConfirm: ((newName) => {
          const payload = {
            templateName: newName,
          };
          api
            .renameTemplate(mail.templateId, payload)
            .then(() => {
              // eslint-disable-next-line no-restricted-syntax
              for (const i in this.designs) {
                if (this.designs[i].templateId === mail.templateId) {
                  this.designs[i].templateName = newName;
                  break;
                }
              }
              this.$buefy.snackbar.open({
                message: `Template renamed to ${newName}`,
                type: 'is-success',
              });
            });
        }),
      });
    },
    handleDelete(mail) {
      console.log('delete', mail);
      this.$buefy.dialog.confirm({
        title: `Delete '${mail.templateName}'`,
        message: 'Are you sure you want to <b>delete</b> this template?',
        confirmText: 'Delete Template',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => {
          api.deleteTemplateByName(mail.templateName).finally(() => {
            // eslint-disable-next-line no-restricted-syntax
            for (const i in this.designs) {
              if (this.designs[i].templateId === mail.templateId) {
                this.designs.splice(i, 1);
                break;
              }
            }
          });
          this.$buefy.toast.open('Template deleted!');
        },
      });
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
