<script setup>

import DataTable from 'primevue/datatable';
import InputText from 'primevue/inputtext';
import Column from 'primevue/column';
import {FilterMatchMode} from '@primevue/core/api'

import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient.js';

const lockers = ref([]);
const room = ref();
const rooms = ref([]);

async function getLockers(){
  const { data } = await supabase.from('viw_locker_lockers').select();
  lockers.value = data;
}

async function getDistinctRooms(){
  const { data } = await supabase.from('viw_locker_distinctrooms').select();
  rooms.value = data;
}

onMounted(() => {
  getLockers();
  getDistinctRooms();
});

const filters = ref({
    global: {value: null, matchMode: FilterMatchMode.CONTAINS}
})

</script>

<template>
    <DataTable :value="lockers" v-model:filters="filters" :globalFilterFields="['room', 'locker_number']"
        paginator :rows="10">
        <template #header>
            <div class="flex justify-end">
                <InputText v-model="filters['global'].value" placeholder="Søk" />
            </div>
        </template>
        <Column field="room" header="Rom"></Column>
        <Column field="locker_number" header="Nummer"></Column>
        <Column field="taken" header="Ledig?"></Column>
    </DataTable>
</template>

<style scoped>
.flex{
    display:flex
}
.justify-end  {
    justify-content: end;
}
</style>
