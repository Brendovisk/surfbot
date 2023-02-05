export default class FetchLocals {
  constructor(state, city) {
    this.state = document.querySelector(state);
    this.city = document.querySelector(city);
  }

  stateChange() {
    this.state.addEventListener("change", () => {
      this.getCity(this.state.value);
    });
  }

  cleanOptions(value) {
    const defaultOption = value.querySelector("option").outerHTML;
    return (value.innerHTML = defaultOption);
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
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios?orderBy=nome`).then(
      (response) => {
        response.json().then((data) => {
          data.forEach((city) => {
            this.city.innerHTML += `<option value="${city.sigla}">${city.nome}</option>`;
          });
        });
      }
    );
  }

  init() {
    if (this.state && this.city) {
      this.getState();
    }
    return this;
  }
}
