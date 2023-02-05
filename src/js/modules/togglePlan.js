export default class TogglePlan {
  constructor(trigger, target, activeClass, baseValue, finalValue) {
    this.trigger = document.querySelectorAll(trigger);
    this.target = document.querySelectorAll(target);
    this.activeClass = activeClass;

    if (baseValue !== undefined && finalValue !== undefined) {
      this.baseValue = document.querySelectorAll(baseValue);
      this.finalValue = document.querySelector(finalValue);
    }
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

    if (this.baseValue !== undefined && this.finalValue !== undefined) {
      this.changePrice(index);
    }
  }

  togglePlanEventListeners() {
    this.trigger.forEach((element, index) => {
      element.addEventListener("click", () => {
        this.removeActiveClass();
        this.addActiveClass(index);
      });
    });
  }

  changePrice(index) {
    this.finalValue.innerText = this.baseValue[index].textContent;
  }

  init() {
    if (this.trigger.length && this.target.length && this.activeClass) {
      this.addActiveClass(0);
      this.togglePlanEventListeners();
    }
    return this;
  }
}
