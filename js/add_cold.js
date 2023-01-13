const form = document.querySelector('form');
form.addEventListener('submit', evt => {
    evt.preventDefault();

    const recipe = {
      method: form.methodBar8.value,
      grind: form.grindBar8.value,
      coffee: form.coffeeBar8.value,
      water: form.waterBar8.value,
      temperature: form.temperatureBar8.value,
      time: form.timeBar8.value,
      rating: form.ratingBar8.value,
      note: form.noteBar8.value
      };

    
    db.collection('recipes').add(recipe)
    .catch(err => console.log(err));
    
    form.methodBar8.value='';
    form.grindBar8.value='';
    form.coffeeBar8.value='';
    form.waterBar8.value='';
    form.temperatureBar8.value='';
    form.timeBar8.value='';
    form.ratingBar8.value='';
    form.noteBar8.value='';
});