export default class Header {
  constructor() {
    this.header = document.querySelector("[data-header='header']");
    this.btn = document.querySelector("[data-header='btn']");
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    this.header.classList.toggle("opened");
  }

  headerEventListener() {
    this.btn.addEventListener("click", this.toggleClass);
  }

  init() {
    if (this.header && this.btn) {
      this.headerEventListener();
    }
    return this;
  }
}
