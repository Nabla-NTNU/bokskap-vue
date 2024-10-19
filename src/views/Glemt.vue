<script setup>
import { ref } from 'vue';

// Define username as a reactive variable
const username = ref('');

// Function to handle the form submission
const sendEmail = () => {
  if (username.value) {
    // Add your email logic here, for example, sending an email to the user
    console.log(`Sending email for username: ${username.value}`);
    alert(`An email has been sent to the user with NTNU username: ${username.value}`);
  } else {
    alert('Please enter your NTNU username.');
  }
};
</script>

<template>
    <p>Dersom du fyller inn NTNU-brukernavnet ditt her får du tilsendt en mail med hvilke(t) skap som er registrerte på deg.</p>

    <form @submit.prevent="sendEmail" class="flex flex-col space-y-4">          
      <!-- Username Field -->
      <input 
          class="bg-gray-50 text-gray-700 text-l p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
          v-model="username" 
          autofocus
          placeholder="NTNU-brukernavn" 
          required 
      />
      
      
      <div class="text-right">
          <button 
              type="submit" 
              class="text-white px-4 py-2 rounded-md text-subtitle-1 mt-2" 
              :disabled="!username.trim()"
              :class="{
                  'bg-gray-300': !username.trim(),
                  'bg-green-900': username.trim() 
              }"
          >
              Send mail
          </button>
      </div>
  </form>
</template>

<script>
export default {
  name: 'GlemtView',
};
</script>

<style scoped>
</style>
