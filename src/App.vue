<script setup>
import Menubar from 'primevue/menubar';


const items =
[
  {key:"Home", label:"🏠 Home", url: "/"},
  {key:"Regler", label:"ℹ️ Skapregler", url:"/skapregler"},
  {key:"Glemt", label:"Glemt skapnummer?",url: "/glemt"},
  {key:"Avregistrer",label:"Avregistrer skap", url: "/avregistrer"}
];


</script>

<template>
  <h1>Bokskap i Realfagbygget</h1>
  <Menubar :model="items"></Menubar>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>

</style>
