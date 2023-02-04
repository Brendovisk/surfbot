export default class TogglePlan {
  constructor() {
    this.inputs = document.querySelectorAll("[data-toggle='input']");
    this.cards = document.querySelectorAll("[data-toggle='card']");
  }

  removeActiveClass() {
    this.inputs.forEach((input, index) => {
      input.parentElement.classList.remove("active");
      this.cards[index].classList.remove("active");
    });
  }

  addActiveClass() {
    this.inputs.forEach((input, index) => {
      if (input.checked) {
        input.parentElement.classList.add("active");
        this.cards[index].classList.add("active");
      }
    });
  }

  togglePlanEventListeners() {
    this.inputs.forEach((input) => {
      input.addEventListener("click", () => {
        this.removeActiveClass();
        this.addActiveClass();
      });
    });
  }

  init() {
    if (this.inputs.length) {
      this.addActiveClass();
      this.togglePlanEventListeners();
    }
    return this;
  }
}
