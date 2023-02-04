export default class TogglePlan {
  constructor(trigger, target, activeClass) {
    this.trigger = document.querySelectorAll(trigger);
    this.target = document.querySelectorAll(target);
    this.activeClass = activeClass;
  }

  removeActiveClass() {
    this.trigger.forEach((input, index) => {
      input.parentElement.classList.remove(this.activeClass);
      this.target[index].classList.remove(this.activeClass);
    });
  }

  addActiveClass() {
    this.trigger.forEach((input, index) => {
      if (input.checked) {
        input.parentElement.classList.add(this.activeClass);
        this.target[index].classList.add(this.activeClass);
      }
    });
  }

  togglePlanEventListeners() {
    this.trigger.forEach((input) => {
      input.addEventListener("click", () => {
        this.removeActiveClass();
        this.addActiveClass();
      });
    });
  }

  init() {
    if (this.trigger.length && this.target.length && this.activeClass) {
      this.addActiveClass();
      this.togglePlanEventListeners();
    }
    return this;
  }
}
