<template>
  <b-nav justified>
    <b-nav-item
      v-for="naviItem in navigationItems"
      :key="naviItem.name"
      v-scroll-to="naviItem.scrollId"
    >
      <div class="d-flex align-items-center">
        <img
          class="navigation-icon"
          :src="naviItem.icon"
        >
        {{ naviItem.name }}
      </div>
    </b-nav-item>
  </b-nav>
</template>

<script>
import TopPageIcon from '../assets/toppage.png';
import ProfileIcon from '../assets/profile.png';
import SkillIcon from '../assets/skill.png';
import CareerIcon from '../assets/career.png';
import ContactIcon from '../assets/contact.png';

export default {
  data() {
    return {
      navigationItems: [
        {
          name: 'Top Page',
          scrollId: '#top-page',
          icon: TopPageIcon,
        },
        {
          name: 'Profile',
          scrollId: '#profile',
          icon: ProfileIcon,
        },
        {
          name: 'Career',
          scrollId: '#career',
          icon: CareerIcon,
        },
        {
          name: 'Skill',
          scrollId: '#skill',
          icon: SkillIcon,
        },
        {
          name: 'Contact',
          scrollId: '#contact',
          icon: ContactIcon,
        },
      ],
    };
  },
};
</script>


<style scoped>
.navigation-icon {
  width: 20px;
  height: 20px;
}
</style>
