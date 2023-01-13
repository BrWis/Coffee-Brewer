const form = document.querySelector('form');
form.addEventListener('submit', evt => {
    evt.preventDefault();

    const recipe = {
      method: form.methodBar7.value,
      grind: form.grindBar7.value,
      coffee: form.coffeeBar7.value,
      water: form.waterBar7.value,
      temperature: form.temperatureBar7.value,
      time: form.timeBar7.value,
      rating: form.ratingBar7.value,
      note: form.noteBar7.value
      };

    
    db.collection('recipes').add(recipe)
    .catch(err => console.log(err));
    
    form.methodBar7.value='';
    form.grindBar7.value='';
    form.coffeeBar7.value='';
    form.waterBar7.value='';
    form.temperatureBar7.value='';
    form.timeBar7.value='';
    form.ratingBar7.value='';
    form.noteBar7.value='';
});