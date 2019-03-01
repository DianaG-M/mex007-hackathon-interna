const buttonFilter = Array.from(document.getElementsByClassName("boton-type-chart"));
const printData = document.getElementById('prueba');
const search = document.getElementById('letter');
const director = document.getElementById('director');
const typeData = Array.from(document.getElementsByClassName('type'));
let kinema = [];
const movies = ["tt0892769", "tt8155288", "tt0437086", "tt3513498", "tt6513120", "tt7634968", "tt5715962", "tt0487591", "tt2043865", "tt4112448", "tt5259966", "tt0071204", "tt2676194", "tt2059255", "tt0412142", "tt0108778", "tt1183352", "tt1454468", "tt0473445", "tt0039668", "tt6794790", "tt0245574", "tt6155172", "tt0185116", "tt0245712", "tt1520211", "tt0238784", "tt0096697", "tt0460649", "tt8045690", "tt1608210", "tt0413573", "tt2707408", "tt2372162", "tt0229889", "tt2741602", "tt4158110", "tt0382271", "tt4154756", "tt4633694", "tt6342284", "tt1727824", "tt2395427", "tt2250912", "tt0499549", "tt0910970", "tt1517451"]

for (i = 0; i < movies.length; i++) {
  const url = "http://www.omdbapi.com/?i=" + movies[i] + "&apikey=91de21ce";
  fetch(url)
    .then(data => data.json())
    .then(data => {
      kinema.push(data);
      printFilms(kinema)
    })

}

const printFilms = (dataCinema) => {
  printData.innerHTML = "";
  dataCinema.map(element => {
    let genre = element.Genre;
    let infoCine = `<div class="casilla">
     <h6>${element.Title}</h6>
     <img src="${element.Poster}" class="img-Poster">
     <p>Genre: ${genre}</p>
     <p>Year: ${element.Year}</p>
     <p>Director: ${element.Director}</p>
     <p>Plot: ${element.Plot}</p>
     <p>Actors: ${element.Actors}</p>
     <p>Tipos: ${element.Type}</p>
     <p>Country: ${element.Country}</p></button>`;
    printData.insertAdjacentHTML("beforeend", infoCine);
  });
};

for (let i = 0; i < buttonFilter.length; i++) {
  buttonFilter[i].addEventListener('click', () => {
    const typeGenre = buttonFilter[i].id;
    const movieFilter = window.data.dataFiltered(kinema, typeGenre)
    printFilms(movieFilter)

  })
}
for (let i = 0; i < typeData.length; i++) {
  typeData[i].addEventListener('click', () => {
    const type = typeData[i].id;
    const movieFilter = window.data.dataType(kinema, type)
    printFilms(movieFilter)

  })
}

search.addEventListener('keyup', () => {
  const letterValue = search.value;
  const movieLetter = window.data.filterLetter(kinema, letterValue)
  printFilms(movieLetter);
})

director.addEventListener('keyup', () => {
  const dirValue = director.value;
  const dirLetter = window.data.filterDirector(kinema, dirValue)
  printFilms(dirLetter);
})