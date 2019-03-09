<template>
  <div
    id="app"
    class="d-flex flex-column"
  >
    <navigation
      id="navigation"
      class="shadow"
    />
    <main
      id="main-page"
      class="flex-grow-1"
    >
      <top-page id="top-page" />
      <profile id="profile" />
      <skill id="skill" />
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

export default {
  name: 'App',
  components: {
    Navigation,
    TopPage,
    Profile,
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
  color: dimgray;
  background-color: ghostwhite;
  overflow: hidden;
  height: 100vh;
}

#main-page {
  overflow-y:auto;
  height: 100%;
}

#top-page {
  height: 100%;
}

#profile {
  height: 60%;
}


#main-page::-webkit-scrollbar{
  width: 10px;
}

#main-page::-webkit-scrollbar-track{
  background: #fff;
  border: none;
  border-radius: 3px;
  box-shadow: inset 0 0 5px rgb(74, 74, 153);
}

#main-page::-webkit-scrollbar-thumb{
  background: rgb(79, 79, 139);
  border-radius: 3px;
  box-shadow: inset 0 0 5px #000;
}
</style>
