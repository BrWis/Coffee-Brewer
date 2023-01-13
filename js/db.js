/* https://firebase.google.com/docs/firestore/manage-data/enable-offline */

// Funkcja trwalosci online ON
db.enablePersistence().catch(function(err) {
  if (err.code == 'failed-precondition') {
    // Multiple tabs open, persistence can only be enabled
    // in one tab at a a time
    console.log('persistance failed');
  } else if (err.code == 'unimplemented') {
    // The current browser does not support all of the
    // features required to enable persistence
    console.log('persistance not available');
  }
});

// Firestore Real-Time Listener
db.collection('recipes').orderBy('rating', 'desc').onSnapshot(snapshot => {
  // console.log(snapshot.docChanges());
  snapshot.docChanges().forEach(change => {
  //  console.log(change.type, change.doc.id, change.doc.data());
    if(change.type === 'added'){
      // Dodaj dane dokumentu(w firestore) do aplikacji
      renderRecipe(change.doc.data(), change.doc.id);
    }
    if(change.type === 'removed'){
      // Usuń dane dokumentu(w firestore) z aplikacji
      removeRecipe(change.doc.id);
    }
  });
});