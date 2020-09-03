<template>
  <form @submit.prevent="emitSubmit">
    <p>
      <small>
        Almost there, we just need a few more details to make sure you’re sending emails compliant
        with
        <a target="_new" href="https://en.wikipedia.org/wiki/Email_spam_legislation_by_country"
          >international anti-spam laws</a
        >.
      </small>
    </p>
    <br />
    <b-field label="Project / Business Name">
      <b-input required v-model="form.businessName" :value="form.businessName"></b-input>
    </b-field>
    <b-field label="Address Line 1">
      <b-input required v-model="form.addressLine1" :value="form.addressLine1"></b-input>
    </b-field>
    <b-field label="Address Line 2 (optional)">
      <b-input v-model="form.addressLine2" :value="form.addressLine2"></b-input>
    </b-field>
    <b-field grouped expanded>
      <b-field expanded label="City">
        <b-input required v-model="form.city" :value="form.city"></b-input>
      </b-field>
      <b-field expanded label="State">
        <b-input required v-model="form.state" :value="form.state"></b-input>
      </b-field>
    </b-field>
    <b-field grouped expanded>
      <b-field expanded label="Zip / Postal Code">
        <b-input required v-model="form.postCode" :value="form.postCode"></b-input>
      </b-field>
      <b-field expanded label="Country">
        <b-input required v-model="form.country" :value="form.country"></b-input>
      </b-field>
    </b-field>
    <div class="form-action-buttons">
      <b-input expanded type="submit" custom-class="button is-primary" value="Next..." />
    </div>
  </form>
</template>

<script>
export default {
  name: 'FormRegisterProjectDetails',
  props: {
    form: {
      type: Object,
      required: true,
    },
  },
  methods: {
    emitSubmit() {
      this.$emit('valid-submit');
    },
  },
};
</script>

<style></style>
