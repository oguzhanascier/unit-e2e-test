import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

axios.defaults.baseURL = "https://pokeapi.co/api/v2/pokemon-form/";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
