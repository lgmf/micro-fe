import { incrementEvent } from '@/app/counter/events';
import { VButton } from '@/shared/components';

export default {
  components: {
    VButton,
  },
  methods: {
    increment() {
      window.dispatchEvent(incrementEvent())
    }
  },
};
