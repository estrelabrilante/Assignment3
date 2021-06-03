const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    Add(input) {
      this.counter = this.counter + input;
    },
  },
  computed: {
    increment() {
      if (this.counter > 37) {
        return "Too much";
      } else if (this.counter < 37) {
        return "Not there yet";
      } else if (this.counter == 37) {
        return this.counter;
      }
    },
  },
  watch: {},
});
app.mount("#assignment");
