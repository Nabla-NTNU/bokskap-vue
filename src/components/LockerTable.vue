<template>
    <div>
        <div class="flex flex-row justify-between items-end">
            <!-- Filter Options -->
            <div class="text-l">
                <label>
                    <select v-model="filter.room" class="p-2 border-spacing-2 border-gray-100 border-2 rounded-[8px] mr-4 mb-4">
                        <option value="">Alle rom</option>
                        <option value="CU2-021">CU2-021</option>
                        <option value="CU1-111">CU1-111</option>
                        <option value="EU1-110">EU1-110</option>
                    </select>
                </label>
                
                <label>
                    <select v-model="filter.taken" class="p-2 border-spacing-2 border-gray-100 border-2 rounded-[8px] mb-2">
                        <option value="all">Alle skap</option>
                        <option value="false">Ledige</option>
                        <option value="true">Opptatte</option>
                    </select>
                </label>
            </div>

            <!-- Search Input -->
            <div class="flex items-center space-x-2 text-l mb-4">
            
                <label class="flex items-center">
                    <img class="w-[36px] mr-2" src="../assets/images/search.svg" alt="search">
                    <input id="searchInput" class="max-s:w-18 max-m:w-40 m:w-80 p-2 rounded-[4px] border-gray-100 border-2 focus:outline-none focus:ring-3 focus:ring-gray-700 focus:border-transparent" type="text" v-model="searchQuery" placeholder="" />
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
                <!-- Mega cursed, needs a fix -->
                <th class="w-1/3">Rom</th>
                <th class="w-1/3">
                    <span class="hidden xs:inline">Nummer</span>
                    <span class="inline xs:hidden">Nr.</span>
                </th>
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
    import { supabase } from '@/lib/supabase'

  export default {
    data() {
      return {
        lockers: [],
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
        },

        updatePlaceholder() {
            const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            const searchInput = document.getElementById('searchInput');
            
            if (searchInput) {
                searchInput.placeholder = (w > 768) ? 'Søk etter rom eller nummer' : 'Søk';
            }
        },

        async getLockers() {
            const { data, error } = await supabase
                .from('locker_locker_status')
                .select('room,number:locker_number,taken');
            
            this.lockers = data;
            
            if (error) {
                alert(`An error has occured: ${error.message}`);
            }
        }

    },

    mounted() {
        this.updatePlaceholder(); // Call on first render
        window.addEventListener('resize', this.updatePlaceholder); // Handle window resizing

        this.getLockers();
    },

    updated() {
        this.updatePlaceholder(); // Reapply the placeholder after updates
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
