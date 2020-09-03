<template>
  <div class="almost-there-container">
    <span class="check-icon"><i class="fas fa-check-circle fa-5x"></i></span>
    <div>
      <p class="subtitle">Almost there</p>
      <p>
        <small>
          We have sent you an email to confirm your address. Click the unique link to complete your
          registration.
        </small>
      </p>
      <br />
      <p><small>Glad to have you onboard</small></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterAlmostThere',
};
</script>

<style lang="scss" scoped>
@import 'src/styles/variables.scss';

.almost-there-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.check-icon {
  margin-bottom: 1em;
  & i {
    color: $success;
  }
}
</style>
