<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient';

const lockers = ref([]);

async function getLockers(){
  const { data } = await supabase.from('locker_lockers').select();
  lockers.value = data;

  console.log(lockers);
}

onMounted(() => {
  getLockers();
});

</script>

<template>
    <ul>
      <li v-for="locker in lockers" :key="locker.locker_number">{{ locker.room }}: {{ locker.locker_number }}</li>
    </ul>
</template>

<style scoped>
.flex{
    display:flex
}
.justify-end  {
    justify-content: end;
}
</style>

