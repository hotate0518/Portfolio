import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueScrollTo from 'vue-scrollto';
import VueMq from 'vue-mq';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.use(VueScrollTo, {
  container: 'main',
  duration: 500,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

Vue.use(VueMq, {
  breakpoints: {
    sm: 576,
    md: Infinity,
  },
});

Vue.use(BootstrapVue);
new Vue({
  render: h => h(App),
}).$mount('#app');
