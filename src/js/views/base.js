export const elements = {
  searchForm: document.querySelector(".search"),
  searchInput: document.querySelector(".search__field"),
  searchResList: document.querySelector(".results__list"),
  searchRes: document.querySelector(".results"),
  searResPages: document.querySelector(".results__pages"),
  producto: document.querySelector(".recipe"),
  shopping: document.querySelector(".shopping__list"),
  enviar: document.getElementById("enviar"),
  nombre: document.getElementById("nombre"),
  direccion: document.getElementById("direccion"),
  mensaje: document.getElementById("mensaje"),
};
export const elementStrings = {
  loader: "loader",
};

export const renderLoader = (parent) => {
  const loader = `
    <div class="${elementStrings.loader}">
        <svg>
        <use href="img/icons.svg#icon-cw"></use>
        </svg>
    </div>`;
  parent.insertAdjacentHTML("afterbegin", loader);
};

export const clearLoader = () => {
  const loader = document.querySelector(`.${elementStrings.loader}`);
  if (loader) loader.parentElement.removeChild(loader);
};
