const form = document.querySelector('form');
form.addEventListener('submit', evt => {
    evt.preventDefault();

    const recipe = {
      method: form.methodBar6.value,
      grind: form.grindBar6.value,
      coffee: form.coffeeBar6.value,
      water: form.waterBar6.value,
      temperature: form.temperatureBar6.value,
      time: form.timeBar6.value,
      rating: form.ratingBar6.value,
      note: form.noteBar6.value
      };

    
    db.collection('recipes').add(recipe)
    .catch(err => console.log(err));
    
    form.methodBar6.value='';
    form.grindBar6.value='';
    form.coffeeBar6.value='';
    form.waterBar6.value='';
    form.temperatureBar6.value='';
    form.timeBar6.value='';
    form.ratingBar6.value='';
    form.noteBar6.value='';
});