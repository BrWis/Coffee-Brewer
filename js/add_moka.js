const form = document.querySelector('form');
form.addEventListener('submit', evt => {
    evt.preventDefault();

    const recipe = {
      method: form.methodBar.value,
      grind: form.grindBar.value,
      coffee: form.coffeeBar.value,
      water: form.waterBar.value,
      temperature: form.temperatureBar.value,
      time: form.timeBar.value,
      rating: form.ratingBar.value,
      note: form.noteBar.value
      };

    
    db.collection('recipes').add(recipe)
    .catch(err => console.log(err));
    
    form.methodBar.value='';
    form.grindBar.value='';
    form.coffeeBar.value='';
    form.waterBar.value='';
    form.temperatureBar.value='';
    form.timeBar.value='';
    form.ratingBar.value='';
    form.noteBar.value='';
});