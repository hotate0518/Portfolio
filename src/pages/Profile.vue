<template>
  <section class="d-flex flex-column">
    <div class="h1 m-3">
      <img
        class="mr-2"
        src="../assets/profile/profile.png"
        width="44.5"
      >
      <b>PROFILE</b>
    </div>

    <div class="flex-grow-1 pl-4 pr-4 pb-4">
      <div class="align-items-center h-100">
        <div sm="3">
          <img
            src="../assets/profile/icon.jpg"
            width="200"
            height="200"
          >
        </div>
        <div
          class="text-left m-2"
          v-html="compiledMarkdown"
        />
      </div>
    </div>
  </section>
</template>

<script >
import marked from 'marked';
import Markdown from '../assets/markdown/profile.md';

export default {
  computed: {
    compiledMarkdown() {
      return marked(Markdown, { sanitized: true });
    },
    getSocialWorkHistory() {
      const now = new Date();
      const start = new Date(2017, 4, 1);
      return now.getFullYear() - start.getFullYear();
    },
  },

};
</script>
