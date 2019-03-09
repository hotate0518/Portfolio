<template>
  <section>
    <div class="h1 m-3">
      <img
        class="mr-2"
        src="../assets/skill/skill.png"
        width="44.5"
      >
      <b>SKILL</b>
    </div>
    <b-container>
      <b-row row-eq-height>
        <b-col
          sm="6"
          class="mb-2"
        >
          <skill-list
            title="フロントエンド"
            :skill-list="frontend"
          />
        </b-col>
        <b-col
          sm="6"
          class="mb-2"
        >
          <skill-list
            title="バックエンド"
            :skill-list="backend"
          />
        </b-col>
        <b-col
          sm="6"
          class="mb-2"
        >
          <skill-list
            title="スマートフォン"
            :skill-list="application"
          />
        </b-col>
        <b-col
          sm="6"
          class="mb-2"
        >
          <skill-list
            title="インフラ"
            :skill-list="infra"
          />
        </b-col>
        <b-col
          sm="6"
          class="mb-2"
        >
          <skill-list
            title="DB"
            :skill-list="db"
          />
        </b-col>
        <b-col
          sm="6"
          class="mb-2"
        >
          <skill-list
            title="保有資格"
            :capability-list="capability"
          />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import SkillList from '../components/SkillList.vue';

export default {
  components: {
    SkillList,
  },
  data() {
    return {
      frontend: [
        {
          name: 'JavaScript(ES6)',
          confidence: 4,
        },
        {
          name: 'HTML5',
          confidence: 4,
        },
        {
          name: 'CSS3',
          confidence: 4,
        },
        {
          name: 'Vue.js',
          confidence: 4,
        },
        {
          name: 'jQuery',
          confidence: 4,
        },
        {
          name: 'React',
          confidence: 2,
        },
      ],
      backend: [
        {
          name: 'Java8',
          confidence: 4,
        },
        {
          name: 'Node.js',
          confidence: 4,
        },
        {
          name: 'C#',
          confidence: 3,
        },
        {
          name: 'Golang',
          confidence: 2,
        },
      ],
      application: [
        {
          name: 'Android Java',
          confidence: 3,
        },
        {
          name: 'Kotlin',
          confidence: 2,
        },
      ],
      infra: [
        {
          name: 'AWS EC2',
          confidence: 4,
        },
        {
          name: 'AWS RDS',
          confidence: 3,
        },
        {
          name: 'AWS VPC',
          confidence: 3,
        },
        {
          name: 'Docker',
          confidence: 3,
        },
      ],
      db: [
        {
          name: 'PostgreSQL',
          confidence: 4,
        },
      ],
      capability: [
        {
          name: '基本情報技術者',
        },
        {
          name: '応用情報技術者',
        },
        {
          name: '情報処理安全確保支援士',
        },
        {
          name: 'OCJP-Silver',
        },
      ],
    };
  },
};
</script>
