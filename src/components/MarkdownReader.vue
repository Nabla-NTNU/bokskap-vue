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
  @apply text-title-1 max-s:text-smalltitle-1 font-poppins text-gray-700;
}

.prose h2 {
  @apply s:text-title-2 max-s:text-smalltitle-2 font-poppins text-gray-700;
}

.prose h3 {
  @apply s:text-title-3 max-s:text-smalltitle-3 font-poppins text-gray-700;
}

.prose h4 {
  @apply s:text-title-4 max-s:text-smalltitle-4 font-poppins text-gray-700;
}

.prose h5 {
  @apply s:text-title-5 max-s:text-smalltitle-5 font-poppins text-gray-700;
}

.prose h6 {
  @apply s:text-title-6 max-s:text-smalltitle-6 font-poppins text-gray-700 mb-4;
}

.prose ul {
  @apply  s:text-l max-s:text-s text-blue-500 font-lato list-disc list-inside;
}

.prose ol {
  @apply  s:text-l max-s:text-s text-blue-500 font-lato list-decimal list-inside my-2 space-y-2;
}

.prose li p {
  @apply inline ml-1;
}

.prose p {
  @apply s:text-l max-s:text-s text-dark font-lato;
}
</style>