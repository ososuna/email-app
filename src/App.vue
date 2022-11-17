<script setup lang="ts">
import EmailForm from './components/EmailForm.vue';
const APP_NAME = import.meta.env.VITE_APP_NAME;
</script>

<template>
  <div>
    <img src="./assets/logo.webp" class="logo" alt="Pied piper logo" />
  </div>
  <EmailForm :msg=APP_NAME />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
