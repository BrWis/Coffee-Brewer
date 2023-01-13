const form = document.querySelector('form');
form.addEventListener('submit', evt => {
    evt.preventDefault();

    const recipe = {
      method: form.methodBar3.value,
      grind: form.grindBar3.value,
      coffee: form.coffeeBar3.value,
      water: form.waterBar3.value,
      temperature: form.temperatureBar3.value,
      time: form.timeBar3.value,
      rating: form.ratingBar3.value,
      note: form.noteBar3.value
      };

    
    db.collection('recipes').add(recipe)
    .catch(err => console.log(err));
    
    form.methodBar3.value='';
    form.grindBar3.value='';
    form.coffeeBar3.value='';
    form.waterBar3.value='';
    form.temperatureBar3.value='';
    form.timeBar3.value='';
    form.ratingBar3.value='';
    form.noteBar3.value='';
});