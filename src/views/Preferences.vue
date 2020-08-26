<template>
  <div class="preference-container">
    <h1 class="title">Sending Service</h1>
    <p class="subtitle">You need to configure your sender to allow sending email via Tagmail</p>
    <div class="provider-container">
      <div class="provider-card">
        <figure class="image is-128x128">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </figure>
        <p>You are currently connected to {{ providerName }}</p>
      </div>
      <div class="provider-actions">
        <a href="">Change provider</a>
      </div>
    </div>

    <div class="api-container">
      <h1 class="title">API Key</h1>
      <p class="subtitle">
        You API key is used to Tagmail and send emails. It's how our system recongises your
        requests. Questions? <a href="">Send us an email</a>
      </p>
      <div class="key-container">
        <p>API key</p>
        <div class="key-input">
          <b-input v-model="apiKey" :value="apiKey"></b-input>
          <div class="regenerate">
            <p>Regenerate Key</p>
            <i class="fas fa-redo-alt fa-lg"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Preferences',
  data() {
    return {
      providerName: 'SES',
      apiKey: '1232345232342342',
    };
  },
};
</script>

<style lang="scss" scoped>
.preference-container {
  max-width: 550px;
}
.provider-container {
  display: flex;
  flex-direction: column;
}
.provider-card {
  display: flex;
   & p {
    padding: 1em;
    max-width: 150px;
  }
}
.provider-actions {
  display: flex;
  justify-content: flex-end;
  margin: 1em 0em;
}
.key-input {
  display: flex;
  align-items: center;
  & .control {
    flex-grow: 1;
  }
}
.regenerate {
  display: flex;
  align-items: center;
  & p {
    margin-left: 1em;
    margin-right: 0.5em;
  }
}
</style>
