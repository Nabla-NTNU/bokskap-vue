<template>
  <div class="prose prose-lg max-w-none" v-html="renderedMarkdown"></div>
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

<style scoped>
.prose h1 {
  @apply text-blue-600 font-bold;
}

.prose h2 {
  @apply text-green-500 font-semibold;
}

.prose ul {
  @apply text-green-600 list-disc list-inside;
}

.prose ol {
  @apply text-red-500 list-decimal list-inside;
}

.prose p {
  @apply text-gray-700;
}
</style>
