const form = document.querySelector('form');
form.addEventListener('submit', evt => {
    evt.preventDefault();

    const recipe = {
      method: form.methodBar5.value,
      grind: form.grindBar5.value,
      coffee: form.coffeeBar5.value,
      water: form.waterBar5.value,
      temperature: form.temperatureBar5.value,
      time: form.timeBar5.value,
      rating: form.ratingBar5.value,
      note: form.noteBar5.value
      };

    
    db.collection('recipes').add(recipe)
    .catch(err => console.log(err));
    
    form.methodBar5.value='';
    form.grindBar5.value='';
    form.coffeeBar5.value='';
    form.waterBar5.value='';
    form.temperatureBar5.value='';
    form.timeBar5.value='';
    form.ratingBar5.value='';
    form.noteBar5.value='';
});