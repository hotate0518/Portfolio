<template>
  <div
    id="app"
    class="d-flex flex-column"
  >
    <navigation id="navigation" />
    <main
      id="main-page"
      class="flex-grow-1"
    >
      <top-page id="top-page" />
      <profile id="profile" />
      <career id="career" />
      <skill id="skill" />
      <contact id="contact" />
    </main>
  </div>
</template>

<script>
import Navigation from './pages/Navigation.vue';
import TopPage from './pages/TopPage.vue';
import Profile from './pages/Profile.vue';
import Career from './pages/Career.vue';
import Skill from './pages/Skill.vue';
import Contact from './pages/Contact.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    TopPage,
    Profile,
    Career,
    Skill,
    Contact,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: antiquewhite;
  background-color: black;
  overflow: hidden;
  height: 100vh;
}

#main-page {
  overflow-y:auto;
}

#main-page > div {
  height: 100%;
}
</style>
