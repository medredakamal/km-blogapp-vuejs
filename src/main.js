import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "animate.css";
import "./styles/tailwind.css";
import "./styles/app.css";

// Font Awesome Setup
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faSearch,
  faTimes,
  faPen,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(faBars);
library.add(faTimes);
library.add(faSearch);
library.add(faPen);
library.add(faArrowAltCircleLeft);
library.add(faLinkedin);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
