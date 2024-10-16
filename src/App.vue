<script setup>
import './style.css'

import Header from './components/Header.vue';
import MainContent from './components/MainContent.vue';

</script>

<template>
  <main>
  <Header />
  <MainContent>
    <router-view></router-view>
  </MainContent>
  </main>
</template>

<style scoped>

</style>
