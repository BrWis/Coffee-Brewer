const form = document.querySelector('form');
form.addEventListener('submit', evt => {
    evt.preventDefault();

    const recipe = {
      method: form.methodBar2.value,
      grind: form.grindBar2.value,
      coffee: form.coffeeBar2.value,
      water: form.waterBar2.value,
      temperature: form.temperatureBar2.value,
      time: form.timeBar2.value,
      rating: form.ratingBar2.value,
      note: form.noteBar2.value
      };

    
    db.collection('recipes').add(recipe)
    .catch(err => console.log(err));
    
    form.methodBar2.value='';
    form.grindBar2.value='';
    form.coffeeBar2.value='';
    form.waterBar2.value='';
    form.temperatureBar2.value='';
    form.timeBar2.value='';
    form.ratingBar2.value='';
    form.noteBar2.value='';
});