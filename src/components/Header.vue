<template>
    <header class="grid-rows-1 bg-blue-800 text-gray-25 font-poppins text-title-6 h-header content-center">
      <div class="flex items-center justify-between pl-4 pr-6 xl:w-[1024px] mx-auto">
        <!-- Logo -->
        <router-link to="/" class="content-center mr-4 text-title-5 px-2 py-1 rounded-[8px]">Bokskap</router-link>
  
        <!-- Links in header -->
        <nav class="flex flex-row">
          <div class="flex justify-between items-center w-full m:hidden">
            <button @click="toggleMenu" class="focus:outline-none">
              <img src="../assets/images/menuHamburger.svg" alt="Menu" class="h-6">
            </button>
            
          </div>
          
          <div class="hidden m:flex m:flex-row m:items-center space-x-4">
            <router-link to="/skapregler" class="content-center p-2 rounded-[8px]">Skapregler</router-link>
            <router-link to="/skaplister" class="content-center p-2 rounded-[8px]">Skaplister</router-link>
            <router-link to="/avregistrering" class="content-center p-2 rounded-[8px]">Avregistrer skap</router-link>
            <router-link to="/admin"  class="p-2 rounded-[8px]">
              <img class="h-6" src="../assets/images/admin.svg" alt="admin">
            </router-link>
          </div>
        </nav>
      </div>
      <nav :class="{'hidden': !isMenuOpen, 'block': isMenuOpen}" class="m:hidden absolute z-999999 bg-blue-900 p-4 text-white top-[64px] -right-1 m:flex m:flex-row m:items-top rounded-es-[16px] pb-6">
        <ul class="m:flex flex-col space-y-6">
            <li>
                <router-link @click="toggleMenu" to="/skapregler" class="content-center px-2 py-1 rounded-[8px]">Skapregler</router-link>
            </li>
            <li>
                <router-link @click="toggleMenu" to="/skaplister" class="content-center px-2 py-1 rounded-[8px]">Skaplister</router-link>
            </li>
            <li>
                <router-link @click="toggleMenu" to="/avregistrering" class="content-center px-2 py-1 rounded-[8px]">Avregistrer skap</router-link>
            </li>
            <li>
                <router-link @click="toggleMenu" to="/admin" class="content-center px-2 py-1 rounded-[8px]">Admin</router-link>
            </li>
        </ul>
    </nav>
    </header>
    
  </template>
  
  <script>
  export default {
    name: "Header",
    data() {
      return {
        isMenuOpen: false, // State for the menu toggle
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen; // Toggle the menu state
      },
    },
  };
  </script>
  
<style scoped>
a {
  transition: background-color 0.3s ease;
}

a:hover {
  background-color: theme('colors.blue.600');
}

button {
  cursor: pointer; 
}
</style>
  