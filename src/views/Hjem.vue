<script setup>

import Panel from 'primevue/panel';
import LockerTable from '@/components/LockerTable.vue';

</script>


<template>
    <p>Bokskapene i rommene CU1-111, CU2-021 og EU1-110 i Realfagbygget blir administrert av Linjeforeningen Nabla.</p>

    <p>Hvis du vil ha et skap må du gå til ett av disse rommene, sette på en hengelås og registrere deg her.</p>

    <p>Ta kontakt med sekretaer@nabla.ntnu.no eller webkom@nabla.ntnu.no for hjelp.</p>

    <Panel>
        <p>NB! Husk å sjekke at skapet ditt faktisk står registrert som "opptatt" under skaplister. Dette er det eneste
            som betyr noe for om skapet skal bli klippet.</p>
    </Panel>
    <Panel>
        <p>NB! Skapene som er registrert på rom EU1-110 står på rom CU1-111. Hvilket rom skapet er registrert på står på
            skapet. Det er derfor veldig vikitg at du skjekker hvilket rom skapet er registrert på.</p>
    </Panel>

    <h2>Skap:</h2>
    <LockerTable />
</template>

<script>
export default {
  name: 'HjemView',
}
</script>