const form = document.querySelector('form');
form.addEventListener('submit', evt => {
    evt.preventDefault();

    const recipe = {
      method: form.methodBar4.value,
      grind: form.grindBar4.value,
      coffee: form.coffeeBar4.value,
      water: form.waterBar4.value,
      temperature: form.temperatureBar4.value,
      time: form.timeBar4.value,
      rating: form.ratingBar4.value,
      note: form.noteBar4.value
      };

    
    db.collection('recipes').add(recipe)
    .catch(err => console.log(err));
    
    form.methodBar4.value='';
    form.grindBar4.value='';
    form.coffeeBar4.value='';
    form.waterBar4.value='';
    form.temperatureBar4.value='';
    form.timeBar4.value='';
    form.ratingBar4.value='';
    form.noteBar4.value='';
});