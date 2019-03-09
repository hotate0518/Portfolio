<template>
  <b-card
    class="h-100"
    :header="title"
    body-class="p-1"
  >
    <b-card-body
      class="p-1"
      body-class="p-1"
    >
      <b-container
        v-if="skillList.length !== 0"
        class="text-left"
      >
        <b-row class="pb-2">
          <b-col><b>技術</b></b-col>
          <b-col><b>スキル</b></b-col>
        </b-row>
        <b-row
          v-for="skill in skillList"
          :key="skill.name"
          class="pb-2"
        >
          <b-col>{{ skill.name }}</b-col>
          <b-col>{{ getStar(skill.confidence) }}</b-col>
        </b-row>
      </b-container>
      <b-container v-else>
        <b-row
          v-for="capability in capabilityList"
          :key="capability.name"
          class="text-left pb-2"
        >
          <b-col>{{ capability.name }}</b-col>
        </b-row>
      </b-container>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    skillList: {
      type: Array,
      default() {
        return [];
      },
    },
    capabilityList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    getStar(num) {
      if (!Number.isFinite(num)) {
        return num;
      }
      return '★'.repeat(num) + '☆'.repeat(5 - num);
    },
  },
};
</script>

<style scoped>
.skill-container > .row {
  padding: 3rem;
}
</style>
