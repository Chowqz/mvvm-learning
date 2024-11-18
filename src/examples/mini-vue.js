import MiniVue from "../MiniVue";

new MiniVue({
  el: "#root",
  data: {
    title: "hello world",
  },

  methods: {
    clickBtn: function (e) {
      this.title = "hello world";
    },
  },
});
