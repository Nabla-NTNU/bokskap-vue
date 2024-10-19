<template>
<header class="sticky top-0 grid-rows-1 bg-green-dark text-gray-25 font-poppins text-title-6 h-header content-center">
    <div class="flex items-center justify-between ml-4 mr-6">
    <!-- Logo -->
    <router-link to="/" class="content-center mr-4">Bokskap</router-link>

    <!-- Links in header -->
    <nav class="flex">
        <router-link to="/skapregler" class="content-center mr-4">Skapregler</router-link>
        <router-link to="/skaplister" class="content-center mx-4">Skaplister</router-link>
        <router-link to="/avregistrering" class="content-center mx-4">Avregistrer skap</router-link>
        <router-link to="/admin">
        <img class="h-6" src="../assets/images/admin.svg" alt="admin">
        </router-link>
    </nav>
    </div>
</header>
</template>

<script>
export default {
name: "Header",
};
</script>

<style scoped>
/* You can add any specific styles related to the header component here */
</style>
  