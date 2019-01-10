const movieList = document.querySelector('#movie-list');

//Create element and render data
function renderMovie(doc){
    let li = document.createElement('li');
    let Name = document.createElement('span')
    let Metascore = document.createElement('span');
    let Year = document.createElement('span');
    
    li.setAttribute('data-id',doc.id);
    Name.textContent = doc.data().Name;
    Metascore.textContent = doc.data().Metascore;
    Year.textContent = doc.data().Year;

    li.appendChild(Name);
    li.appendChild(Metascore);
    li.appendChild(Year);
    movieList.append(li);
}

db.collection('movies').get().then((snapshot) => {
    // console.log(snapshot.docs);
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
        renderMovie(doc);
    });
})