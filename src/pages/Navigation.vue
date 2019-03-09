<template>
  <nav>
    <b-nav justified>
      <b-nav-item
        v-for="naviItem in navigationItems"
        :key="naviItem.name"
        v-scroll-to="naviItem.scrollId"
      >
        <div class="d-flex align-items-center justify-content-center navigation-item">
          <img
            class="icon mr-2"
            :src="naviItem.icon"
          >
          <template v-if="$mq !== 'sm'">
            {{ naviItem.name }}
          </template>
        </div>
      </b-nav-item>
    </b-nav>
  </nav>
</template>

<script>
import TopPageIcon from '../assets/toppage.png';
import ProfileIcon from '../assets/profile.png';
import SkillIcon from '../assets/skill.png';
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
.navigation-item {
  color:black;
  text-align: center;
}
.navigation-item .icon {
  width: 20px;
  height: 20px;
}
</style>
