import Header from "./modules/header";
import TogglePlan from "./modules/togglePlan";
import FetchLocals from "./modules/fetchLocals";

const header = new Header();

const togglePlan = new TogglePlan(
  "[data-toggle-trigger='plan']",
  "[data-toggle-target='plan']",
  "active",
  "[data-price='base']",
  "[data-price='value']"
);

const togglePaymentMethod = new TogglePlan(
  "[data-toggle-trigger='payment']",
  "[data-toggle-target='payment']",
  "active"
);

const fetchLocals = new FetchLocals("select[name='estado']", "select[name='cidade']");

header.init();
togglePlan.init();
togglePaymentMethod.init();
fetchLocals.init();
