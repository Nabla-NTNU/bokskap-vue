<script setup>
import { ref } from 'vue';

// Define username as a reactive variable
const username = ref('');

// Function to handle the form submission
const unregister = () => {
  if (username.value) {
    // Add your email logic here, for example, sending an email to the user
    console.log(`Unregister for username: ${username.value}`);
    alert(`You unregistered: ${username.value}`);
  } else {
    alert('Please enter your NTNU username.');
  }
};
</script>

<template>
  <p class="text-title-1 font-poppins text-gray-700">Avregistrering</p>
  
  <p class="bodytext">Dersom du fyller inn NTNU-brukernavnet ditt her avregistreres skapet du har.</p>

  <form @submit.prevent="unregister" class="flex flex-col space-y-4 mt-4">          
      <!-- Username Field -->
      <input 
          class="bg-gray-50 text-gray-900 text-l p-2 rounded-md focus:outline-none focus:ring-3 focus:ring-blue-700"
          v-model="username" 
          autofocus
          placeholder="NTNU-brukernavn" 
          required 
      />
      
      <router-link to="/glemt" class="content-center text-l font-poppins text-gray-900 underline">Bare glemt skapnummeret?</router-link>
      
      <div class="text-right">
          <button 
              type="submit" 
              class="px-4 py-2 rounded-md text-subtitle-1" 
              :disabled="!username.trim()"
              :class="{
                  'text-gray-400 bg-gray-200': !username.trim(),
                  'text-white bg-blue-800': username.trim() 
              }"
          >
              Avregistrer
          </button>
      </div>
  </form>
</template>

<script>
export default {
  name: 'AvregistreringView',
}
</script>