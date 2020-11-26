import Vue from 'vue';
import Fragment from 'vue-fragment';

import Container from './Container.vue';

Vue.use(Fragment.Plugin)

new Vue({ render: (h) => h(Container) }).$mount('#container');
