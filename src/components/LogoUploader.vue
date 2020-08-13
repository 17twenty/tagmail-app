<template>
  <section class="upload-file-container">
    <b-field class="drop-file-container" :message="message">
      <b-upload
        @input="handleImage"
        v-model="file"
        drag-drop
        :accept="formatAccepted">
        <section class="section">
          <div class="content drop-file-content">
            <p>
              <b-icon v-show="!file.name" icon="upload" size="is-large"></b-icon>
            </p>
            <p>Drop your file here</p>
          </div>
        </section>
      </b-upload>
    </b-field>
  </section>
</template>

<script>

export default {
  name: 'LogoUploader',

  data() {
    return {
      file: {},
      formatAccepted: 'image/*',
      message: 'Please upload either a JPEG or PNG image',
    };
  },
  methods: {
    handleImage() {
      console.log('hello');
      const input = this.file;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.$emit('blob-stuff', e.target.result);
      };
      reader.readAsDataURL(input);
    },
  },
};
</script>

<style lang="scss" scoped>
@import  'src/styles/variables.scss';

.upload-file-container {
  padding: 2em;
  background-color: $white;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.drop-file-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.drop-file-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.upload-invoice-action {
  display: flex;
  flex-direction: column;
}
.upload-error-message {
  margin: 1em;
}
</style>
