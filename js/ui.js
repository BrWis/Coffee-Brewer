const recipes = document.querySelector('.recipes');

document.addEventListener('DOMContentLoaded', function() {
    // nav menu
    const menus = document.querySelectorAll('.side-menu');
    M.Sidenav.init(menus, {edge: 'right'});

    // add recipe form
    const forms = document.querySelectorAll('.side-form');
    M.Sidenav.init(forms, {edge: 'left'});
    
    const selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
});

//Aktualizuj przepisy
const renderRecipe = (data, id) => {
    const html = `
    <div class="card-panel recipe row" data-id="${id}">
    <div class="recipe-details">
      <div class="recipe-method"><span>Metoda parzenia: </span>${data.method}</div>
      <div class="divider"></div>
      <div class="recipe-grind"><span>Stopień zmielenia kawy: </span>${data.grind}</div>
      <div class="recipe-coffee"><span>Ilość kawy [g]: ${data.coffee}</div>
      <div class="recipe-water"><span>Ilość wody [ml]: </span>${data.water}</div>
      <div class="recipe-temperature"<span>Temperatura [&#176;C]: </span>${data.temperature}</div>
      <div class="recipe-time"><span>Czas [mm:ss]: </span>${data.time}</div>
      <div class="recipe-rating"><span>Ocena: </span>${data.rating}</div>
      <div class="divider"></div>
      <div class="recipe-note"><span>Notatka: </span>${data.note}</div>
    </div>
    <div class="recipe-delete right">
      <i class="material-icons" data-id="${id}">delete</i>
    </div>
  </div>`

  recipes.innerHTML += html;
};

//Remove recipe from UI
const removeRecipe = (id) => {
    const recipe = document.querySelector(`.recipe[data-id=${id}]`);
    recipe.remove();
};