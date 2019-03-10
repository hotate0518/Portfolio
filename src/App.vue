<template>
  <div
    id="app"
  >
    <navigation
      id="navigation"
      class="shadow position-fixed"
    />
    <main
      id="main-page"
    >
      <top-page id="top-page" />
      <profile id="profile" />
      <skill id="skill" />
      <career id="career" />
      <contact id="contact" />
    </main>
  </div>
</template>

<script>
import Navigation from './pages/Navigation.vue';
import TopPage from './pages/TopPage.vue';
import Profile from './pages/Profile.vue';
import Skill from './pages/Skill.vue';
import Contact from './pages/Contact.vue';
import Career from './pages/Career.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    TopPage,
    Profile,
    Skill,
    Career,
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
  color: dimgray;
  background-color: ghostwhite;
}

#navigation {
  width: 100%;
  background: ghostwhite;
  z-index: 3;
}

#top-page {
  height: 100vh;
}

#contact {
  height: 90vh;
}

</style>
