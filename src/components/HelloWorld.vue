<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <div>
      <form>
        <input type="email" placeholder="Recipient" /><br><br>
        <input type="text" placeholder="Subject" /><br><br>
        <textarea placeholder="Message" rows="10" cols="30"></textarea><br>
      </form>
    </div><br>
    <button type="submit">Send</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
