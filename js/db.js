  // enable offline data
  db.enablePersistence()
  .catch(function(err) {
    if (err.code == 'failed-precondition') {
      // probably multible tabs open at once
      console.log('persistance failed');
    } else if (err.code == 'unimplemented') {
      // lack of browser support for the feature
      console.log('persistance not available');
    }
  });

// real-time listener
db.collection('recipes').orderBy('rating', 'desc').onSnapshot(snapshot => {
    // console.log(snapshot.docChanges());
    snapshot.docChanges().forEach(change => {
    //   console.log(change.type, change.doc.id, change.doc.data());
      if(change.type === 'added'){
        // add the document data to the web page
        renderRecipe(change.doc.data(), change.doc.id);
      }
      if(change.type === 'removed'){
        // remove the document data from the web page
        removeRecipe(change.doc.id);
      }
    });
  });

//add new recipe
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