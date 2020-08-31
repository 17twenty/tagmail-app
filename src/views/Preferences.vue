<template>
  <div class="preference-container">
    <h1 class="title">Sending Service</h1>
    <p class="subtitle">You need to configure your sender to allow sending email via Tagmail</p>
    <div class="provider-container">
      <div class="provider-card">
        <p>You are currently connected to {{ providerName }}</p>
      </div>
      <div class="provider-actions">
        <a @click="openModal">Change provider</a>
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
            &nbsp; <a @click="requestNewKey()"> Regenerate Key</a>
            &nbsp; <i
          :class="{ 'spin': this.isRegenerating }"
            class="fas fa-redo-alt fa-lg"></i>
          </div>
        </div>
      </div>
    </div>
    <b-modal :width="500" @close-modal="closeModal" :active.sync="showModal">
      <ProviderSelector @success="closeModal" />
    </b-modal>
  </div>
</template>

<script>
import api from '@/api';
import ProviderSelector from '@/containers/ProviderSelector.vue';

export default {
  name: 'Preferences',
  components: {
    ProviderSelector,
  },
  data() {
    return {
      isLoading: false,
      showModal: false,
      providerName: 'SES',
      apiKey: '',
      isRegenerating: false,
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    openModal() {
      this.showModal = true;
    },
    requestNewKey() {
      this.isRegenerating = true;
      const self = this;
      setTimeout(() => { self.isRegenerating = false; }, 2000);

      api.postNewAPIKey().then((res) => {
        this.apiKey = res.data.accessToken;
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
      });
    },
  },
  mounted() {
    api.getAPIKey().then((res) => {
      this.apiKey = res.data.accessToken;
    }).catch((error) => {
      console.log(error);
    }).finally(() => {});
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
  & a {
    margin-left: 1em;
    margin-right: 0.5em;
  }
}

.spin {
  animation: spin 2s infinite linear;
}

@keyframes spin {
    0%  {-webkit-transform: rotate(0deg);}
    100% {-webkit-transform: rotate(360deg);}
}
</style>
