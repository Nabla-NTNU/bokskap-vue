<script setup>
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Button from 'primevue/button'
</script>


<template>
    <p>Dersom du fyller inn NTNU-brukernavnet ditt her får du
         tilsendt en mail med hvilke(t) skap som er registrerte på deg.</p>

    <form>
        <FloatLabel>
            <InputText id="username" v-model="username" />
            <label for="username">NTNU-brukernavn</label>
        </FloatLabel>
        <Button label="Send e-post"></Button>
    </form>
</template>

<style scoped>
    form {
        margin-top:2rem
    }
    button {
        margin-top: 1rem;
    }
</style>