/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import {
  createApp,
  ref,
  reactive,
  watch,
} from 'https://unpkg.com/vue@3.0.2/dist/vue.esm-browser.js';

const App = {
  setup() {
    const url = ref('');
    const loading = ref(false);
    const error = ref('');
    const thanks = reactive({
      name: '',
      message: '',
      slug: '',
      from: '',
    });
  },
};

createApp(App).mount('#app');
