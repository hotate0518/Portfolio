<template>
  <section>
    <div class="h1 m-3">
      <img
        class="mr-2"
        src="../assets/career/career.png"
        width="44.5"
      >
      <b>CAREER</b>
    </div>
    <div
      class="text-left pl-4 pr-4 pt-2"
      v-html="compiledMarkdown"
    />
  </section>
</template>

<script>
import marked from 'marked';
import Markdown from '../assets/markdown/career.md';

export default {
  computed: {
    compiledMarkdown() {
      return marked(Markdown, { sanitized: true });
    },
  },
};
</script>
