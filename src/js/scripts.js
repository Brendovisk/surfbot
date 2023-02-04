import Header from "./modules/header";
import TogglePlan from "./modules/togglePlan";

const header = new Header();
const togglePlan = new TogglePlan("[data-toggle-trigger='plan']", "[data-toggle-target='plan']", "active");
const togglePaymentMethod = new TogglePlan("[data-toggle-trigger='payment']", "[data-toggle-target='payment']", "active");

header.init();
togglePlan.init();
togglePaymentMethod.init();
