<script setup>

import DataTable from 'primevue/datatable';
import InputText from 'primevue/inputtext';
import Column from 'primevue/column';
import {FilterMatchMode} from '@primevue/core/api'

import { ref } from 'vue';

const lockers = [
    { room: "CU1-111", number: "1", taken: true },
    { room: "CU1-111", number: "2", taken: true },
    { room: "CU1-111", number: "3", taken: true },
    { room: "CU1-111", number: "4", taken: true },
    { room: "CU1-111", number: "5", taken: true },
    { room: "CU1-111", number: "6", taken: true },
    { room: "CU1-111", number: "7", taken: true },
    { room: "CU1-111", number: "8", taken: false },
    { room: "CU1-111", number: "9", taken: false },
    { room: "CU1-111", number: "10", taken: true },
    { room: "CU1-111", number: "11", taken: true },
    { room: "CU1-111", number: "12", taken: true },

]

const filters = ref({
    global: {value: null, matchMode: FilterMatchMode.CONTAINS}
})


const room = ref();
const rooms = ref([
    "CU1-111", "CU1-021"
])

</script>

<template>
    <DataTable :value="lockers" v-model:filters="filters" :globalFilterFields="['room', 'number']"
        paginator :rows="10">
        <template #header>
            <div class="flex justify-end">
                <InputText v-model="filters['global'].value" placeholder="Søk" />
            </div>
        </template>
        <Column field="room" header="Rom"></Column>
        <Column field="number" header="Nummer"></Column>
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