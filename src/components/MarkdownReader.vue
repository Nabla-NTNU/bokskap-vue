<template>
  <div class="prose" v-html="renderedMarkdown"></div>
</template>

<script>
import markdownIt from 'markdown-it';

export default {
  props: {
    file: {
      type: String,
      required: true, // Ensure that the prop is required
    },
  },
  data() {
    return {
      renderedMarkdown: '',
    };
  },
  watch: {
    // Watch for changes in the file prop and fetch new markdown
    file: {
      immediate: true,
      handler(newFile) {
        this.fetchMarkdown(newFile);
      },
    },
  },
  methods: {
    async fetchMarkdown(filePath) {
      try {
        const response = await fetch(filePath);
        const markdown = await response.text();
        const md = markdownIt();
        this.renderedMarkdown = md.render(markdown);
      } catch (error) {
        console.error('Error loading markdown file:', error);
      }
    },
  },
};
</script>

<style>
.prose {
  overflow-wrap: break-word; /* Allows long words to break onto the next line */
  word-break: break-word;    /* Ensures long words break appropriately */
}

.prose h1 {
  @apply text-title-1 font-poppins text-gray-700;
}

.prose h2 {
  @apply text-title-2 font-poppins text-gray-700;
}

.prose ul {
  @apply text-pink-500 font-lato list-disc list-inside;
}

.prose ol {
  @apply text-pink-500 font-lato list-decimal list-inside my-2 space-y-2;
}

.prose li p {
  @apply inline ml-1;
}

.prose p {
  @apply text-gray-900 font-lato;
}

</style>