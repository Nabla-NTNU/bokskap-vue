<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Button from 'primevue/button';

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

    <form>
        <FloatLabel>
            <InputText id="username" v-model="username" />
            <label for="username">NTNU-brukernavn</label>
        </FloatLabel>
        <Button class="text-m bg-green-300 p-3" label="Send e-post"></Button>
    </form>
</template>

<script>
export default {
  name: 'GlemtView',
};
</script>

<style scoped>
</style>
