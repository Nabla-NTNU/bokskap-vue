<template>
   <!-- 
    Legg til nytt rom,
    Legge til et nytt skap, 
    Melde skade på skap,
    Se anmeldte skap,

    Fjerne skap, 
    Fjerne eierskap til skap,

    Redigere regler,
    Tabell med all info om skapene som kan eksporteres? (room, number, taken, owner, previous_owner, registration_date, previous_owner_unregistration_date)
    
    Se hvor mange ledige skap som finnes, 
    Se hvor mange opptatte,
    
    Sende mail om klipping,
    Sende purremail om klipping for de som ikke "svarte" første mail,
    Avregistrere brukere som ikke "svarer" mail,
    -->

  <div>
    <div class="text-title-1">Endre skapregler.md</div> 
    
    <!-- Textarea for editing the markdown content -->
    <textarea class="w-full my-10 border-2 border-secondary-300 p-2 rounded-md focus:border-transparent focus:outline-none focus:ring-3 focus:ring-secondary-600" spellcheck="false" v-model="markdownContent" rows="10"></textarea>
    
    <!-- Button to save the updated markdown -->
    <button @click="saveMarkdown" class="text-white bg-blue-800 px-4 py-2 rounded-md s:text-subtitle-1 max-s:text-smallsubtitle-1">Lagre i Markdown</button>
    
  </div>
</template>

<script>
// Import 'marked' for markdown rendering/parsing
// import { marked } from 'marked';

export default {
  data() {
    return {
      markdownContent: '',
    };
  },
  mounted() {
    this.loadMarkdownFile();
  },
  methods: {
    loadMarkdownFile() {
      fetch('/skapregler.md')
        .then(response => response.text())
        .then(data => {
          this.markdownContent = data;
        })
        .catch(error => console.error('Error loading file:', error));
    },

    // Function to save the markdown content
    saveMarkdown() {
      // Here you could send a request to your backend to save the file
      const updatedContent = this.markdownContent;
      // Replace with your backend API request
      fetch('/api/save-markdown', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: updatedContent }),
      })
      .then(response => {
        if (response.ok) {
          alert('File saved successfully!');
        } else {
          alert('Error saving file');
        }
      })
      .catch(error => console.error('Error saving file:', error));
    },
  }
};
</script>

<style scoped>
</style>
