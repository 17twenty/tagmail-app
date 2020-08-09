<template>
  <div>
    <div class="row" v-for="(row, index) in form.rows" v-bind:key="index">
      <b-field label="Key">
        <b-input type="text" v-model="form.rows[index].key" :value="form.rows[index].key" />
      </b-field>
      <b-field label="Value">
        <b-input type="text" v-model="form.rows[index].value" :value="form.rows[index].value" />
      </b-field>
      <b-dropdown position="is-bottom-left" aria-role="list">
        <a role="button" slot="trigger">
          <b-icon size="is-small" icon="ellipsis-v"></b-icon>
        </a>
        <b-dropdown-item @click="addRow" aria-role="listitem">Add Row</b-dropdown-item>
        <b-dropdown-item @click="removeRow(index)" aria-role="listitem">Remove Row</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FormElementTable',
  props: {
    form: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addRow() {
      const data = {
        key: '',
        value: '',
      };
      this.$set(this.form, 'rows', [...this.form.rows, data]);
    },
    removeRow(index) {
      this.form.rows.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .field {
    max-width: 40%;
  }
}
</style>
