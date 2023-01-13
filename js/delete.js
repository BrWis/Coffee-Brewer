const recipeContainer = document.querySelector('.recipes');
recipeContainer.addEventListener('click', evt => {
    // console.log(evt);
    if(evt.target.tagName === 'I'){
        const id = evt.target.getAttribute('data-id');
        db.collection('recipes').doc(id).delete();
    }
});
