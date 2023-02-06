export default class FetchLocals {
  constructor(state, city, cep) {
    this.state = document.querySelector(state);
    this.city = document.querySelector(city);
    this.cep = document.querySelector(cep);
  }

  getCEP() {
    // todo
  }

  stateChange() {
    this.state.addEventListener("input", () => {
      this.getCity(this.state.value);
    });
  }

  cleanOptions(value) {
    const defaultOption = value.querySelector("option").outerHTML;
    return (value.innerHTML = defaultOption);
  }

  toggleLoader() {
    const loader = document.querySelector("[data-loader]");
    loader.classList.toggle("hidden");
    loader.classList.toggle("flex");
    document.body.classList.toggle("overflow-hidden");
    document.body.classList.toggle("lg:pr-4");
  }

  getState() {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome").then((response) => {
      response.json().then((data) => {
        data.forEach((state) => {
          this.state.innerHTML += `<option value="${state.sigla}">${state.nome}</option>`;
        });
        this.stateChange();
      });
    });
  }

  getCity(state) {
    this.cleanOptions(this.city);
    this.toggleLoader();
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios?orderBy=nome`).then(
      (response) => {
        response.json().then((data) => {
          data.forEach((city) => {
            this.city.innerHTML += `<option value="${city.sigla}">${city.nome}</option>`;
          });
          this.toggleLoader();
        });
      }
    );
  }

  init() {
    if (this.state && this.city) {
      this.getState();
    }
    if (this.cep) {
      this.getCEP();
    }
    return this;
  }
}
