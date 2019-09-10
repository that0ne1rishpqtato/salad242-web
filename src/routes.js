import Home from "./components/Home.vue";
import Browsers from "./components/Browsers.vue";
import Extensions from "./components/Extensions.vue";
import Apps from "./components/Apps.vue";
import About from "./components/About.vue";
import About2 from "./components/About2.vue";
import Contact from "./components/Contact.vue";
import SimpleCalculator from "./components/SimpleCalculator.vue";
import Discontinued from "./components/Discontinued.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/browsers", component: Browsers },
  { path: "/extensions", component: Extensions },
  { path: "/apps", component: Apps },
  { path: "/about", component: About },
  { path: "/about2", component: About2},
  { path: "/contact", component: Contact },
  { path: "/simplecalculator", component: SimpleCalculator },
  { path: "/discontinued", component: Discontinued }
];

export default routes;
