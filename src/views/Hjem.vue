<script setup>

import { ref } from 'vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute(); // Make sure to use this for route querying.


// Reactive variables for form data
const username = ref(''); 
const selected = ref(''); 
const locker = ref(null); 

// Form submission function
const register = () => {
    console.log('Form submitted with:', {
        username: username.value,
        selected: selected.value,
        locker: locker.value
    });
};

// Autofill form if query params are present
onMounted(() => {
  if (route.query.room) {
    selected.value = route.query.room;
  }
  if (route.query.locker) {
    locker.value = parseInt(route.query.locker, 10);
  }
});
</script>

<template>
    <div class="flex flex-col l:flex-row items-center justify-between">
        
        <!-- Information Section -->
        <div class="text-l l:w-[50%] w-[100%] mb-8 m:mb-0">
            <p>Bokskapene i rommene CU1-111, CU2-021 og EU1-110 i Realfagbygget. Hvilket rom skapet er registrert på står på skapet.</p>
            <p>Hvis du vil ha et skap må du gå til ett av disse rommene, sette på en hengelås og registrere deg her.</p>
            <p class="mt-8">NB! Husk å sjekke at skapet ditt faktisk står registrert som "opptatt" under skaplister etter registrering.</p>
        </div>

        <!-- Form Section -->
        <div class="bg-pink-500 w-[460px] m:w-[460px] shadow-pink text-white px-8 pt-4 pb-8 rounded-[32px]">
            <div class="text-dark font-poppins text-title-1 text-center mb-6">Reserver her</div>
            
            <form @submit.prevent="register" class="flex flex-col space-y-4">
                
                <!-- Username Field -->
                <input 
                    class="bg-blue-25 text-gray-700 text-l p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-700"
                    v-model="username" 
                    autofocus
                    placeholder="NTNU-brukernavn" 
                    required 
                />
                
                <div class="flex justify-between">
                    <!-- Select Field -->
                    <select 
                        class="bg-blue-25 text-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-700"
                        v-model="selected" 
                        required
                        style="width: 140px;"
                    >
                        <option value="" disabled selected class="text-gray-500">Velg rom</option>
                        <option>CU1-111</option>
                        <option>CU2-021</option>
                        <option>EU1-110</option>
                    </select>
            
                    <!-- Locker Field (Number) -->
                    <input 
                        class="bg-blue-25 text-gray-700 text-l p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-700"
                        v-model="locker" 
                        type="number" 
                        placeholder="Skapnummer" 
                        required
                        style="width: 50%;"
                    />
                </div>
                <router-link to="/glemt" class="content-center text-l font-poppins text-white underline decoration-pink-100">Glemt skapnummer?</router-link>
                <!-- Register Button Aligned to the Right -->
                <div class="text-right">
                    <button 
                        type="submit" 
                        class="text-white px-4 py-2 rounded-md text-subtitle-1" 
                        :disabled="!username.trim() || !selected || locker === null || locker < 1"
                        :class="{
                            'bg-gray-300': !username.trim() || !selected || locker === null || locker < 1,
                            'bg-green-900': username.trim() && selected && locker !== null && locker > 0
                        }"
                    >
                        Registrer
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
/* Disable the number input arrows */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield; /* Firefox */
}
input:invalid, select:invalid {
  color:  theme('colors.gray.500');
  font-size: 20px;
}
input:valid, select:valid {
  color:  theme('colors.gray.900');
  font-size: 20px;
}

::placeholder {
  color:  theme('colors.gray.500');
}
</style>

<script>
export default {
  name: 'HjemView',
}
</script>