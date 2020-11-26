import './Container.css';

const defaultApp = 'counter';

export default {
  data() {
    return {
      currentApp: null,
    }
  },
  methods: {
    async loadApp(name) {
      if (this.currentApp) {
        this.$refs.routerView.removeChild(this.currentApp.$el);
      }

      switch (name) {
        case 'counter':
          this.currentApp = (await import('@/app/counter/main')).default;
          break;
        case 'increment-counter':
          this.currentApp = (await import('@/app/increment-counter/main')).default;
          break;
      }

      this.currentApp.$mount();
      this.$refs.routerView.appendChild(this.currentApp.$el);
    }
  },
  created() {
    this.loadApp(defaultApp);
  }
}