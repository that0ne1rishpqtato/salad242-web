import Home from "./components/Home.vue";
import Browsers from "./components/Browsers.vue";
import Extensions from "./components/Extensions.vue";
import Apps from "./components/Apps.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/browsers", component: Browsers },
  { path: "/extensions", component: Extensions },
  { path: "/apps", component: Apps }
];

export default routes;
