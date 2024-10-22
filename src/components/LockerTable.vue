<template>
    <div>
        <div class="flex flex-row justify-between space-x-2">
            <!-- Filter Options -->
            <div class="space-x-4 text-l">
                <label>
                    <select v-model="filter.room" class="p-2 border-spacing-2 border-gray-100 border-2 rounded-[4px]">
                        <option value="">Alle rom</option>
                        <option value="CU2-021">CU2-021</option>
                        <option value="CU1-111">CU1-111</option>
                        <option value="EU1-110">EU1-110</option>
                    </select>
                </label>
                
                <label>
                    <select v-model="filter.taken" class="p-2 border-spacing-2 border-gray-100 border-2 rounded-[4px]">
                        <option value="all">Ledige og opptatte</option>
                        <option value="false">Kun ledige</option>
                        <option value="true">Kun opptatte</option>
                    </select>
                </label>
            </div>

            <!-- Search Input -->
            <div class="flex items-center space-x-2 mb-4 text-l">
            
                <label class="flex items-center">
                    <img class="w-[36px] mr-2" src="../assets/images/search.svg" alt="search">
                    <input class="w-80 p-2 rounded-[4px] border-gray-100 border-2 focus:outline-none focus:ring-3 focus:ring-gray-700 focus:border-transparent" type="text" v-model="searchQuery" placeholder="Søk etter rom eller nummer" />
                </label>
            </div>
        </div>

      <!-- Pagination controls at the top (visible only if totalPages > 1) -->
      <div v-if="totalPages > 1" class="my-[10px] flex items-center justify-center text-center text-l">
        <button class="mx-4 text-[32px]" @click="prevPage" :disabled="currentPage === 1" :class="{'text-transparent': currentPage === 1,'text-pink-600': currentPage !== 1}">🡐</button>
        <span>Side {{ currentPage }} av {{ totalPages }}</span>
        <button class="mx-4 text-[32px]" @click="nextPage" :disabled="currentPage === totalPages" :class="{'text-transparent': currentPage === totalPages,'text-pink-600': currentPage !== totalPages}">🡒</button>
      </div>
  
      <!-- Lockers Table -->
      <table class="table-fixed w-full mt-4 border-collapse">
        <thead class="bg-pink-300 text-white text-subtitle-2">
            <tr>
                <th class="w-1/3">Rom</th>
                <th class="w-1/3">Nummer</th>
                <th class="w-1/3">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="locker in paginatedLockers" 
                :key="locker.number + locker.room"
                :class="locker.taken ? 'bg-red-25 text-red-900' : 'bg-green-25 text-green-900'">
                <td>{{ locker.room }}</td>
                <td>{{ locker.number }}</td>
                <td>
                    <span v-if="locker.taken">Opptatt</span>
                    <router-link class="underline text-green-800"
                        v-else 
                        :to="{ name: 'Hjem', query: { room: locker.room, locker: locker.number } }">
                        Ledig
                    </router-link>
                </td>
            </tr>
        </tbody>
      </table>
  
      <!-- Pagination controls at the bottom (visible only if totalPages > 1) -->
      <div v-if="totalPages > 1" class="my-[10px] flex items-center justify-center text-center text-l">
        <button class="mx-4 text-[32px]" @click="prevPage" :disabled="currentPage === 1" :class="{'text-transparent': currentPage === 1,'text-pink-600': currentPage !== 1}">🡐</button>
        <span>Side {{ currentPage }} av {{ totalPages }}</span>
        <button class="mx-4 text-[32px]" @click="nextPage" :disabled="currentPage === totalPages" :class="{'text-transparent': currentPage === totalPages,'text-pink-600': currentPage !== totalPages}">🡒</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        lockers: [
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
            { room: "CU1-111", number: "21", taken: true },
            { room: "CU1-111", number: "22", taken: true },
            { room: "CU1-111", number: "23", taken: true },
            { room: "CU1-111", number: "24", taken: true },
            { room: "CU1-111", number: "25", taken: true },
            { room: "CU1-111", number: "26", taken: true },
            { room: "CU1-111", number: "27", taken: true },
            { room: "CU1-111", number: "28", taken: false },
            { room: "CU1-111", number: "29", taken: false },
            { room: "CU1-111", number: "30", taken: true },
            { room: "CU1-111", number: "31", taken: true },
            { room: "CU1-111", number: "32", taken: true },
            { room: "CU1-111", number: "41", taken: true },
            { room: "CU1-111", number: "42", taken: true },
            { room: "CU1-111", number: "43", taken: true },
            { room: "CU1-111", number: "44", taken: true },
            { room: "CU1-111", number: "45", taken: true },
            { room: "CU1-111", number: "46", taken: true },
            { room: "CU1-111", number: "47", taken: true },
            { room: "CU1-111", number: "48", taken: false },
            { room: "CU1-111", number: "49", taken: false },
            { room: "CU1-111", number: "50", taken: true },
            { room: "CU1-111", number: "51", taken: true },
            { room: "CU1-111", number: "52", taken: true },
            { room: "CU2-021", number: "1", taken: true },
            { room: "CU2-021", number: "2", taken: true },
            { room: "CU2-021", number: "3", taken: true },
            { room: "CU2-021", number: "4", taken: true },
            { room: "CU2-021", number: "5", taken: true },
            { room: "CU2-021", number: "6", taken: true },
            { room: "CU2-021", number: "7", taken: true },
            { room: "CU2-021", number: "8", taken: false },
            { room: "CU2-021", number: "9", taken: false },
            { room: "CU2-021", number: "10", taken: true },
            { room: "CU2-021", number: "11", taken: true },
            { room: "CU2-021", number: "12", taken: true },
            { room: "CU2-021", number: "21", taken: true },
            { room: "CU2-021", number: "22", taken: true },
            { room: "CU2-021", number: "23", taken: true },
            { room: "CU2-021", number: "24", taken: true },
            { room: "CU2-021", number: "25", taken: true },
            { room: "CU2-021", number: "26", taken: true },
            { room: "CU2-021", number: "27", taken: true },
            { room: "CU2-021", number: "28", taken: false },
            { room: "CU2-021", number: "29", taken: false },
            { room: "CU2-021", number: "30", taken: true },
            { room: "CU2-021", number: "31", taken: true },
            { room: "CU2-021", number: "32", taken: true },
            { room: "CU2-021", number: "41", taken: true },
            { room: "CU2-021", number: "42", taken: true },
            { room: "CU2-021", number: "43", taken: true },
            { room: "CU2-021", number: "44", taken: true },
            { room: "CU2-021", number: "45", taken: true },
            { room: "CU2-021", number: "46", taken: true },
            { room: "CU2-021", number: "47", taken: true },
            { room: "CU2-021", number: "48", taken: false },
            { room: "CU2-021", number: "49", taken: false },
            { room: "CU2-021", number: "50", taken: true },
            { room: "CU2-021", number: "51", taken: true },
            { room: "CU2-021", number: "52", taken: true },
          // Add more lockers to simulate multiple pages
        ],
        filter: {
          taken: 'all', // can be 'all', 'true' or 'false'
          room: ''      // empty means no room filter
        },
        searchQuery: '', // Holds the search query
        currentPage: 1,  // For pagination
        lockersPerPage: 30 // Maximum number of lockers per page
      };
    },
    computed: {
        // Filter, search and sort lockers
        filteredAndSortedLockers() {
            let filteredLockers = this.lockers.filter(locker => {
                const roomMatches = this.filter.room === '' || locker.room === this.filter.room;
                const occupiedMatches = this.filter.taken === 'all' || (this.filter.taken === 'true' && locker.taken) || (this.filter.taken === 'false' && !locker.taken);
                const searchMatches = locker.room.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                    locker.number.toString().includes(this.searchQuery);
                return roomMatches && occupiedMatches && searchMatches;
            });
  
            // Sort by room, then by number
            return filteredLockers.sort((a, b) => {
                if (a.room === b.room) {
                    return a.number - b.number;
                }
                return a.room.localeCompare(b.room);
            });
        },
  
        // Paginate the lockers after filtering and sorting
        paginatedLockers() {
            const start = (this.currentPage - 1) * this.lockersPerPage;
            const end = start + this.lockersPerPage;
            return this.filteredAndSortedLockers.slice(start, end);
        },
    
        // Calculate total number of pages
        totalPages() {
            return Math.ceil(this.filteredAndSortedLockers.length / this.lockersPerPage);
        }
    },
    watch: {
        // Watch for changes in filter and reset currentPage to 1
        filter: {
        handler() {
            this.currentPage = 1;
        },
        deep: true // Watch for deep changes in the filter object
        }
    },
    methods: {
        // Navigate to the previous page
        prevPage() {
            if (this.currentPage > 1) {
            this.currentPage--;
            }
        },
    
        // Navigate to the next page
        nextPage() {
            if (this.currentPage < this.totalPages) {
            this.currentPage++;
            }
        }
    }
};
</script>

<style scoped>
th, td {
    border: 2px solid;
    padding: 10px;
    text-align: left;
    border-color: theme('colors.pink.50');
}
th{
    font-weight: 600;
}
</style>
