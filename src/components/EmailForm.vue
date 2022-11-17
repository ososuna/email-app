<script setup lang="ts">
import { ref } from 'vue';
import EmailDetails from '../model/EmailDetails';

defineProps<{ msg: string }>();

const emailDetails = ref({
  recipient: '',
  msgBody: '',
  subject: ''
} as EmailDetails);

const sendEmail = () => {
  console.log(emailDetails.value);
};

</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <div>
      <form @submit.prevent="sendEmail" autocomplete="off">
        <input type="email" placeholder="Recipient" v-model="emailDetails.recipient"/><br><br>
        <input type="text" placeholder="Subject" v-model="emailDetails.subject" /><br><br>
        <textarea placeholder="Message" rows="10" cols="30" v-model="emailDetails.msgBody"></textarea><br>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
