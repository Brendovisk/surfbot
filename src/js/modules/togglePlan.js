export default class TogglePlan {
  constructor(trigger, target, activeClass) {
    this.trigger = document.querySelectorAll(trigger);
    this.target = document.querySelectorAll(target);
    this.activeClass = activeClass;
  }

  removeActiveClass() {
    this.trigger.forEach((element, index) => {
      element.parentElement.classList.remove(this.activeClass);
      this.target[index].classList.remove(this.activeClass);
    });
  }

  addActiveClass(index) {
    this.trigger[index].checked = true;
    this.trigger[index].parentElement.classList.add(this.activeClass);
    this.target[index].classList.add(this.activeClass);
  }

  togglePlanEventListeners() {
    this.trigger.forEach((element, index) => {
      element.addEventListener("click", () => {
        this.removeActiveClass();
        this.addActiveClass(index);
      });
    });
  }

  init() {
    if (this.trigger.length && this.target.length && this.activeClass) {
      this.addActiveClass(0);
      this.togglePlanEventListeners();
    }
    return this;
  }
}
