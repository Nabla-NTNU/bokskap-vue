<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Button from 'primevue/button';

// Define username as a reactive variable
const username = ref('');

</script>

<template>
    <div class="flex items-center justify-between">
        
        <!-- Image -->
        <div class="text-l">
            <p>Bokskapene i rommene CU1-111, CU2-021 og EU1-110 i Realfagbygget. Hvilket rom skapet er registrert på står på skapet. </p>
            <p>Hvis du vil ha et skap må du gå til ett av disse rommene, sette på en hengelås og registrere deg her.</p>
            <p>NB! Husk å sjekke at skapet ditt faktisk står registrert som "opptatt" under skaplister etter registrering.</p>

        </div>
        <!-- Text and buttons -->
        <div class="bg-pink-500 text-white px-6 py-4 rounded-[32px]">
            <div class="w-140">
                <div class="text-dark font-lato text-subtitle-1">Neste fredag:</div>
                <div class="text-dark font-poppins text-title-1">Immatrikuleringsball</div>
            </div>
            
            <form>
                <FloatLabel variant="on">
                    <InputText id="username" v-model="value3" :invalid="!value1"/>
                    <label for="username">NTNU-brukernavn</label>
                </FloatLabel>
                <FloatLabel variant="on">
                    <InputText id="on_label" v-model="value3" />
                    <label for="on_label">Rom</label>
                </FloatLabel>
                <Button label="Registrer"></Button>
            </form>
        </div>
    </div>
</template>

<style scoped>
</style>