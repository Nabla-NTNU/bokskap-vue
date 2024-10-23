<script setup>
import MarkdownReader from '../components/MarkdownReader.vue';
</script>

<template>
    <div id="app" class="text-l">
        <MarkdownReader file="/skapregler.md" />
    </div>
</template>

<script>
export default {
  name: 'SkapreglerView',
}
</script>