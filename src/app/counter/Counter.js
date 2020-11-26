import { INCREMENT } from './events/Types';

import { CounterView } from './components';

export default {
  components: {
    CounterView
  },
  data() {
    return {
      counter: 0,
    }
  },
  created() {
    window.addEventListener(INCREMENT, () => {
      this.counter++;
    })
  },
};
