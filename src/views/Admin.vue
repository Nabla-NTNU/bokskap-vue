<script setup>
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button'
import Select from 'primevue/select';

import { useToast } from "primevue/usetoast";
import Toast from 'primevue/toast';

const toast = useToast();

import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient.js';

const rooms = ref([]);
const selectedRoom = ref();
const roomNumber = ref();

async function getDistinctRooms(){
  const { data } = await supabase.from('viw_locker_distinctrooms').select();
  rooms.value = data;
}

onMounted(() => {
  getDistinctRooms();
});

async function insertLocker(){
  if (!(selectedRoom.value && roomNumber.value)){
    toast.add({
      severity: 'warn',
      summary: 'Missing information',
      detail: 'Please enter both a Room and a Locker Number.',
      life: 3000
    });
  }
  else {
    const { data, error } = await supabase
      .from('locker_lockers')
      .insert({
        room: selectedRoom.value.room,
        locker_number: roomNumber.value
      })
      .select();
  
    if (error){
      toast.add({
        severity: 'error',
        summary: 'uuuupsi',
        detail: error.details
      });
    }
    else {
      toast.add({
        severity: 'success',
        summary: 'yuhu!!',
        detail: `Successfully added locker ${data[0].locker_number} to room ${data[0].room}!`
      });
    }
  }
}
</script>


<template>
  <Toast />
  <p>Dette er bokskap admin. Her burde man logge seg inn med en admin-bruker...</p>

  <form @submit.prevent="insertLocker">
    <p>Prøv å legge til et nytt skap da vel:</p> 
    <div class="card flex justify-center">

      <div class="flex-auto">
        <label for="selectRoom" class="font-bold block mb-2"> Rom: </label>
        <Select id="selectRoom"
          v-model="selectedRoom"
          :options="rooms"
          optionLabel="room" 
          checkmark
          placeholder="Velg et rom"
          class="w-full md:w-56"></Select>
      </div>

      <div class="flex-auto">
        <label for="InputLockerNumber" class="font-bold block mb-2">Skapnummer: </label>
        <InputNumber required v-model="roomNumber" id="InputLockerNumber"/>
      </div>

    </div>
    <Button type="submit" label="Legg til skap"></Button>
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
