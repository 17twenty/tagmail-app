<template>
  <div class="email-design-container">
    <div class="mail-card-container">
      <b-modal width="80%" :can-cancel="['escape', 'x', 'outside']" :active.sync="isCodeboxVisible">
        <CodeBox :languages="codeSnippits" @close="closeModal" />
      </b-modal>
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
import CodeBox from '@/components/CodeBox.vue';

export default {
  name: 'TemplateList',
  components: {
    CardMail,
    CodeBox,
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
      isCodeboxVisible: false,
      codeSnippits: [],
    };
  },
  mounted() {},
  methods: {
    closeModal() {
      this.isCodeboxVisible = false;
    },
    async handleGetCode(mail) {
      try {
        const { data } = await api.getTemplateTags(mail.templateId);
        this.codeSnippits = data;
        this.isCodeboxVisible = true;
      } catch (error) {
        this.$buefy.snackbar.open({
          message: `There was an issue getting code examples for ${mail.templateName}`,
          type: 'is-danger',
        });
      }
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
        onConfirm: (newName) => {
          this.renameTemplate(mail, newName);
        },
      });
    },
    handleDelete(mail) {
      this.$buefy.dialog.confirm({
        title: `Delete '${mail.templateName}'`,
        message: 'Are you sure you want to <b>delete</b> this template?',
        confirmText: 'Delete Template',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => {
          this.deleteTemplate(mail);
        },
      });
    },
    async renameTemplate(mail, templateName = '') {
      try {
        const payload = {
          templateName,
        };
        await api.renameTemplate(mail.templateId, payload);
        const index = this.designs.findIndex((design) => design.templateId === mail.templateId);
        this.designs[index].templateName = templateName;

        this.$buefy.snackbar.open({
          message: `Template renamed to ${templateName}`,
          type: 'is-success',
        });
      } catch (error) {
        this.$buefy.snackbar.open({
          message: `There was an issue renaming template ${templateName}`,
          type: 'is-danger',
        });
      }
    },
    async deleteTemplate(mail) {
      try {
        await api.deleteTemplateByName(mail.templateName);
        const index = this.designs.findIndex((design) => design.templateId === mail.templateId);
        this.designs.splice(index, 1);
        this.$buefy.toast.open('Template deleted!');
      } catch (error) {
        this.$buefy.toast.open({
          message: 'There was an issue deleting template',
          type: 'is-danger',
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.email-design-container {
  padding: 1em;
  display: flex;
  flex-direction: column;
}

.search-bar {
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
